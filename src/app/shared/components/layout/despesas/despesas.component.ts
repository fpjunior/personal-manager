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
import { ProgressBarService } from '../../progress-bar/progress-bar.service';
import { TableStandard } from 'src/app/shared/models/table.model';
import { tableArr } from './model/tabela.model';
import { DespesasModel } from './model/despesas.model';
import { DespesasService } from './service/despesas.service';


@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent implements OnInit {

  // config Table
  cols = tableArr;
  fullCols = tableArr;
  immutableCols: string[] = [];
  showModalColumn = false;

  dataToFillTable: DespesasModel[];
  despesas: Array<any>
  despesa: any

  despesasForm!: FormGroup;

  @Output() mudouValor = new EventEmitter();

  @ViewChild("campoInput") campoValorInput: ElementRef;

  breadcrumbItems: MenuItem[] = [{ label: `Despesas` }];
  showDialogDespesa = false;
  valueCode;
  valueDescription;
  valueType;
  valueValue;
  valueTypePayment;
  valueLocalEstablishment;
  valueExpenseDate;
  valueStatus;
  loading = false;


  isSaveOrUpdate = "Cadastrar Despesa"

  constructor(
    private breadcrumbService: BreadcrumbService,
    private despesasService: DespesasService,
    private router: Router,
    private progressBarService: ProgressBarService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
    this.form()
    this.despesa = {}
    this.getAllDespesas();

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
    this.despesasForm = this.formBuilder.group({
      description: ['', [Validators.required]],
      type: ['', [Validators.required]],
      value: ['', [Validators.required]],
      typePayment: ['', [Validators.required]],
      localEstablishment: ['', [Validators.required]],
      expenseDate: ['', [Validators.required]],
    });
  }

  onHideDialog() {}

  openDialogAddDespesa(){
    this.despesasForm.reset()
    this.showDialogDespesa = true
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

  saveDespesa(frm: any): void {
   frm = this.despesasForm.getRawValue();
    this.despesasService.saveDespesa(frm).subscribe(
      (response) => {
        this.despesasForm.reset();
        this.showDialogDespesa = false;
        this.getAllDespesas()
        alert("contato criado com sucesso");
      },
      (error) => {
        alert("erro ao criar um novo contato");
      }
    );
  }

  goToTheDespesaForm = () => this.router.navigate(["/despesa-form"]);

  getAllDespesas() {
    this.loading = true;
    this.despesasService.getAllDespesas().subscribe(
      (despesa) => {
        this.dataToFillTable = despesa;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }


}
