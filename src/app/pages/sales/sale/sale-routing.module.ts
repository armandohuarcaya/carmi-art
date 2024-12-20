import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleHomeComponent } from './containers/sale-home.component';

const routes: Routes = [
  {
    path: '',
    component: SaleHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
