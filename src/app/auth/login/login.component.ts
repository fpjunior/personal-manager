import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import { ProgressBarService } from 'src/app/shared/components/progress-bar/progress-bar.service';
import { StatusMessage } from 'src/app/shared/constants/status-message';
import { StorageService } from 'src/app/shared/services/storage.service';
import { tryCatchErrorFunc } from 'src/app/shared/utils/try-catch-error-func.util';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  showMessage = false;
  statusMessage!: StatusMessage;
  infoMessage!: string;
  closable = false;

  constructor(private authService: AuthService,
    private router: Router,
    private progressBarService: ProgressBarService,
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private userService: UserService,
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      lojas: [{ value: '', disabled: true }, [Validators.required]]
    });

  }


  private isValidLogin() {

    this.displayMessage('success', false, 'Bem vindo ao portal.');
    setTimeout(() => {
      this.progressBarService.changeProgressBar(false);
      this.router.navigate(['/dashboard'])
    }, 1500);
  }

  async login(): Promise<void> {
    const userData = this.loginForm.getRawValue();

    this.progressBarService.changeProgressBar(true);

    try {

      this.authService.login(userData).then(userCredential => {

        if (userCredential) {
          if (userCredential.error?.code === 401) {
            this.storageService.resetStorage()
            this.displayMessage('error', true, userCredential.error?.description);
            this.progressBarService.changeProgressBar(false);
          } else {

            // this.cryptoService.encryptSafeKey(userCredential.user)
            this.userService.authToken = userCredential.token

            if (userCredential.disabled == true) {
              this.storageService.resetStorage()
              this.displayMessage('error', true, "Usuário desabilitado!");
              this.progressBarService.changeProgressBar(false);
            } else {
              setTimeout(() => {
                this.userService.setUserSection(userCredential)
                this.isValidLogin()
              }, 1500);
            }
          }
        }
      }, err => {
        this.storageService.resetStorage()
        this.displayMessage('error', true, tryCatchErrorFunc(err));
        this.progressBarService.changeProgressBar(false);
      })
    } catch (error) {
      this.storageService.resetStorage()
      this.displayMessage('error', true, tryCatchErrorFunc(error));
      this.progressBarService.changeProgressBar(false);
    }
  }

  private displayMessage(statusMessage: StatusMessage, closable: boolean, message: string) {
    this.showMessage = true;
    this.statusMessage = statusMessage;
    this.closable = closable ? true : false;
    this.infoMessage = message;
  }

}
