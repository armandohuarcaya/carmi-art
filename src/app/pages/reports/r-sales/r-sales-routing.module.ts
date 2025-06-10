import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RSalesHomeComponent } from './containers/r-sales-home.component';

const routes: Routes = [
  {
    path: '',
    component: RSalesHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RSalesRoutingModule { }
