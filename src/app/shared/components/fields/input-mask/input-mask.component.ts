import { ValidateFields } from 'src/app/shared/validators/fields.validator';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputMaskComponent),
      multi: true,
    },
  ]
})
export class InputMaskComponent implements OnInit, ControlValueAccessor {
  @Input() validatorsTypes!: string[];
  @Input() label = '';
  @Input() control!: AbstractControl | null;
  @Input() placeholder = '';
  @Input() mask: any = '***********';
  @Input() type = 'text';

  @Input() requiredLabel = false;
  private innerValue: any;
  @Input() disabled = false;
  @Input() disabledInput = false;

  @Output() change = new EventEmitter();
  @Output() input = new EventEmitter();

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

  onChange(event: any) {

  }

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
      this.disabledInput = isDisabled;
      this.control?.markAsPristine();
      this.control?.markAsUntouched();
    }
    if(this.disabledInput){
      this.placeholder = this.value;
    }
  }

  applyErrorCSS(): { [key: string]: boolean | undefined } | null | undefined {
    if (this.control) {
      return this.fieldsValidatorService.applyErrorCSS(this.control);
    }

    return {};
  }
}
