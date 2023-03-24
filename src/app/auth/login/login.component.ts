import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Component, Input, OnInit, ViewChild, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/pages/usuarios/service/usuarios.service";
import { CryptoService } from "src/app/shared/services/crypto.service";
import { LoginService } from "./service/login.service";
import { AuthService } from '../service/auth.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ProgressBarService } from 'src/app/shared/components/progress-bar/progress-bar.service';
import { StatusMessage } from 'src/app/shared/constants/status-message';
import { tryCatchErrorFunc } from 'src/app/shared/utils/try-catch-error-func.util';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @Input() isLoged;
  objUser: any;
  userName: string;
  loginForm!: FormGroup;
  showMessage = false;
  statusMessage!: StatusMessage;
  infoMessage!: string;
   closable = false;
   userDisabled: boolean = false;
   userNotCreated: boolean = false;

  constructor(
    private loginService: LoginService,
    private _userService: UserService,
    private cryptoService: CryptoService,
    private authService: AuthService,
    private storageService: StorageService,
    private progressBarService: ProgressBarService,
    private router: Router,
    @Inject(FormBuilder) private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      lojas: [{ value: '', disabled: true }, [Validators.required]]
    });
    this.getAllUsers();
  }

   private displayMessage(statusMessage: StatusMessage, closable: boolean, message: string) {
    this.showMessage = true;
    this.statusMessage = statusMessage;
    this.closable = closable ? true : false;
    this.infoMessage = message;
  }

  private hasErrorInLogin(error: string) {
    this.storageService.resetStorage()
    this.displayMessage('error', true, error);
    this.progressBarService.changeProgressBar(false);
  }

  async login(): Promise<void> {
    const userData = this.loginForm.getRawValue();

    this.progressBarService.changeProgressBar(true);
    this.cryptoService.encryptSafeKey(userData.user)
    this.userName = userData.user.split('@')[0];
    // this.cryptoService.setToEncrypt("user", mail)
    sessionStorage.setItem("user", userData.user);
    // this.loginService.login(userData.user, userData.password);
    this.isLoged = true;

    try {

      this.authService.login(userData).then((userCredential: any) => {

        this._userService.authToken = localStorage.getItem("token");

        // if (userCredential.error?.code === 401) {
        //   this.hasErrorInLogin(userCredential.error?.description)
        //   return
        // }


        // if (userCredential.disabled == true) {
        //   this.hasErrorInLogin("Usuário desabilitado!")
        //   return
        // }


        setTimeout(() => {

          this.isValidLogin()
          this._userService.setUserSection(userCredential)
        }, 1500);
      }, err => this.hasErrorInLogin(tryCatchErrorFunc(err)))
    } catch (error) {
      this.hasErrorInLogin(tryCatchErrorFunc(error))
    }
  }

  private isValidLogin() {
    this.displayMessage('success', false, 'Bem vindo ao portal.');
    setTimeout(() => {
      this.progressBarService.changeProgressBar(false);
      this.router.navigate([''])
    }, 1500);
  }

  logOn(email, password) {
    this.userName = email.split('@')[0];
    // this.cryptoService.setToEncrypt("user", mail)
    sessionStorage.setItem("user", email);
    this.loginService.login(email, password);
    this.isLoged = true;
  }

  criarUsuario(mail, password) {
    this.loginService.criarUsuario(mail, password);
    this.isLoged = true;
  }

  recuperarSenha(mail) {
    this.loginService.recuperarSenha(mail).subscribe(
      (sucess)=>{
        alert("sucesso")
      },
      (error)=> {
        alert("erro")
      }
    );
  }
    isUserDisabled(isUserDisabled?: boolean) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) {
        return null;
      }
      const isUserDisabled = this.userDisabled
      if (isUserDisabled) {
        return { userDisabled: true };
      } else {
        return null;
      }
    }
  }

  resetPassword() {
    this.router.navigate(['/password/forgot'])
  }

  private validaForm(isUserDisabled: boolean) {
    if (isUserDisabled) {
      this.loginForm.get('email').setValidators(this.isUserDisabled(isUserDisabled));
      this.loginForm.controls.user.updateValueAndValidity();
    } else {
      this.loginForm.controls.user.updateValueAndValidity();
    }
  }

  private getAllUsers() {
    this._userService.getAllUsers().subscribe(
      (user: any) => {
        this.objUser = Object.entries(user).map((e: any) => {
          e[1].id = e[0];
          return e[1];
        });
      },
      (error) => {}
    );
  }
}
