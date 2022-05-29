import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValidateFields } from 'src/app/shared/validators/fields.validator';

@Component({
  selector: 'input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDropdownComponent),
      multi: true
    },
  ]
})
export class InputDropdownComponent {
  @Input() control!: AbstractControl | null;
  @Input() placeholder?: string;
  @Input() options!: any[] | null;
  @Input() requiredLabel? = false;
  @Input() optionLabel!: string;
  @Input() label!: string;
  @Input() disabled? = false;
  @Input() filter?: boolean;
  @Output() change = new EventEmitter();
  private innerValue: any;
  get value() {
    return this.innerValue;
  }

  set value(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this._onChange(value);
    }
  }

constructor(private fieldsValidatorService: ValidateFields) { }

  _onChange: (_: any) => void = () => { };
  _onTouched: (_: any) => void = () => { };

  writeValue(value: any): void {
    value = value ?? '';
    this.value = value;
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.disabled = isDisabled;
      this.control?.markAsPristine();
      this.control?.markAsUntouched();
    }
  }

  applyErrorCSS(): { [key: string]: boolean | undefined } | undefined {
    if (this.control) {
      return this.fieldsValidatorService.applyErrorCSS(this.control);
    }

    return {};
  }
}


