import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserPermission } from 'src/app/model/user-permission.model';

@Component({
  selector: 'picklist',
  templateUrl: './picklist.component.html',
  styleUrls: ['./picklist.component.scss']
})
export class PicklistComponent {

  /**
   * TÍTULO DO PICKLIST
   */

  @Input() sourceHeader: String;
  @Input() targetHeader: string;
  @Input() height?= '220px';
  @Input() width?= 'string';

  @Input() sourceList: Array<any> | UserPermission[];
  @Input() targetList: Array<any>;

  /**
   * TELA QUE ESTÁ SENDO RENDERIZADO
   */
  @Input() page: string;

  @Output() onMoveToTarget = new EventEmitter();
  @Output() onMoveToSource = new EventEmitter();
  @Output() onMoveAllToTarget = new EventEmitter();
  @Output() onMoveAllToSource = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  teste() {
    return "descrição" || "codigo"
  }

}
