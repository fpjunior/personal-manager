import { ValidateFields } from 'src/app/shared/validators/fields.validator';
import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'info-field-error-message',
  templateUrl: './info-field-error-message.component.html',
  styleUrls: ['./info-field-error-message.component.scss']
})
export class InfoFieldErrorMessageComponent implements OnInit {
  @Input() label = '';
  @Input() control!: AbstractControl | null;

  constructor(private fieldsValidatorService: ValidateFields) { }

  ngOnInit(): void { }

  get errorMessage(): string | null | undefined {
    for (const propertyName in this.control?.errors) {
      if (this.control?.errors.hasOwnProperty(propertyName) && (this.control.touched || !this.control?.pristine)) {
        return this.getErrorMessage(this.label, propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

  getErrorMessage(fieldName: string, validatorName: string, validatorValue?: any): string | null {
    return this.fieldsValidatorService.getErrorMessage(fieldName, validatorName, validatorValue);
  }
}
