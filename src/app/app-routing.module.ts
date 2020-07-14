import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DirectiveComponent } from './directive/directive.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: '', redirectTo: '/directive', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
