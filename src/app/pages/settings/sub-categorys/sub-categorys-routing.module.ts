import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCategorysHomeComponent } from './containers/sub-categorys-home.component';

const routes: Routes = [
  {
    path: '',
    component: SubCategorysHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategorysRoutingModule { }
