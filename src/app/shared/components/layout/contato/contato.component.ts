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
  showCorfirmDialog: boolean = false;
  msgModalConfirm: string = "";
  isEdit: boolean;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private contactService: ContactService,
    private progressBarService: ProgressBarService,
    private formBuilder: FormBuilder
  ) {}

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
