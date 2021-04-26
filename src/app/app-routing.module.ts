import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const appRoutes: Routes = [
  {path: 'template-driven-form', component: HeroFormComponent},
  {path: 'reactive-form', component: ReactiveFormComponent},
  {path: '', redirectTo: '/template-driven-form', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
