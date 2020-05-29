import { Directive } from '@angular/core';
import {
  Validator,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS,
} from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return control.value && control.value.includes('script')
      ? { ...control.errors, custom: true }
      : null;
  }
}
