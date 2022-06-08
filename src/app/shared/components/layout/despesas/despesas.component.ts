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
import { DespesasModel } from "./model/despesas.model";
import { ProgressBarService } from "../../progress-bar/progress-bar.service";
import { TableStandard } from "src/app/shared/models/table.model"
import { tryCatchErrorFunc } from "src/app/shared/utils/try-catch-error-func.util";
import { tableArr } from "./model/tabela.model";
import { DespesaService } from "./service/despesas.service";
import { TiposDespesasService } from "../tiposdespesas/service/tiposdespesas.service";

@Component({
  selector: "app-despesas",
  templateUrl: "./despesas.component.html",
  styleUrls: ["./despesas.component.scss"],
})
export class DespesasComponent implements OnInit {

  // config Table
  cols = tableArr;
  fullCols = tableArr;
  immutableCols: string[] = [];
  showModalColumn = false;

  dataToFillTable: any;
  typeOptions: any;
  despesas: Array<any>;
  despesa: any;

  despesasForm!: FormGroup;

  @Output() mudouValor = new EventEmitter();
  @ViewChild("campoInput") campoValorInput: ElementRef;

  breadcrumbItems: MenuItem[] = [{ label: `Despesas` }];
  showDialogDespesa = false;
  valuetype;
  valuedescription;
  valuevalue;
  valuetypePayment;
  valuelocalEstablishment;
  valueexpenseDate;
  loading = false;
  showModalResponse = false;
  contentResponse!: string;
  isErrorResponse!: boolean;
  rowData;
  codeDespesa;
  showCorfirmDialog: boolean = false;
  msgModalConfirm: string = "";
  isEdit: boolean;
  dataAtual: string = "";

  constructor(
    private breadcrumbService: BreadcrumbService,
    private despesaService: DespesaService,
    private progressBarService: ProgressBarService,
    private formBuilder: FormBuilder,
    private tiposDespesasService: TiposDespesasService,
  ) {}

  ngOnInit() {
    this.initForm();
    this.despesa = {};
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
    this.getAllDespesas();
    this.getAllTiposDespesas()

  }

  getAllTiposDespesas() {
    // this.progressBarService.changeProgressBar(true);
    this.loading = true;
    this.tiposDespesasService.getAllTiposDespesas().subscribe(
      (tiposdespesas: any) => {
        // this.dataToFillTable = Object.entries(contact).map(e=> e[1]);
        this.typeOptions = Object.entries(tiposdespesas).map((e: any) => {
          e[1].id = e[0];
          return e[1];
        });
      },
      (error) => {
        this.handleError(error);
        this.progressBarService.changeProgressBar(false);
      }
    );
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
    this.despesasForm = this.formBuilder.group({
      code: [""],
      type: ["", [Validators.required]],
      description: [""],
      value: ["", [Validators.required]],
      typePayment: ["", [Validators.required]],
      localEstablishment: ["", [Validators.required]],
      expenseDate: ["", [Validators.required]],
    });
  }

  onHideDialog() {}

  openConfirmCancel(){
    this.showCorfirmDialog = true;
    this.msgModalConfirm = "Tem certeza que deseja cancelar? Alterações serão descartadas";
  }


  obterDataAtual() {
    const date = new Date();
    this.dataAtual= date.toLocaleDateString("pt-BR");
}

  openDialogAddDespesa() {
    this.despesasForm.reset();
    this.showDialogDespesa = true;
    this.dataAtual = "";
  }

  openConfirmDelete(codeToDelete: string) {
    this.msgModalConfirm = "Tem certeza que deseja excluir esta Despesa?";
    this.codeDespesa = codeToDelete;
    this.showCorfirmDialog = true;
  }

  confirmAction(){
    if(this.isEdit){
      this.showDialogDespesa = false;
      this.showCorfirmDialog = false;
    } else {
      this.deleteDespesa();
      this.showCorfirmDialog = false;
      this.showDialogDespesa = false;
    }
  }

  deleteDespesa() {
    this.progressBarService.changeProgressBar(true);
    this.despesaService.deleteDespesa(this.codeDespesa).subscribe(
      (response) => {
        this.sucessResponse("Despesa deletado com sucesso");
        setTimeout(() => {
          this.getAllDespesas();
        }, 2500);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  saveDespesa(despesasForm: any): void {
    despesasForm = this.despesasForm.getRawValue();
    this.despesaService.saveOrUpdateDespesa(despesasForm).subscribe(
      (response) => {
        this.despesasForm.reset();
        this.showDialogDespesa = false;
        this.sucessResponse("Despesa salva com sucesso");
        setTimeout(() => {
          this.getAllDespesas();
        }, 2000);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  editDespesa(event) {
    this.isEdit = true;
    this.msgModalConfirm = 'Tem certeza que deseja sair? Alterações não serão salvas.';
    this.rowData = event;
    this.showDialogDespesa = true;
    this.despesasForm.setValue(event);
  }

  // goToTheContactForm = () => this.router.navigate(["/contato-form"]);

  getAllDespesas() {
    this.progressBarService.changeProgressBar(true);
    this.loading = true;
    this.despesaService.getAllDespesas().subscribe(
      (despesa: any) => {
        // this.dataToFillTable = Object.entries(contact).map(e=> e[1]);
        this.dataToFillTable = Object.entries(despesa).map((e: any) => {
          e[1].code = e[0];
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
