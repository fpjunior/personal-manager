import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from 'src/app/shared/components/breadcrumbs/breadcrumbs.service';
import { ProgressBarService } from 'src/app/shared/components/progress-bar/progress-bar.service';
import { TableStandard } from 'src/app/shared/models/table.model';
import { tryCatchErrorFunc } from "src/app/shared/utils/try-catch-error-func.util";
import { tableICategorias } from './model/table.model';
import { CategoriasService } from './service/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  breadcrumbItems: MenuItem[] = [{ label: `Categorias` }];
  showDialogCategorias = false;
  categoriasForm!: UntypedFormGroup;
  showModalColumn = false;
  showModalResponse = false;
  isEdit: boolean;
  showCorfirmDialog: boolean = false;
  showCorfirmDialog2: boolean = false;
  idCategorias;

  cols = tableICategorias;
  loading = false;
  dataToFillTable: any;
  isErrorResponse!: boolean;
  contentResponse!: string;
  immutableCols: string[] = [];
  msgModalConfirm: string = "";
  rowData;
  fullCols = tableICategorias;
  cor;
  iconsOptions: any[] = [
    { codeIcon: 'fas fa-home' },
    { codeIcon: 'fas fa-car' },
    { codeIcon: 'fas fa-circle' },
    { codeIcon: 'fas fa-phone' },
    { codeIcon: 'fas fa-shopping-cart' },
    { codeIcon: 'fas fa-briefcase' },
    { codeIcon: 'fas fa-money-bill' },
    { codeIcon: 'fas fa-bus' },
    { codeIcon: 'fas fa-book' },
    { codeIcon: 'fas fa-cart-arrow-down' },
    { codeIcon: 'fas fa-coffee' },
    { codeIcon: 'fas fa-film' },
    { codeIcon: 'fas fa-graduation-cap' },
    { codeIcon: 'fa fa-shopping-bag' },
    { codeIcon: 'fas fa-taxi' },
    { codeIcon: 'fas fa-medkit' },
    { codeIcon: 'fas fa-grip-vertical' },
  ]

  constructor(
    private progressBarService: ProgressBarService,
    private breadcrumbService: BreadcrumbService,
    private formBuilder: UntypedFormBuilder,
    private categoriasService: CategoriasService,
  ) { }

  ngOnInit() {
    this.initForm();
    this.getAllCategorias();
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
  }

  initForm(): void {
    this.categoriasForm = this.formBuilder.group({
      code: [""],
      icon: ["", [Validators.required]],
      name: ["", [Validators.required]],
      cor: ["", [Validators.required]],
    });
  }

  teste(event) {
    console.log(event)
  }

  onHideDialog() { }

  openDialogAddCategorias() {
    this.categoriasForm.reset();
    this.showDialogCategorias = true;
  }

  showModalSelectColumns() {
    this.showModalColumn = true;
  }

  onHide = () => {
    this.showModalResponse = false;
  };

  onShow(): boolean {
    return (this.showModalResponse = true);
  }

  onHideDialogTable = (): void => {
    this.showModalColumn = false;
  };

  editColumns(cols: TableStandard[]) {
    this.cols = cols;
  }

  confirmAction() {
    if (this.isEdit) {
      this.showDialogCategorias = false;
      this.showCorfirmDialog = false;
    } else {
      this.deleteCategorias();
      this.showCorfirmDialog = false;
    }
  }
  deleteCategorias() {
    this.progressBarService.changeProgressBar(true);
    this.categoriasService.deleteCategorias(this.idCategorias).subscribe(
      () => {
        this.sucessResponse("Categoria deletado com sucesso");
        setTimeout(() => {
          this.getAllCategorias();
        }, 2500);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  getAllCategorias() {
    this.loading = true;
    this.categoriasService.getAllCategorias().subscribe(
      (categorias: any) => {
        this.dataToFillTable = Object.entries(categorias).map((e: any) => {
          e[1].id = e[0];
          return e[1];
        });
        this.loading = false;
        this.progressBarService.changeProgressBar(false);
      },
      (error) => {
        this.handleError(error);
        this.loading = false;
        this.progressBarService.changeProgressBar(false);
      }
    );
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

  closeConfirmDialog() {
    this.showCorfirmDialog = false;
  }

  closeConfirmDialog2() {
    this.showCorfirmDialog2 = false;
  }

  confirmAction2() {
    if (this.isEdit) {
      this.showDialogCategorias = false;
      this.showCorfirmDialog2 = false;
    } else {
      this.showCorfirmDialog2 = false;
      this.showDialogCategorias = false;
    }
  }

  editCategoria(event) {
    this.isEdit = true;
    this.msgModalConfirm = 'Tem certeza que deseja sair? Alterações não serão salvas.';
    this.rowData = event;
    this.showDialogCategorias = true;
    this.categoriasForm.setValue(event);
  }

  openConfirmDelete(idToDelete: string) {
    this.msgModalConfirm = "Tem certeza que deseja excluir este registro?";
    this.idCategorias = idToDelete;
    this.showCorfirmDialog = true;
  }

  openConfirmCancel() {
    this.showCorfirmDialog2 = true;
    this.msgModalConfirm = "Tem certeza que deseja sair? Dados digitados anteriormente não serão salvos.";
  }

  saveCategorias(categoriasForm: any): void {
    categoriasForm = this.categoriasForm.getRawValue();
    categoriasForm.icon = categoriasForm.icon.codeIcon
    this.categoriasService.saveOrUpdateCategorias(categoriasForm).subscribe(
      () => {
        this.categoriasForm.reset();
        this.showDialogCategorias = false;
        this.sucessResponse("Categoria salva com sucesso");
        setTimeout(() => {
          this.getAllCategorias();
        }, 2000);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }
}
