import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  myForm: FormGroup;

  ngOnInit(): void {
  }

  constructor() {
    this.myForm = new FormGroup({

      userName: new FormControl('Tom', [Validators.required, this.userNameValidator]),
      userEmail: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      phones: new FormArray([
        new FormControl('+7', Validators.required)]),
    });
  }

  addPhone() {
    (this.myForm.controls.phones as FormArray).push(new FormControl('+7', Validators.required));
  }

  submit() {
    console.log(this.myForm);
  }

  // валидатор
  userNameValidator(control: FormControl): { [s: string]: boolean } {

    if (control.value === 'нет') {
      return {userName: true};
    }
    return null;
  }
}
