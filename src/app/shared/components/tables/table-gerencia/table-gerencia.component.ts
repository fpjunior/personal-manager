import { AbstractControl } from '@angular/forms';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { TableStandard } from 'src/app/shared/models/table.model';

@Component({
  selector: 'app-table-gerencia',
  templateUrl: './table-gerencia.component.html',
  styleUrls: ['./table-gerencia.component.scss']
})
export class TableGerenciaComponent implements OnInit {

  totalRecords: number;
  selectedColumns: any;
  selectColumns = false;
  searchByField = false;
  showModalColumn = false;
  showFilter = false;
  isLazyTable = false;

  numberDataPerPage: number;
  dataKey: any;
  tableName: any;

  @Input() rowsToShow: number;
  @ViewChild('tableGerencia') tabelaHtml: Table;
  /**
   * LOADING
   */
  @Input() loading: boolean;
  /**
    * ARRAY DE COLUNAS
    */
  @Input() cols: TableStandard[];
  @Input() fullCols: TableStandard[];
  @Input() immutableCols: string[];
  /**
    * TELA REFERÊNCIA .:. 5.1 = gerencia-perfil, 5.2 = gerencia-usuario, 6 = gerencia-eventos , 7 = uf-atuacao
    */
  @Input() page: string;

  //  5.1 = gerencia-perfil, 5.2 = gerencia-usuario, 6 = gerencia-eventos , 7 = uf-atuacao

  /**
   * DADOS QUE PREENCHEM A TABELA
   */
  @Input() dataToFillTable: any[];
  /**
   * MODAIS DE DELETAR
   */

  @Input() showModalDelete = false;
  @Input() showModalDeleteDenied = false;
  @Input() mostrarBuscar = true;
  @Output() delete = new EventEmitter();
  @Output() updateColumn = new EventEmitter();
  @Output() confirmDelete = new EventEmitter();

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  ajustPercent(value: number): string {
    let strReturn = value.toString().replace(".", ",");
    if(strReturn.length <= 2 ) {
      return strReturn + ",00";
    } else if (strReturn.length == 3) {
      return strReturn + "0";
    }
    return strReturn;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // this.setTableColumnStyle(this.page);
      this.numberDataPerPage = this.rowsToShow;
    }, 500);
  }

  changeRows(page: any) {
    this.numberDataPerPage = page.rows;
    if (page.first == 0) {
      this.updateColumn.emit({ $event: this.cols, rowsPerPage: this.numberDataPerPage });
    }
  }

  // exportPdf = (): void => exportPDF(this.cols, this.dataToFillTable, this.page);

  // exportExcel = (): void => exportXLSX(this.dataToFillTable, this.page);

  showModalSelectColumns = (): boolean => this.showModalColumn = true;

  onHideDialogConfirmExclude = (): boolean => this.showModalDelete = false;

  onHideDialogConfirmExcludeDenied = (): boolean => this.showModalDeleteDenied = false;

  colReorderEvent = (e): void => {
    this.updateColumn.emit({ $event: e.columns, rowsPerPage: this.numberDataPerPage });
  }

  colResizeEvent(e) {
    // this.setTableColumnStyleMin(this.page)
  }
  onHideDialogTable = (): void => {
    this.showModalColumn = false;
    // setTimeout(() => { this.setTableColumnStyle(this.page); }, 500);
  }

  newRegister = (page: string): Promise<boolean> => {
    switch (page) {
      case 'ciclo':
        return this.route.navigate(['/ciclo/cadastrar'])
    }
  }

  editRegister = (page: string): string => {
    switch (page) {
      case 'ciclo':
        return '/ciclo/cadastrar'
      case 'gerencia-usuario':
        return '/home/gerencia-usuario/usuario/cadastrar'
      case 'gerencia-perfil':
        return '/home/gerencia-usuario/perfil/cadastrar'
      case 'ufs-atuacao':
        return '/home/ufs-atuacao/cadastrar'
      default:
        return '/home'
    }
  };

  identify(index, item): any {
    return item.id;
  }

  loadLazyTable(event: LazyLoadEvent): void {
  }

}
