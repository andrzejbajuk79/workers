import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
selector: '[appSelectValidator]',
providers: [{
  provide: NG_VALIDATORS,
  useExisting: SelectReqValidatorDirective,
  multi: true
}]
})
export class SelectReqValidatorDirective implements Validator {
  @Input() appSelectValidator: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
   return  control.value === this.appSelectValidator ? { 'defaultSelected': true } : null;
  }

 }
