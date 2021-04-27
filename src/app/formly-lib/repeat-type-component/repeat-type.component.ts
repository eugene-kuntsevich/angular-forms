import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'app-repeat-type-component',
  templateUrl: './repeat-type.component.html',
  styleUrls: ['./repeat-type.component.css'],
})
export class RepeatTypeComponent extends FieldArrayType implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}
