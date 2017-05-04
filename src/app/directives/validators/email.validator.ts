import { Directive, Input, OnChanges, forwardRef } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn } from '@angular/forms';
import { NoteValidators } from './../../services/NoteValidators';

export const EMAIL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};

@Directive({
  selector: '[email]',
  providers: [EMAIL_VALIDATOR]
})
export class EmailValidator implements Validator, OnChanges {
  constructor() { }

  @Input()
  private email: string;

  private _validator: ValidatorFn;
  private _onChange: () => void;

  private _createValidator() {
    this._validator = NoteValidators.email();
  }

  ngOnChanges(changesObj:any) {
    if (changesObj.email) {
      this._createValidator();
      if (this._onChange) {
        this._onChange();
      }
    }
  }

  validate(c: AbstractControl): { [key: string]: any } {
    console.log(this._validator(c));    
    return this._validator(c);
  }
}