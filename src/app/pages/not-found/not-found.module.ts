import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import {NbButtonModule, NbCardModule, NbIconModule} from "@nebular/theme";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    RouterModule.forChild([{path: '', component: NotFoundComponent}])
  ]
})
export class NotFoundModule { }
