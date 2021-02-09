import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'generic-response-dialog',
  templateUrl: './generic-response-dialog.component.html',
  styleUrls: ['./generic-response-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class GenericResponseDialogComponent implements OnInit {


  @Input() showModal: boolean;
  @Input() isError: boolean = true;
  @Input() content: string;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onShow: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  onCloseParent = () => this.onClose.emit(this.showModal);
  onShowParent = () => this.onShow.emit(this.showModal);

  ngOnInit() {
  }

}
