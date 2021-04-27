import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeroFormComponent } from './hero-form.component';

// example with template-driven forms
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    HeroFormComponent,
  ],
})
export class HeroesModule {}
