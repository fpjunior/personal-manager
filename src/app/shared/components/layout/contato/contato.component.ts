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


  isSaveOrUpdate = "Cadastrar Contato"

  constructor(
    private breadcrumbService: BreadcrumbService,
    private contactService: ContactService,
    private router: Router,
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

  saveContact(frm: any): void {
   frm = this.contactsForm.getRawValue();
    this.contactService.saveContact(frm).subscribe(
      (response) => {
        // this.contact.push(response)
        this.contactsForm.reset();
        this.showDialogContact = false;
        this.getAllContacts()
        alert("contato criado com sucesso");
      },
      (error) => {
        alert("erro ao criar um novo contato");
      }
    );
  }

  goToTheContactForm = () => this.router.navigate(["/contato-form"]);

  getAllContacts() {
    this.loading = true;
    this.contactService.getAllContacts().subscribe(
      (contact) => {
        this.dataToFillTable = contact;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  changeValue(valueToChange: number, operator: string) {
    //bloco dos botões de incremento
    if (operator === "+") {
      if (valueToChange === 1) {
        this.valueInput1 = this.valueInput1 + valueToChange;
      }
      if (valueToChange === 2) {
        this.valueInput2 = this.valueInput2 + valueToChange;
      }
      if (valueToChange === 4) {
        this.valueInput3 = this.valueInput3 + valueToChange;
      }
      if (valueToChange === 10) {
        this.valueInput4 = this.valueInput4 + valueToChange;
      }
    }
    //bloco dos botões de decremento
    if (operator === "-") {
      if (valueToChange === 1) {
        this.valueInput1 = this.valueInput1 - valueToChange;
      }
      if (valueToChange === 2) {
        this.valueInput2 = this.valueInput2 - valueToChange;
      }
      if (valueToChange === 4) {
        this.valueInput3 = this.valueInput3 - valueToChange;
      }
      if (valueToChange === 10) {
        this.valueInput4 = this.valueInput4 - valueToChange;
      }
    }
  }
  zeroValue(input: string) {
    if (input === "input1") {
      this.valueInput1 = 0;
    }
    if (input === "input2") {
      this.valueInput2 = 0;
    }
    if (input === "input3") {
      this.valueInput3 = 0;
    }
    if (input === "input4") {
      this.valueInput4 = 0;
    }
  }

  dialog(display) {
    if (display === false) {
      this.display = true;
    }
    if (display === true) {
      this.display = false;
    }
  }
}
