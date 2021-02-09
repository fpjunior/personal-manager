import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-picklist',
  templateUrl: './dialog-picklist.component.html',
  styleUrls: ['./dialog-picklist.component.scss']
})
export class DialogPicklistComponent implements OnInit {

  @Input() sourceList: Array<any>
  @Input() targetList: Array<any>
  @Input() showModalConfirm: boolean = false;
  @Input() showPickList: boolean = false;
  @Input() codigoUnidade: number;
  @Input() confirmExit = (): void => { this.showModal = false; this.showModalConfirm = false };

  @Input() showModal: boolean;
  @Output() confirmEvent = new EventEmitter();
  @Output() cancelEvent = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onShow: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onCloseParent = (): void => this.onClose.emit(this.showModal);
  onShowParent = (): void => this.onShow.emit(this.showModal);

  onHideDialogConfirm = (): boolean => this.showModalConfirm = false;


  cancelForm() {
    this.showModalConfirm = true;
  }

}
