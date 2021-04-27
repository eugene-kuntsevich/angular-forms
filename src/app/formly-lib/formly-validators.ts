import { FormControl, ValidationErrors } from '@angular/forms';

export class FormlyValidators {

  static ipValidator(control: FormControl): ValidationErrors {
    return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : {ip: true};
  }
}
