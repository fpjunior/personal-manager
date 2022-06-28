import {
  Component, ElementRef, EventEmitter, OnInit, Output, ViewChild
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MenuItem } from "primeng/api";
import { LoginService } from "src/app/auth/login/service/login.service";
import { BreadcrumbService } from "src/app/shared/components/breadcrumbs/breadcrumbs.service";
import { ProgressBarService } from "src/app/shared/components/progress-bar/progress-bar.service";
import { TableStandard } from "src/app/shared/models/table.model";
import { tryCatchErrorFunc } from "src/app/shared/utils/try-catch-error-func.util";
import { tableArr } from "./model/table.model";
import { UsersModel } from "./model/usuarios.model";
import { UserService } from "./service/usuarios.service";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.scss"],
})
export default class UsuariosComponent implements OnInit {

  // config Table
  cols = tableArr;
  fullCols = tableArr;
  immutableCols: string[] = [];
  dataToFillTable: any;
  users: Array<any>;
  user: any;
  usersForm!: FormGroup;
  @Output() mudouValor = new EventEmitter();
  @ViewChild("campoInput") campoValorInput: ElementRef;
  breadcrumbItems: MenuItem[] = [{ label: `Usuários` }];
  valueName;
  valueCpf;
  valueEmail;
  showDialogUser = false;
  showModalColumn = false;
  loading = false;
  showCorfirmDialog: boolean = false;
  showCorfirmDialog2: boolean = false;
  showModalResponse = false;
  contentResponse!: string;
  isErrorResponse!: boolean;
  rowData;
  idUser;
  enablebtnsave: boolean;
  msgModalConfirm: string = "";
  isEdit: boolean;
  valido: any;
  labelError: string;
  labelErrorComparePassword: string;
  confirmPassword: string;

  constructor(
    private _breadcrumbService: BreadcrumbService,
    private _userService: UserService,
    private _progressBarService: ProgressBarService,
    private _formBuilder: FormBuilder,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this._initForm();
    this.user = {};
    this._breadcrumbService.setBreadcrumb(this.breadcrumbItems);
    this.getAllUsers();
  }


  initForm(): void {
    this.usersForm = this._formBuilder.group({
      id: [""],
      name: ["", [Validators.required]],
      user: ["", [Validators.required]],
      cpf: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      password: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  verifyCpfLength(){
    if(this.usersForm.controls['cpf'].value.length === 14 && this.usersForm.controls['cpf'].value.slice(-1) != " "){
      this.cpfValidator();
    }else{
      this.labelError="";
      this.enablebtnsave= true;
    }
  }

  inputsClear(){
    this.usersForm.controls['name'].clearValidators();
    this.usersForm.controls['phone'].clearValidators();
    this.usersForm.controls['email'].clearValidators();
    this.usersForm.controls['password'].clearValidators();
    this.usersForm.controls['user'].clearValidators();
  }

  loseFocus(){
    if(this.usersForm.controls['cpf'].value.length != 14){
    this.labelError="CPF não possui 11 números";;
    }
  }

  cpfValidator(): boolean {

      let cpf= this.usersForm.controls['cpf'].value.replace(/[^0-9]/g,"");
      if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
        this.labelError="CPF não válido";
        this.enablebtnsave= true;
          return false;
      }
      let numero: number = 0;
      let caracter: string = '';
      let numeros: string = '0123456789';
      let j: number = 10;
      let somatorio: number = 0;
      let resto: number = 0;
      let digito1: number = 0;
      let digito2: number = 0;
      let cpfAux: string = '';
      cpfAux = cpf.substring(0, 9);
      for (let i: number = 0; i < 9; i++) {
          caracter = cpfAux.charAt(i);
          if (numeros.search(caracter) == -1) {
              return false;
          }
          numero = Number(caracter);
          somatorio = somatorio + (numero * j);
          j--;
      }
      resto = somatorio % 11;
      digito1 = 11 - resto;
      if (digito1 > 9) {
          digito1 = 0;
      }
      j = 11;
      somatorio = 0;
      cpfAux = cpfAux + digito1;
      for (let i: number = 0; i < 10; i++) {
          caracter = cpfAux.charAt(i);
          numero = Number(caracter);
          somatorio = somatorio + (numero * j);
          j--;
      }
      resto = somatorio % 11;
      digito2 = 11 - resto;
      if (digito2 > 9) {
          digito2 = 0;
      }
      cpfAux = cpfAux + digito2;
      if (cpf != cpfAux) {
        this.labelError="CPF não válido";
        this.enablebtnsave= true;
          return false;
      }
      else {
        this.labelError="";
        this.enablebtnsave= false;
          return true;
      }
  }


  closeConfirmDialog() {
    this.showCorfirmDialog = false;
  }

  closeConfirmDialog2() {
    this.showCorfirmDialog2 = false;
  }

  showModalSelectColumns() {
    this.showModalColumn = true;
  }

  onHideDialogTable = (): void => {
    this.showModalColumn = false;
  };

  editColumns(cols: TableStandard[]) {
    this.cols = cols;
  }

  onHide = () => {
    this.showModalResponse = false;
  };

  onShow(): boolean {
    return (this.showModalResponse = true);
  }

  private sucessResponse(
    msgResponse: string
  ): void {
    this.isErrorResponse = false;
    this.showModalResponse = true;
    this.contentResponse = msgResponse;
    this._progressBarService.changeProgressBar(false);
    setTimeout(() => {
      this.showModalResponse = false;
    }, 2000);
  }

  private handleError(err: any): void {
    this.isErrorResponse = true;
    this.showModalResponse = true;
    this.contentResponse = tryCatchErrorFunc(err);
    this._progressBarService.changeProgressBar(false);
    setTimeout(() => {
      this.showModalResponse = false;
    }, 2000);
  }

  private _initForm(): void {
    this.usersForm = this._formBuilder.group({
      id: [""],
      name: ["", [Validators.required]],
      user: ["", [Validators.required]],
      cpf: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      password: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  VerifyCpfLength() {
    if (this.usersForm.controls['cpf'].value.length === 11) {
      this._cpfValidator();
    } else {
      this.labelError = "";
      this.enablebtnsave = true;
    }
  }

  private _cpfValidator(): boolean {
    let cpf = this.usersForm.controls['cpf'].value;
    if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
      this.labelError = "CPF não válido";
      this.enablebtnsave = true;
      return false;
    }
    let numero: number = 0;
    let caracter: string = '';
    let numeros: string = '0123456789';
    let j: number = 10;
    let somatorio: number = 0;
    let resto: number = 0;
    let digito1: number = 0;
    let digito2: number = 0;
    let cpfAux: string = '';
    cpfAux = cpf.substring(0, 9);
    for (let i: number = 0; i < 9; i++) {
      caracter = cpfAux.charAt(i);
      if (numeros.search(caracter) == -1) {
        return false;
      }
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
    }
    resto = somatorio % 11;
    digito1 = 11 - resto;
    if (digito1 > 9) {
      digito1 = 0;
    }
    j = 11;
    somatorio = 0;
    cpfAux = cpfAux + digito1;
    for (let i: number = 0; i < 10; i++) {
      caracter = cpfAux.charAt(i);
      numero = Number(caracter);
      somatorio = somatorio + (numero * j);
      j--;
    }
    resto = somatorio % 11;
    digito2 = 11 - resto;
    if (digito2 > 9) {
      digito2 = 0;
    }
    cpfAux = cpfAux + digito2;
    if (cpf != cpfAux) {
      this.labelError = "CPF não válido";
      this.enablebtnsave = true;
      return false;
    }
    else {
      this.labelError = "";
      this.enablebtnsave = false;
      return true;
    }
  }

  onHideDialog() { }

  openDialogAddUser() {
    this.usersForm.reset();
    this.showDialogUser = true;
    this.inputsClear();
    this.labelError = "";
  }

  openConfirmCancel() {
    this.showCorfirmDialog2 = true;
    this.msgModalConfirm = "Tem certeza que deseja sair? Dados digitados anteriormente não serão salvos.";
  }

  openConfirmDelete(idToDelete: string) {
    this.msgModalConfirm = "Tem certeza que deseja excluir este registro?";
    this.idUser = idToDelete;
    this.showCorfirmDialog = true;
  }

  confirmAction() {
    if (this.isEdit) {
      this.showDialogUser = false;
      this.showCorfirmDialog = false;
    } else {
      this.deleteUser();
      this.showCorfirmDialog = false;
      this.showDialogUser = false;
    }
  }

  confirmAction2() {
    if (this.isEdit) {
      this.showDialogUser = false;
      this.showCorfirmDialog2 = false;
    } else {
      this.showCorfirmDialog2 = false;
      this.showDialogUser = false;
    }
  }

  deleteUser() {
    this._progressBarService.changeProgressBar(true);
    this._userService.deleteUser(this.idUser).subscribe(
      () => {
        this.sucessResponse("Usuario deletado com sucesso");
        setTimeout(() => {
          this.getAllUsers();
        }, 2500);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  saveUser(usersForm: any): void {
    usersForm = this.usersForm.getRawValue();
    this._userService.saveOrUpdateUser(usersForm).subscribe(
      () => {
        this.usersForm.reset();
        this.showDialogUser = false;
        this.sucessResponse("Usuario salvo com sucesso");
        this.loginService.criarUsuario(usersForm.email, usersForm.password)
        setTimeout(() => {
          this.getAllUsers();
        }, 2000);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  editUser(event) {
    this.isEdit = true;
    this.msgModalConfirm = 'Tem certeza que deseja sair? Alterações não serão salvas.';
    this.rowData = event;
    this.showDialogUser = true;
    this.inputsClear();
    this.usersForm.setValue(event);
  }

  getAllUsers() {
    this._progressBarService.changeProgressBar(true);
    this.loading = true;
    this._userService.getAllUsers().subscribe(
      (user: any) => {
        // this.dataToFillTable = Object.entries(user).map(e=> e[1]);
        this.dataToFillTable = Object.entries(user).map((e: any) => {
          e[1].id = e[0];
          return e[1];
        });
        this.loading = false;
        this._progressBarService.changeProgressBar(false);
      },
      (error) => {
        this.handleError(error);
        this.loading = false;
        this.handleError(error);
        this._progressBarService.changeProgressBar(false);
      }
    );
  }
  comparePassword() {
    let password = this.usersForm.controls['password'].value;
    let confirmPassword = this.confirmPassword;

    if (password != confirmPassword) {
      this.labelErrorComparePassword = "Senha incorreta";
    } else {
      return;
    }
  }
}
