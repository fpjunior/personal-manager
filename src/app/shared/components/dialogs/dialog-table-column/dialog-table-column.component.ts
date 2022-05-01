import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableStandard } from 'src/app/shared/models/table.model';

@Component({
  selector: 'app-dialog-table-column',
  templateUrl: './dialog-table-column.component.html',
  styleUrls: ['./dialog-table-column.component.scss']
})
export class DialogTableColumnComponent implements OnInit {

  disableCheckAll = true;
  checkPointCols!: any[];

  @Input() fullCols!: TableStandard[];
  selectedCols: TableStandard[] = [];
  @Input() colsModified!: TableStandard[];

  @Input() immutables!: string[];
  @Input() showModal: boolean = false;
  @Output() saveColumn = new EventEmitter();
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onShow: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.selectedCols = this.fullCols;
  }

  onCloseParent = (): void => this.onClose.emit(this.showModal);

  onShowParent = (): void => {
    this.onShow.emit(this.showModal);
  }

  returnColumns = (): void => {
    this.saveColumn.emit(this.fullCols);
    this.onCloseParent();
  }


  checkAllColumns = (): void => {
    this.selectedCols = this.fullCols;
  }

}
