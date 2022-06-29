import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValidateFields } from '../../../validators/fields.validator';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ]
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  @Input() validatorsTypes!: string[];
  @Input() label = '';
  @Input() control!: AbstractControl | null;
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() minValue!: number;
  @Input() maxlength!: number;
  
  @Input() requiredLabel = false;
  private innerValue: any;
  @Input() disabled = false;

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

  ngOnInit(): void { }

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

  applyErrorCSS(): { [key: string]: boolean | undefined } | null | undefined {
    if (this.control) {
      return this.fieldsValidatorService.applyErrorCSS(this.control);
    }

    return {};
  }
}
