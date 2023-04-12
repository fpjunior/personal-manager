import {
  Component, ElementRef, EventEmitter, OnInit,
  Output, ViewChild
} from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MenuItem } from "primeng/api";
import { Subscription } from "rxjs";
import { TableStandard } from "src/app/shared/models/table.model";
import { tryCatchErrorFunc } from "src/app/shared/utils/try-catch-error-func.util";
import { BreadcrumbService } from "../../shared/components/breadcrumbs/breadcrumbs.service";
import { ProgressBarService } from "../../shared/components/progress-bar/progress-bar.service";
import { CategoriasService } from "../categorias/service/categorias.service";
import { tableArr } from "./model/tabela.model";
import { DespesaService } from "./service/despesas.service";

@Component({
  selector: "app-despesas",
  templateUrl: "./despesas.component.html",
  styleUrls: ["./despesas.component.scss"],
})
export class DespesasComponent implements OnInit {
  @Output() mudouValor = new EventEmitter();
  @ViewChild("campoInput") campoValorInput: ElementRef;
  breadcrumbItems: MenuItem[] = [{ label: `Despesas` }];
  cols = tableArr;
  fullCols = tableArr;
  isLoading = false;
  showModalColumn = false;
  showDialogDespesa = false;
  showModalResponse = false;
  showCorfirmDialog = false;
  showCorfirmDialog2 = false;
  immutableCols: string[] = [];
  despesas: Array<any>;
  dataToFillTable: any;
  categoriaOptions: any;
  categorias: any;
  expenseForm!: FormGroup;
  isEdit: boolean;
  contentResponse!: string;
  msgModalConfirm: string = "";
  isErrorResponse!: boolean;
  valuecategoria;
  valuedescription;
  valuevalue;
  valuetypePayment;
  valuelocalEstablishment;
  valueexpenseDate;
  codeDespesa;
  rowData;
  labelError: string = "";
  dataAtual: string = "";
  payments: any;
  dropdownOptions: any;
  itemCount: number;

  constructor(
    private _breadcrumbService: BreadcrumbService,
    private _despesaService: DespesaService,
    private _progressBarService: ProgressBarService,
    private _formBuilder: FormBuilder,
    private _categoriasService: CategoriasService,
  ) {

    this.payments = [
      { value: "1", name: 'PIX' },
      { value: "2", name: 'CRÉDITO' },
      { value: "3", name: 'DÉBITO' },
      { value: "4", name: 'DINHEIRO' },
      { value: "5", name: 'OUTROS' },
    ];

    this.dropdownOptions = [
      { value: '1', name: 'BRADESCO' },
      { value: '2', name: 'SATANDER' },
      { value: '3', name: 'CARTEIRA' },
      { value: '4', name: 'VALE ALIMENTAÇÃO' },
      { value: '5', name: 'NUBANK' },
    ];
  }

  ngOnInit() {
    this._initForm();
    this.categorias = {};
    this._breadcrumbService.setBreadcrumb(this.breadcrumbItems);
    this._getAllExpense();
    this._getAllCategory()
  }

  // a organização do código é importante para que o código seja mais fácil de manter
  // por padrão os métodos privados vêm antes dos métodos públicos por ordem alfabética
  // a escrita do método privado deve iniciar com_
  private _handleError(err: any): void {
    this.isErrorResponse = true;
    this.showModalResponse = true;
    this.contentResponse = tryCatchErrorFunc(err);
    this._progressBarService.changeProgressBar(false);
    setTimeout(() => {
      this.showModalResponse = false;
    }, 2000);
  }

  private _getAllExpense() {
    this._progressBarService.changeProgressBar(true);
    this.isLoading = true;
    this.getAllExpenseSubscription = this._despesaService.getAllExpense().subscribe(
      (despesas: any[]) => {
        this.dataToFillTable = despesas;
        this.itemCount = this.dataToFillTable.length;
        // this.dataToFillTable = this.dataToFillTable.filter((e) => e.user == sessionStorage.getItem('user'))
        this.isLoading = false;
        this._progressBarService.changeProgressBar(false);
      },
      (error) => {
        this._handleError(error.error);
        this.isLoading = false;
        this._progressBarService.changeProgressBar(false);
      }
    );
  }
  private _getAllCategory() {
    this.isLoading = true;
    this._categoriasService.getAllCategory().subscribe(
      (category: any) => {
        this.categoriaOptions = category;
      },
      (error) => {
        this._handleError(error);
        this._progressBarService.changeProgressBar(false);
      }
    );
  }

  private _initForm(): void {
    this.expenseForm = this._formBuilder.group({
      code: [""],
      category: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      description: ["", [Validators.required, Validators.maxLength(100)]],
      amount: ["", [Validators.required, Validators.min(0), Validators.max(999999)]],
      paymentType: ["", [Validators.required, Validators.min(1), Validators.max(60)]],
      wallet: ["", [Validators.required, Validators.min(1), Validators.max(60)]],
      establishment: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      date: ["", [Validators.required, Validators.maxLength(10), Validators.minLength(10),]],
      isFixed: [""],
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

  // essa funçao do categoria get faz com que a gente permita usar this.f['nomeDoCampo'].value ao invés de usar this.expenseForm.controls['nomeDoCampo'].value
  get f(): { [key: string]: AbstractControl; } { return this.expenseForm.controls; }

  closeConfirmDialog() {
    this.showCorfirmDialog = false;
  }


  closeConfirmDialog2() {
    this.showCorfirmDialog2 = false;
  }

  confirmAction2() {
    if (this.isEdit) {
      this.showDialogDespesa = false;
      this.showCorfirmDialog2 = false;
    } else {
      this.showCorfirmDialog2 = false;
      this.showDialogDespesa = false;
    }
  }


  verifyValue() {
    if (this.expenseForm.controls['amount'].value === 0) {
      this.labelError = "Valor não pode ser 0";
    } else {
      this.labelError = "";
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
    this.dataAtual = date.toLocaleDateString("pt-BR");
  }

  openDialogAddDespesa() {
    this.expenseForm.reset();
    this.expenseForm.setErrors({});
    this.showDialogDespesa = true;
    this.dataAtual = "";
  }

  openConfirmDelete(codeToDelete: string) {
    this.msgModalConfirm = "Tem certeza que deseja excluir esta Despesa?";
    this.codeDespesa = codeToDelete;
    this.showCorfirmDialog = true;
  }

  confirmAction() {
    if (this.isEdit) {
      this.showDialogDespesa = false;
      this.showCorfirmDialog = false;
    } else {
      this.deleteExpense();
      this.showCorfirmDialog = false;
      this.showDialogDespesa = false;
    }
  }



  deleteExpense() {
    this._progressBarService.changeProgressBar(true);
    this._despesaService.deleteExpense(this.codeDespesa).subscribe(
      (response) => {
        this._sucessResponse("Despesa deletada com sucesso");
        setTimeout(() => {
          this._getAllExpense();
        }, 2500);
      },
      (error) => {
        this._handleError(error);
      }
    );
  }

  saveExpense(expenseForm: any): void {
    expenseForm = this.expenseForm.getRawValue();
    const objForSave = {
      ...expenseForm,
      category: expenseForm.category.name,
      paymentType: expenseForm.paymentType.name,
      wallet: expenseForm.wallet.name,
      iconCategory: expenseForm.category.icon,
      isFixed: expenseForm.isFixed === null ? 'NÃO' : 'SIM',
    }
    this._despesaService.saveOrUpdateDespesa(objForSave).subscribe(
      (response) => {
        this.expenseForm.reset();
        this.showDialogDespesa = false;
        this._sucessResponse("Despesa salva com sucesso");
        setTimeout(() => {
          this._getAllExpense();
        }, 2000);
      },
      (error) => {
        this._handleError(error);
      }
    );
  }

  editExpense(event) {
    this.isEdit = true;
    this.msgModalConfirm = 'Tem certeza que deseja sair? Alterações não serão salvas.';
    this.rowData = event;
    this.expenseForm.patchValue(event);
    this.showDialogDespesa = true;

    this.payments.filter((payment) => {
      if (payment.name === event.typePayment) {
        this.expenseForm.controls["typePayment"].setValue(payment);
      }
    });

    this.dropdownOptions.filter((option) => {
      if (option.name === event.wallet) {
        this.expenseForm.controls["wallet"].setValue(option);
      }
    });

    this.categoriaOptions.filter((e) => {
      if (e.name === event.categoria) {
        this.expenseForm.get("categoria").setValue(e);
      }
    });
  }

  private getAllExpenseSubscription: Subscription;



  ngAfterContentChecked() {
    // Atualiza a contagem de itens após cada verificação de conteúdo
    // if (this.dataToFillTable) {
    //   this.itemCount = this.dataToFillTable.length;
    //   console.log(this.itemCount)
    // }
  }


  ngOnDestroy() {
    if (this.getAllExpenseSubscription) {
      this.getAllExpenseSubscription.unsubscribe();
    }
  }

  // ngDoCheck() {
  //   // Verifica se houve mudanças nos itens da lista
  //   if (this.dataToFillTable && this.dataToFillTable.length > 0) {
  //     this.dataToFillTable = this.dataToFillTable.filter((e) => e.user == sessionStorage.getItem('user'))
  //   }
  // }
}
