import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';
import { FormlyLibComponent } from './formly-lib.component';
import { FormlyValidators } from './formly-validators';
import { FormlyWarningMessages } from './formly-warning-messages';
import { RepeatTypeComponent } from './repeat-type-component/repeat-type.component';

@NgModule({
  declarations: [
    FormlyLibComponent,
    RepeatTypeComponent,
  ],
  imports: [
    CommonModule,
    FormlyModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,

    MatNativeDateModule,
    FormlyMatDatepickerModule,
    FormlyMatToggleModule,

    FormlyModule.forRoot({
      validationMessages: [
        {name: 'required', message: FormlyWarningMessages.validateRequired},
        {name: 'minlength', message: FormlyWarningMessages.validateMinLength},
        {name: 'maxlength', message: FormlyWarningMessages.validateMaxLength},
        {name: 'min', message: FormlyWarningMessages.validateMin},
        {name: 'max', message: FormlyWarningMessages.validateMax},
      ],
      validators: [{name: 'ip', validation: FormlyValidators.ipValidator}],
      // Add RepeatTypeComponent
      types: [{name: 'repeat', component: RepeatTypeComponent}],
    }),
    FormlyMaterialModule,
    BrowserAnimationsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class FormlyLibModule {}
