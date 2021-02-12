import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ValidateFields {
  constructor() { }

  validateHasError(control: AbstractControl, errorName: string): boolean {
    if ((control.dirty || control.touched) && this.hasError(control, errorName)) {
      return true;
    }
    return false;
  }

  validateLength(control: AbstractControl, errorName: string): number {
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }

  validateEmail = (control: AbstractControl): boolean => {
    const email = control.value;
    const re: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const ifMatch: boolean = re.test(String(email).toLowerCase());
    if (ifMatch === false) {
      return true;
    }
  }

  private hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }
}
