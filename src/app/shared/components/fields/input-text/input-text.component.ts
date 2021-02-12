import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidateFields } from 'src/app/shared/validators/fields.validator';

/**
 * controlName: string;
 * label: string;
 * formGroup: FormGroup;
 * required?: boolean;
 * disabled?: boolean;
 * placeholder?: string;
 * uppercase?: boolean;
 * maxlength?: number;
 */
@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent  {

  @Input() controlName: string;
  @Input() label: string;
  @Input() formGroup: FormGroup;
  @Input() required? = false;
  @Input() disabled? = false;
  @Input() placeholder? = "";
  @Input() uppercase? = true;
  @Input() maxlength? = 9000;
  @Output() change = new EventEmitter();



  constructor(public validator: ValidateFields) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
