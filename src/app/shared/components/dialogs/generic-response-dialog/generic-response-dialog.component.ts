import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * showModal: boolean;
 * isError: boolean;
 * content: string;
 */
@Component({
  selector: 'generic-response-dialog',
  templateUrl: './generic-response-dialog.component.html',
  styleUrls: ['./generic-response-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericResponseDialogComponent {

  @Input() showModal: boolean;
  @Input() isError: boolean = true;
  @Input() content: string;
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onShow: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  onCloseParent = () => this.onClose.emit(this.showModal);
  onShowParent = () => this.onShow.emit(this.showModal);

}
