import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ProductTypeNames } from './product-type.enum';

@Component({
  selector: 'app-formly-lib',
  templateUrl: './formly-lib.component.html',
  styleUrls: ['./formly-lib.component.css'],
})
export class FormlyLibComponent implements OnInit {

  myForm = new FormGroup({});

  myModel = {email: 'email@gmail.com'};

  myFields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      hideExpression: '!model.name',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter name',
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter email',
      },
    },
    {
      key: 'amount',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Amount',
        placeholder: 'Enter amount',
      },
    },
    {
      key: 'date_of_birth',
      type: 'datepicker',
      templateOptions: {
        label: 'Datepicker',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'Accept terms',
        description: 'Please accept our terms',
        required: true,
      },
    },
    {
      key: 'terms',
      type: 'toggle',
      templateOptions: {
        label: 'Accept terms',
        description: 'Please accept our terms',
        required: true,
      },
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'Enter description',
      },
    },
    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        label: 'Gender',
        placeholder: 'Placeholder',
        description: 'Fill in your gender',
        options: [
          {value: 1, label: 'Male'},
          {value: 2, label: 'Female'},
          {value: 3, label: 'I don\'t want to share that'},
        ],
      },
    },
    {
      key: 'product_type',
      type: 'select',
      templateOptions: {
        label: 'Product type',
        placeholder: 'Product type',
        description: 'Select the product type',
        required: true,
        options: [
          {value: 'single', label: 'Single product'},
          {value: 'bulk', label: 'Bulk product'},
        ],
      },
    },
// Or data from the enum
    {
      key: 'product_type',
      type: 'select',
      templateOptions: {
        label: 'Product type',
        placeholder: 'Product type',
        description: 'Select the product type',
        required: true,
        options: ProductTypeNames.map((value, index) => {
          return {
            value: index,
            label: value,
          };
        }),
      },
    },
    {
      key: 'product_types',
      type: 'select',
      templateOptions: {
        label: 'Product type',
        placeholder: 'Product type',
        description: 'Select the product type',
        required: true,
        multiple: true,
        selectAllOption: 'Select All',
        options: [
          {value: 'single', label: 'Single product'},
          {value: 'bulk', label: 'Bulk product'},
        ],
      },
    },
    {
      key: 'ip',
      type: 'input',
      templateOptions: {
        label: 'IP Address (using custom validation declared in ngModule)',
        required: true,
      },
      validators: {
        validation: ['ip'],
      },
    },
    // Repeatable section
    {
      key: 'investments',
      type: 'repeat',
      templateOptions: {
        addText: 'Add another investment',
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'investmentName',
            templateOptions: {
              label: 'Name of Investment:',
              required: true,
            },
          },
          {
            type: 'datepicker',
            key: 'investmentDate',
            templateOptions: {
              label: 'Date of Investment:',
            },
          },
          {
            key: 'amount',
            type: 'input',
            templateOptions: {
              type: 'number',
              label: 'Amount',
              placeholder: 'Enter amount',
              min: 1,
              max: 15,
            },
          },
        ],
      },
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.myModel);
  }
}
