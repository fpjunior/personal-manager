import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { BreadcrumbService } from "../../breadcrumbs/breadcrumbs.service";
import { contactsMock } from "./mock/contato.mock";
import { ContactsModel } from "./model/contact.model";
import { ContactService } from "./service/contact.service";
import { ProgressBarService } from "../../progress-bar/progress-bar.service";
import { TableStandard } from "src/app/shared/models/table.model";
import { tableArr } from "./model/table.model";
import { tryCatchErrorFunc } from "src/app/shared/utils/try-catch-error-func.util";

@Component({
  selector: "app-contato",
  templateUrl: "./contato.component.html",
  styleUrls: ["./contato.component.scss"],
})
export class ContatoComponent implements OnInit {

  // config Table
  cols = tableArr;
  fullCols = tableArr;
  immutableCols: string[] = [];
  showModalColumn = false;

  dataToFillTable: any;
  contacts: Array<any>;
  contact: any;

  contactsForm!: FormGroup;

  @Output() mudouValor = new EventEmitter();
  @ViewChild("campoInput") campoValorInput: ElementRef;

  breadcrumbItems: MenuItem[] = [{ label: `Contatos` }];
  showDialogContact = false;
  valueName;
  valueage;
  valueCpf;
  valueEmail;
  loading = false;
  showModalResponse = false;
  contentResponse!: string;
  isErrorResponse!: boolean;
  rowData;
  idContact;
  enablebtnsave: boolean;

  showCorfirmDialog: boolean = false;
  msgModalConfirm: string = "";
  isEdit: boolean;
  valido: any;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private contactService: ContactService,
    private progressBarService: ProgressBarService,
    private formBuilder: FormBuilder
  ) {}

  labelError: string;

  VerifyCpfLength(){
    if(this.contactsForm.controls['cpf'].value.length === 11){
      this.cpfValidator();
    }
  }


  LoseFocus(){
    if(this.contactsForm.controls['cpf'].value.length != 11){
      this.labelError="O CPF digitado não possui 11 caracteres";
      this.enablebtnsave= true;
    }
  }

  cpfValidator(): boolean {

      let cpf= this.contactsForm.controls['cpf'].value;

      if ((cpf == '00000000000') || (cpf == '11111111111') || (cpf == '22222222222') || (cpf == '33333333333') || (cpf == '44444444444') || (cpf == '55555555555') || (cpf == '66666666666') || (cpf == '77777777777') || (cpf == '88888888888') || (cpf == '99999999999')) {
        this.labelError="O CPF não é válido";
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
        this.labelError="O CPF não é válido";
        this.enablebtnsave= true;
          return false;
      }
      else {
        this.labelError="";
        this.enablebtnsave= false;
          return true;
      }
}


  ngOnInit() {
    this.initForm();
    this.contact = {};
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
    this.getAllContacts();
  }

  closeConfirmDialog() {
    this.showCorfirmDialog = false;
  }

  // confirmExit() {
  //   this.showCorfirmDialog = false;
  //   this.showDialogContact = false;
  // }

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
    this.progressBarService.changeProgressBar(false);
    setTimeout(() => {
      this.showModalResponse = false;
    }, 2000);
  }

  private handleError(err: any): void {
    this.isErrorResponse = true;
    this.showModalResponse = true;
    this.contentResponse = tryCatchErrorFunc(err);
    this.progressBarService.changeProgressBar(false);
    setTimeout(() => {
      this.showModalResponse = false;
    }, 2000);
  }

  initForm(): void {
    this.contactsForm = this.formBuilder.group({
      id: [""],
      name: ["", [Validators.required]],
      age: ["", [Validators.required]],
      cpf: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  onHideDialog() {}

  openDialogAddContact() {
    this.contactsForm.reset();
    this.showDialogContact = true;
    this.labelError="";
  }

  openConfirmCancel(){
    this.showCorfirmDialog = true;
    this.msgModalConfirm = "Tem certeza que deseja cancelar? Alterações serão descartadas";
  }

  openConfirmDelete(idToDelete: string) {
    this.msgModalConfirm = "Tem certeza que deseja excluir este registro?";
    this.idContact = idToDelete;
    this.showCorfirmDialog = true;
  }

  confirmAction(){
    if(this.isEdit){
      this.showDialogContact = false;
      this.showCorfirmDialog = false;
    } else {
      this.deleteContact();
      this.showCorfirmDialog = false;
      this.showDialogContact = false;
    }
  }

  deleteContact() {
    this.progressBarService.changeProgressBar(true);
    this.contactService.deleteContact(this.idContact).subscribe(
      (response) => {
        this.sucessResponse("Contato deletado com sucesso");
        setTimeout(() => {
          this.getAllContacts();
        }, 2500);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  saveContact(contactsForm: any): void {
    contactsForm = this.contactsForm.getRawValue();
    this.contactService.saveOrUpdateContact(contactsForm).subscribe(
      (response) => {
        this.contactsForm.reset();
        this.showDialogContact = false;
        this.sucessResponse("Contato salvo com sucesso");
        setTimeout(() => {
          this.getAllContacts();
        }, 2000);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  editContact(event) {
    this.isEdit = true;
    this.msgModalConfirm = 'Tem certeza que deseja sair? Alterações não serão salvas.';
    this.rowData = event;
    this.showDialogContact = true;
    this.contactsForm.setValue(event);
  }

  // goToTheContactForm = () => this.router.navigate(["/contato-form"]);

  getAllContacts() {
    this.progressBarService.changeProgressBar(true);
    this.loading = true;
    this.contactService.getAllContacts().subscribe(
      (contact: any) => {
        // this.dataToFillTable = Object.entries(contact).map(e=> e[1]);
        this.dataToFillTable = Object.entries(contact).map((e: any) => {
          e[1].id = e[0];
          return e[1];
        });
        this.loading = false;
        this.progressBarService.changeProgressBar(false);
      },
      (error) => {
        this.handleError(error);
        this.loading = false;
        this.handleError(error);
        this.progressBarService.changeProgressBar(false);
      }
    );
  }

  // dialog(display) {
  //   if (display === false) {
  //     this.display = true;
  //   }
  //   if (display === true) {
  //     this.display = false;
  //   }
  // }
}
