import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

@Input() showModal: boolean;
@Input() content: string = '';
@Input() header: string;
@Output() confirmEvent = new EventEmitter();
@Output() cancelEvent = new EventEmitter();

@Input() labelConfirm?: string = 'SIM';
@Input() labelCancel?: string = 'NÃO';
@Input() standard?: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  fecharForm(){

  }


}
