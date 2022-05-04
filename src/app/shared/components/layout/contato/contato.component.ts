import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { ProgressBarService } from '../../progress-bar/progress-bar.service';
import { TableStandard } from 'src/app/shared/models/table.model';
import { tableArr } from './model/table.model';
import { tryCatchError } from 'src/app/shared/utils/erro-handler.util';

@Component({
  selector: "app-contato",
  templateUrl: "./contato.component.html",
  styleUrls: ["./contato.component.scss"],
})
export class ContatoComponent implements OnInit {
  @Input() valor: number = 10;
  @Input() valorInicial: number = 10;

  valueInput1: number = 0;
  valueInput2: number = 0;
  valueInput3: number = 0;
  valueInput4: number = 0;
  display: boolean = false;

  // config Table
  cols = tableArr;
  fullCols = tableArr;
  immutableCols: string[] = [];
  showModalColumn = false;

  dataToFillTable: ContactsModel[];
  contacts: Array<any>
  contact: any

  showModalResponse = false;
  isErrorResponse: boolean;
  contentResponse: string;
  showModalDelete = false;

  contactsForm!: FormGroup;

  @Output() mudouValor = new EventEmitter();

  @ViewChild("campoInput") campoValorInput: ElementRef;

  breadcrumbItems: MenuItem[] = [{ label: `Contatos` }];
  showDialogContact = false;
  valueName;
  valueIdade;
  valueCpf;
  valueEmail;
  loading = false;
  rowData;
  idContactToDelete: number;


  isSaveOrUpdate = "Cadastrar Contato"

  constructor(
    private breadcrumbService: BreadcrumbService,
    private contactService: ContactService,
    private progressBarService: ProgressBarService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.form()
    this.contact = {}
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
    this.getAllContacts();
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



  form(): void {
    this.contactsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onHideDialog() {}

  openDialogAddContact(){
    this.contactsForm.reset()
    this.showDialogContact = true
  }

  connect(): void {
    // this.progressBarService.changeProgressBar(true);
    // const ocurrenceObj = this.contactsForm.getRawValue();
    // delete(ocurrenceObj.client)

    // this.applicationUser = {
    //   ...ocurrenceObj
    // }
    // if (this.editMode) {
    //   this.editUser();
    //   this.resetForm();
    //   return;
    // }

    // // this.createUser();
    // // this.resetForm();
  }



  editContact(event){
    this.rowData = event
    let fb = this.contactsForm.controls
    this.showDialogContact = true;
    this.contactsForm.controls['name'].setValue(event.name)
    fb['idade'].setValue(event.idade)
    fb['cpf'].setValue(event.cpf)
    fb['email'].setValue(event.email)
  }


  openDialogDelete(id){
    this.showModalDelete = true;
    this.idContactToDelete = id
  }

  handleError(err: any){
    this.isErrorResponse = true;
    this.showModalResponse = true;
    this.contentResponse = tryCatchError(err);
  }

  confirmDelete(){
    this.contactService.deleteById(this.idContactToDelete).subscribe(
      ()=>{
        this.getAllContacts();
        this.showModalDelete = false;
        this.showModalResponse = true;
        this.contentResponse = 'Contato deletado com sucesso!';
      },
      (err) =>{
        this.handleError(err)
      }
    )
  }

  saveContact(frm: any): void {
    this.loading = true;
   frm = this.contactsForm.getRawValue();
  this.rowData
  ? frm.id = this.rowData.id
  : frm
    this.contactService.saveOrUpdate(frm).subscribe(
      () => {
        this.contactsForm.reset();
        this.showDialogContact = false;
        this.showModalResponse = true;
        this.contentResponse = 'Contato criado com sucesso!';
        this.getAllContacts();
        this.loading = false;
      },
      (err) => {
        this.handleError(err);
        this.loading = false;
      }
    );
  }

  getAllContacts() {
    this.loading = true;
    this.contactService.getAllContacts().subscribe(
      (contact) => {
        this.dataToFillTable = contact;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        this.handleError(err);
      }
    );
  }
}
