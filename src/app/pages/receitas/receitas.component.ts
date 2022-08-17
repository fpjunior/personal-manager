import {
  Component, ElementRef, EventEmitter, OnInit,
  Output, ViewChild
} from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MenuItem } from "primeng/api";
import { TableStandard } from "src/app/shared/models/table.model";
import { tryCatchErrorFunc } from "src/app/shared/utils/try-catch-error-func.util";
import { BreadcrumbService } from "../../shared/components/breadcrumbs/breadcrumbs.service";
import { ProgressBarService } from "../../shared/components/progress-bar/progress-bar.service";
import { TiposDespesasService } from "../tiposdespesas/service/tiposdespesas.service";
import { tableArr } from "./model/tabela.model";
import { ReceitaService } from "./service/receitas.service";


@Component({
  selector: "app-receitas",
  templateUrl: "./receitas.component.html",
  styleUrls: ["./receitas.component.scss"],
})
export class ReceitasComponent implements OnInit {
  // config Table
  @Output() mudouValor = new EventEmitter();
  @ViewChild("campoInput") campoValorInput: ElementRef;
  breadcrumbItems: MenuItem[] = [{ label: `Receitas` }];
  cols = tableArr;
  fullCols = tableArr;
  isLoading = false;
  showModalColumn = false;
  showDialogReceita = false;
  showModalResponse = false;
  showCorfirmDialog = false;
  showCorfirmDialog2 = false;
  immutableCols: string[] = [];
  receitas: Array<any>;
  dataToFillTable: any;
  categoriaOptions: any;
  receita: any;
  receitaForm!: FormGroup;
  isEdit: boolean;
  contentResponse!: string;
  msgModalConfirm: string = "";
  isErrorResponse!: boolean;
  valuecategoria;
  valuedescription;
  valuevalue;
  valueAccount;
  valuelocalEstablishment;
  valueexpenseDate;
  codeReceita;
  rowData;
  labelError: string= "";
  dataAtual: string = "";
  conta;

  constructor(
    private _breadcrumbService: BreadcrumbService,
    private _receitaService: ReceitaService,
    private _progressBarService: ProgressBarService,
    private _formBuilder: FormBuilder,
    private _tiposDespesasService: TiposDespesasService,
  ) { }

  dropdownOptions = [
    { value: '1', label: 'BRADESCO' },
    { value: '2', label: 'SATANDER' },
    { value: '3', label: 'CARTEIRA' },
    { value: '4', label: 'VALE ALIMENTAÇÃO' },
    { value: '5', label: 'NUBANK' },
    ];


  ngOnInit() {
    this.getAllReceitas();
    this._initForm();
    this.receita = {};
    this._breadcrumbService.setBreadcrumb(this.breadcrumbItems);
  }

// a organização do código é importante para que o código seja mais fácil de manter
// por padrão os métodos privados vêm antes dos métodos públicos por ordem alfabética
// a escrita do método privado deve iniciar com _
  private _handleError(err: any): void {
    this.isErrorResponse = true;
    this.showModalResponse = true;
    this.contentResponse = tryCatchErrorFunc(err);
    this._progressBarService.changeProgressBar(false);
    setTimeout(() => {
      this.showModalResponse = false;
    }, 2000);
  }

  private _initForm(): void {
    this.receitaForm = this._formBuilder.group({
      code: [""],
      description: ["", [Validators.required, Validators.maxLength(100)]],
      value: ["", [Validators.required, Validators.min(0), Validators.max(999999)]],
      typeRevenue: ["", [Validators.required, Validators.min(1), Validators.max(60)]],
      expenseDate: ["", [Validators.required, Validators.maxLength(10), Validators.minLength(10),]],
      account: ["", [Validators.required, Validators.min(1), Validators.max(60)]],
      fixedIncome: [""],
    });
  }

  private _sucessResponse(
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

  // essa funçao do tipo get faz com que a gente permita usar this.f['nomeDoCampo'].value ao invés de usar this.receitaForm.controls['nomeDoCampo'].value
  get f(): { [key: string]: AbstractControl; } { return this.receitaForm.controls; }

  closeConfirmDialog() {
    this.showCorfirmDialog = false;
  }


  closeConfirmDialog2() {
    this.showCorfirmDialog2 = false;
  }

  confirmAction2() {
    if (this.isEdit) {
      this.showDialogReceita = false;
      this.showCorfirmDialog2 = false;
    } else {
      this.showCorfirmDialog2 = false;
      this.showDialogReceita = false;
    }
  }

  verifyValue(){
    if(this.receitaForm.controls['value'].value === 0){
      this.labelError= "Valor não pode ser 0";
    }else{
      this.labelError= "";
    }
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

  onHide = () => this.showModalResponse = false;

  onShow = () => this.showModalResponse = true;

  onHideDialog() { }

  openConfirmCancel() {
    this.showCorfirmDialog2 = true;
    this.msgModalConfirm = "Tem certeza que deseja sair? Dados digitados anteriormente não serão salvos.";
  }

  obterDataAtual() {
    const date = new Date();
    this.dataAtual= date.toLocaleDateString("pt-BR");
}

  openDialogAddReceita() {
    this.receitaForm.reset();
    this.receitaForm.setErrors({});
    this.showDialogReceita = true;
    this.dataAtual = "";
  }

  openConfirmDelete(codeToDelete: string) {
    this.msgModalConfirm = "Tem certeza que deseja excluir esta Receita?";
    this.codeReceita = codeToDelete;
    this.showCorfirmDialog = true;
  }

  confirmAction() {
    if (this.isEdit) {
      this.showDialogReceita = false;
      this.showCorfirmDialog = false;
    } else {
      this.deleteReceita();
      this.showCorfirmDialog = false;
      this.showDialogReceita = false;
    }
  }



  deleteReceita() {
    this._progressBarService.changeProgressBar(true);
    this._receitaService.deleteReceita(this.codeReceita).subscribe(
      (response) => {
        this._sucessResponse("Receita deletada com sucesso");
        setTimeout(() => {
          this.getAllReceitas();
        }, 2500);
      },
      (error) => {
        this._handleError(error);
      }
    );
  }

  saveReceita(receitaForm: any): void {
    receitaForm = this.receitaForm.getRawValue();
    receitaForm.dateRecord = new Date().toISOString();
    const objForSave = {
      ...receitaForm,
      account: receitaForm.account.label,
      fixedIncome: receitaForm.fixedIncome === null? 'NÃO' : 'SIM',
    }
    this._receitaService.saveOrUpdateReceita(objForSave).subscribe(
      () => {
        this.receitaForm.reset();
        this.showDialogReceita = false;
        this._sucessResponse("Receita cadastrada com sucesso");
        setTimeout(() => {
          this.getAllReceitas();
        }, 2000);
      },
      (error) => {

      }
    );
  }

  editReceita(event) {
    this.isEdit = true;
    this.msgModalConfirm = 'Tem certeza que deseja sair? Alterações não serão salvas.';
    this.rowData = event;
    this.showDialogReceita = true;
    this.receitaForm.patchValue(event);
    this.dropdownOptions.filter((option) => {
      if (option.label === event.account) {
      this.receitaForm.controls["account"].setValue(option);
      }
    });
  }

  getAllReceitas() {
    this._progressBarService.changeProgressBar(true);
    this.isLoading = true;
    this._receitaService.getAllReceitas().subscribe(
      (receita: any) => {
        // this.dataToFillTable = Object.entries(contact).map(e=> e[1]);
        this.dataToFillTable = Object.entries(receita).map((e: any) => {
          e[1].code = e[0];
          return e[1];
        })
        this.isLoading = false;
        this._progressBarService.changeProgressBar(false);
      },
      (error) => {
        this._handleError(error);
        this.isLoading = false;
        this._handleError(error);
        this._progressBarService.changeProgressBar(false);
      }
    );
  }
}
