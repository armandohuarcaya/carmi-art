import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'brand',
    loadChildren: () =>
      import('./brands/brands.module').then(
        (m) => m.BrandsModule
      ),
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./categorys/categorys.module').then(
        (m) => m.CategorysModule
      ),
  },
  {
    path: 'sub-category',
    loadChildren: () =>
      import('./sub-categorys/sub-categorys.module').then(
        (m) => m.SubCategorysModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
