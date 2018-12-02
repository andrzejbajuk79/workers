import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
selector: '[appConfirmEqValidator]',
providers: [{
  provide: NG_VALIDATORS,
  useExisting: ConfirmEqual,
  multi: true
}]
})

// tslint:disable-next-line:directive-class-suffix
export class ConfirmEqual implements Validator {
validate(passwordGroup: AbstractControl): {[key: string]: any} | null {
const passField = passwordGroup.get('password');
const confPassField = passwordGroup.get('confirmPassword');
if (passField && confPassField && passField.value !== confPassField.value) {
  return { 'notEqual': true };
}
return null;
}

}
