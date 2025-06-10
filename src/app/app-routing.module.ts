import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScaffoldComponent } from './core/scaffold/scaffold.component';
import { Auth2Guard } from './core/oauth2/oauth2.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  // {
  //   path: 'intipaz',
  //   loadChildren: () => import('./external/intipaz/intipaz.module').then(m => m.IntipazModule),
  // },
  {
    path: 'pages',
    component: ScaffoldComponent,
    canActivate: [Auth2Guard],
    children: [
        // {
        //     path: 'dashboard',
        //     component: DashboardComponent
        // },
        {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
        },
        {
            path: 'settings',
            loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)
        },
        {
          path: 'sales',
          loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesModule)
        },
        {
          path: 'reports',
          loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule)
        },
        {
          path: '**',
          loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
        },
    ]
  },
  {
   path: '',
   redirectTo: 'login',
   pathMatch: 'full',
  },
  //  {
  //    path: '',
  //    redirectTo: 'selection',
  //    pathMatch: 'full',
  //  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
