import { Injectable } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import * as FORMAT from '@brazilian-utils/brazilian-utils';
import * as REGEX from '../../shared/utils/regex.util'

@Injectable({
  providedIn: 'root'
})

export class ValidateFields {
  constructor() { }

  getErrorMessage(fieldName: string, validatorName: string, validatorValue?: any): string {
    switch (validatorName) {
      case 'required':
        return `${fieldName} é obrigatório.`;
      case 'email':
        return `${fieldName} invalido.`;
      case 'minlength':
        return `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`;
      case 'maxlength':
        return `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`;
      case 'cepInvalido':
        return 'CEP inválido.';
      case 'equalsTo':
        return 'Campos não são iguais';
      case 'pattern':
        return 'Campo inválido';
      case 'invalidTicketCode':
        return `O ${fieldName} não pode conter os seguintes caracteres . # $ / [ ]`;
      case 'cpfCnpjInvalid':
        return `${fieldName} inválido`
      case 'chassiInvalid':
        return `${fieldName} deve ter 17 caracteres.`;
      case 'phoneInvalid':
        return `${fieldName} inválido.`;
      default:
        return '';
    }
  }

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

  validateEmail(control: AbstractControl): boolean | null {
    const email = control.value;
    const re: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const ifMatch: boolean = re.test(String(email).toLowerCase());

    if (ifMatch === false) {
      return true;
    }

    return null;
  };


  private hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }

  checkForm(control: AbstractControl): boolean | undefined {
    return !control?.valid && (control?.touched || control?.dirty);
  }

  forceVerificationFormField(formGroup: UntypedFormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof UntypedFormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof UntypedFormGroup) {
        this.forceVerificationFormField(control);
      }
    });
  }

  TestaCPF(strCPF: string) {
    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

  static isValidCpfCnpj() {
    return (control: AbstractControl): Validators => {
      let validator: any;

      if (control.value?.length === 14) {
        validator = FORMAT.isValidCPF
      } else {
        validator = FORMAT.isValidCNPJ
      }

      if (validator(control.value)) {
        return false;
      }

      return {
        cpfCnpjInvalid: true
      }
    };
  }
  static formatCpfCnpj = (cpfCnpj: string): string => {
    if (!cpfCnpj) return '';
    let auxCpfCnpj = cpfCnpj;
    auxCpfCnpj = auxCpfCnpj.replace(REGEX.NOT_NUMBER, REGEX.EMPTY_VALUE);
    return auxCpfCnpj
  }

  static chassiValidator() {
    return (control: AbstractControl): Validators => {
      let chassi = control.value;
      if (chassi.length) {
        chassi = chassi.replace(REGEX.NOT_ALPHANUMERIC, REGEX.EMPTY_VALUE)
        if (chassi.length < 17) {
          return { chassiInvalid: true }
        }
      }

      return false
    };
  }

  static phoneValidator() {
    return (control: AbstractControl): Validators => {
      let phone = control.value;
      phone = phone.replace(REGEX.NOT_NUMBER, REGEX.EMPTY_VALUE)
      if (phone.length < 10) {
        return { phoneInvalid: true }
      }
      return false
    };
  }


  applyErrorCSS(control: AbstractControl): { [key: string]: boolean | undefined } {
    return {
      'ng-invalid': this.checkForm(control),
      'ng-dirty': this.checkForm(control),
    };
  }
}
