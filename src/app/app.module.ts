import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormlyLibModule } from './formly-lib/formly-lib.module';
import { HeroesModule } from './hero-form/heroes.module';
import { ReactiveFormModule } from './reactive-form/reactive-form.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
    ReactiveFormModule,
    FormlyLibModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
