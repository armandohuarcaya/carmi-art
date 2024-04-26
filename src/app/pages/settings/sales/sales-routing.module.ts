import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesHomeComponent } from './containers/sales-home.component';

const routes: Routes = [
  {
    path: '', 
    component: SalesHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
