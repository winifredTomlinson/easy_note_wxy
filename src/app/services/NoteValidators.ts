import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, AsyncValidatorFn } from '@angular/forms';

const isEmptyInputValue = (value: any) => {
  return value == null || (typeof value === 'string' && value.length === 0);
};

@Injectable()
export class NoteValidators {

  constructor() { }

  static min(minValue: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (isEmptyInputValue(control.value)) {
        return null;  // don't validate empty values to allow optional controls
      }
      let numberVal = parseFloat(control.value);
      return numberVal < minValue ? { 'min': { 'requiredValue': minValue, 'actualValue': numberVal } } : null;
    };
  }

  static max(maxValue: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (isEmptyInputValue(control.value)) {
        return null;  // don't validate empty values to allow optional controls
      }
      let numberVal = parseFloat(control.value);
      return numberVal > maxValue ? { 'max': { 'requiredValue': maxValue, 'actualValue': numberVal } } : null;
    };
  }
  static email(): ValidatorFn {
    const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    return (control: AbstractControl): { [key: string]: any } => {
      if (isEmptyInputValue(control.value)) {
        return null;  // don't validate empty values to allow optional controls
      }
      return emailReg.test(control.value) ? null : { 'email': true };
    };
  }

//   static emailGroup(): ValidatorFn {
//     const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
//     return (control: AbstractControl): { [key: string]: any } => {
//       if (isEmptyInputValue(control.value)) {
//         return null;  // don't validate empty values to allow optional controls
//       }
//       let emails = control.value.split(';').map(item => item.trim());
//       let invalid = false;
//       for (let item of emails) {
//         if (!emailReg.test(item)) {
//           invalid = true;
//           break;
//         }
//       }
//       let numberVal = parseFloat(control.value);
//       return invalid ? { 'emailGroup': true } : null;
//     };
//   }
 static isEmptyInput(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (isEmptyInputValue(control.value)) {
        return null;  // don't validate empty values to allow optional controls
      }
      return isEmptyInputValue(control.value) ? { 'isEmpty': false } : { 'isEmpty': true };
    };
  }


  static integer(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (isEmptyInputValue(control.value)) {
        return null;  // don't validate empty values to allow optional controls
      }
      return Number(control.value) === parseInt(control.value, 10) ? null : { 'integer': true };
    };
  }

  static number(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (isEmptyInputValue(control.value)) {
        return null;  // don't validate empty values to allow optional controls
      }
      return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(control.value) ? null : { 'number': true };
    };
  }

  static equal(equalValue: any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (isEmptyInputValue(control.value)) {
        return null;  // don't validate empty values to allow optional controls
      }
      return equalValue === control.value ? null : { equal: { 'requiredValue': equalValue, 'actualValue': control.value } };
    };
  }

  static equalTo(equalTo: any): ValidatorFn {
    let subscribed: boolean = false;
    let equalControl = typeof equalTo === 'string' ? null : equalTo;
    return (control: AbstractControl): { [key: string]: any } => {
      if (!subscribed) {
        subscribed = true;
        if (!equalControl) {
          equalControl = control.root.get(equalTo);
        }
        equalControl.valueChanges.subscribe(() => {
          control.updateValueAndValidity();
        });
      }
      return control.value === equalControl.value ? null : { 'equalTo': { to: typeof equalTo === 'string' ? equalTo : equalControl.name } };
    };
  }

  static validateFn(fn: Function): AsyncValidatorFn {
    return (control: AbstractControl): Promise<{ [key: string]: any }> => {
      return new Promise<{ [key: string]: any }>((resolve, reject) => {
        Promise.resolve()
          .then(() => {
            return fn(control.value);
          })
          .then(result => {
            if (result === false) {
              return resolve({ validateFn: true });
            }
            resolve(null);
          })
          .catch(reason => {
            resolve({ validateFn: true, reason });
          });
      });
    };
  }
}