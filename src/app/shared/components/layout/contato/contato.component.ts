import { FormGroup } from '@angular/forms';
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

  dataToFillTable: ContactsModel[];
  contacts: Array<any>
  contact: any

  @Output() mudouValor = new EventEmitter();

  @ViewChild("campoInput") campoValorInput: ElementRef;

  breadcrumbItems: MenuItem[] = [{ label: `Contatos` }];
  showModalLiberar = false;
  valueName;
  valueIdade;
  valueCpf;
  valueEmail;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit() {
    this.contact = {}
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
    this.getAllContacts();
  }

  onHideLiberacao() {}

  saveContact(frm: any): void {
    this.contactService.saveContact(this.contact).subscribe(
      (response) => {
        // this.contact.push(response)
        frm.reset();
        alert("contato criado com sucesso");
      },
      (error) => {
        alert("erro ao criar um novo contato");
      }
    );
  }

  goToTheContactForm = () => this.router.navigate(["/contato-form"]);

  getAllContacts() {
    this.contactService.getAllContacts().subscribe(
      (contact) => {
        this.dataToFillTable = contact;
      },
      (error) => {}
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
