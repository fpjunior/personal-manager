import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableStandard } from 'src/app/shared/models/table.model';
import { ProgressBarService } from '../../progress-bar/progress-bar.service';
import { tryCatchErrorFunc } from "src/app/shared/utils/try-catch-error-func.util";
import { TiposDespesasService } from './service/contact.service';
import { tableTipoDespesaModel } from './model/table.model';


@Component({
  selector: 'app-tiposdespesas',
  templateUrl: './tiposdespesas.component.html',
  styleUrls: ['./tiposdespesas.component.scss']
})
export class TiposdespesasComponent implements OnInit {

  showDialogtiposdespesas = false;
  tiposdespesasForm!: FormGroup;
  showModalColumn = false;
  showModalResponse = false;
  isEdit: boolean;
  showCorfirmDialog: boolean = false;
  idContact;

  cols = tableTipoDespesaModel;
  loading = false;
  dataToFillTable: any;
  isErrorResponse!: boolean;
  contentResponse!: string;
  immutableCols: string[] = [];
  msgModalConfirm: string = "";
  rowData;
  fullCols = tableTipoDespesaModel;


  constructor(
    private progressBarService: ProgressBarService,
    private tiposdespesasService: TiposDespesasService,
    private formBuilder: FormBuilder,
    private tiposDespesasService: TiposDespesasService,
  ) {

   }

  ngOnInit() {
    this.initForm();
    this.getAllTiposDespesas();
  }

  initForm(): void {
    this.tiposdespesasForm = this.formBuilder.group({
      code: [""],
      type: ["", [Validators.required]],
      description: ["", [Validators.required]],

    });
  }

  onHideDialog() {}

  openDialogAddContact() {
    this.tiposdespesasForm.reset();
    this.showDialogtiposdespesas = true;
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

confirmAction(){
  if(this.isEdit){
    this.showDialogtiposdespesas = false;
    this.showCorfirmDialog = false;
  } else {
    this.deleteTiposDespesas();
    this.showCorfirmDialog = false;
  }
}
deleteTiposDespesas() {
  this.progressBarService.changeProgressBar(true);
  this.tiposdespesasService.deleteTiposDespesas(this.idContact).subscribe(
    (response) => {
      this.sucessResponse("Contato deletado com sucesso");
      setTimeout(() => {
        this.getAllTiposDespesas();
      }, 2500);
    },
    (error) => {
      this.handleError(error);
    }
  );
}

getAllTiposDespesas() {
  this.progressBarService.changeProgressBar(true);
  this.loading = true;
  this.tiposDespesasService.getAllTiposDespesas().subscribe(
    (tiposdespesas: any) => {
      // this.dataToFillTable = Object.entries(contact).map(e=> e[1]);
      this.dataToFillTable = Object.entries(tiposdespesas).map((e: any) => {
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
editContact(event) {
  this.isEdit = true;
  this.msgModalConfirm = 'Tem certeza que deseja sair? Alterações não serão salvas.';
  this.rowData = event;
  this.showDialogtiposdespesas = true;
  this.tiposdespesasForm.setValue(event);

}
openConfirmDelete(idToDelete: string) {
  this.msgModalConfirm = "Tem certeza que deseja excluir este registro?";
  this.idContact = idToDelete;
  this.showCorfirmDialog = true;
}

saveContact(tiposdespesasForm: any): void {
  tiposdespesasForm = this.tiposdespesasForm.getRawValue();
  this.tiposdespesasService.saveOrUpdateTiposDespesas(tiposdespesasForm).subscribe(
    (response) => {
      this.tiposdespesasForm.reset();
      this.showDialogtiposdespesas = false;
      this.sucessResponse("Contato salvo com sucesso");
      setTimeout(() => {
        this.getAllTiposDespesas();
      }, 2000);
    },
    (error) => {
      this.handleError(error);
    }
  );
}
}