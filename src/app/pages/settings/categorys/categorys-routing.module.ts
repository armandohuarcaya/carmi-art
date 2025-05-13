import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorysHomeComponent } from './containers/categorys-home.component';

const routes: Routes = [
  {
    path: '',
    component: CategorysHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorysRoutingModule { }
