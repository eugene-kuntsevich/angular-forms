import { FormlyFieldConfig } from '@ngx-formly/core';

export class FormlyWarningMessages {

  static validateRequired(err, field: FormlyFieldConfig) {
    return `This field is required1`;
  }

  static validateMinLength(err, field: FormlyFieldConfig) {
    return `Should have atleast ${field.templateOptions.minLength} characters`;
  }

  static validateMaxLength(err, field: FormlyFieldConfig) {
    return `Should have less than ${field.templateOptions.maxLength} characters`;
  }

  static validateMin(err, field: FormlyFieldConfig) {
    return 'This value should be more than ' + field.templateOptions.min;
  }

  static validateMax(err, field: FormlyFieldConfig) {
    return `This value should be less than ${field.templateOptions.max}`;
  }
}
