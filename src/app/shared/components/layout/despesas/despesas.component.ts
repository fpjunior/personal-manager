import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
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
import { timingSafeEqual } from "crypto";

@Component({
  selector: "app-despesas",
  templateUrl: "./despesas.component.html",
  styleUrls: ["./despesas.component.scss"],
})
export class DespesasComponent implements OnInit {

  // config Table
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
  immutableCols: string[] = [];
  despesas: Array<any>;
  dataToFillTable: any;
  typeOptions: any;
  despesa: any;
  despesasForm!: FormGroup;
  isEdit: boolean;
  contentResponse!: string;
  msgModalConfirm: string = "";
  isErrorResponse!: boolean;
  valuetype;
  valuedescription;
  valuevalue;
  valuetypePayment;
  valuelocalEstablishment;
  valueexpenseDate;
  codeDespesa;
  rowData;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private despesaService: DespesaService,
    private progressBarService: ProgressBarService,
    private formBuilder: FormBuilder,
    private tiposDespesasService: TiposDespesasService,
  ) { }

  ngOnInit() {
    this.initForm();
    this.despesa = {};
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
    this.getAllDespesas();
    this.getAllTiposDespesas()
  }

  // essa funçao do tipo get faz com que a gente permita usar this.f['nomeDoCampo'].value ao invés de usar this.despesasForm.controls['nomeDoCampo'].value
  get f(): { [key: string]: AbstractControl; } { return this.despesasForm.controls; }

  getAllTiposDespesas() {
    this.isLoading = true;
    this.tiposDespesasService.getAllTiposDespesas().subscribe(
      (tiposdespesas: any) => {
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
      type: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      description: ["",  [Validators.required, Validators.maxLength(100)]],
      value: ["", [Validators.required, Validators.min(0), Validators.max(999999)]],
      typePayment: ["", [Validators.required, Validators.min(1), Validators.max(60)]],
      localEstablishment: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      expenseDate: ["", [Validators.required, Validators.maxLength(10), Validators.minLength(10), ]],
    });
  }

  onHideDialog() { }

  openConfirmCancel() {
    this.showCorfirmDialog = true;
    this.msgModalConfirm = "Tem certeza que deseja cancelar? Alterações serão descartadas";
  }

  openDialogAddDespesa() {
    this.despesasForm.reset();
this.despesasForm.setErrors({});
    this.showDialogDespesa = true;
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
    despesasForm.type = despesasForm.type.name
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
    this.isLoading = true;
    this.despesaService.getAllDespesas().subscribe(
      (despesa: any) => {
        // this.dataToFillTable = Object.entries(contact).map(e=> e[1]);
        this.dataToFillTable = Object.entries(despesa).map((e: any) => {
          e[1].code = e[0];
          return e[1];
        });
        this.isLoading = false;
        this.progressBarService.changeProgressBar(false);
      },
      (error) => {
        this.handleError(error);
        this.isLoading = false;
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
