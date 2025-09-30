import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsHomeComponent } from './containers/clients-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { PaginationsModule } from 'src/app/shared/components/paginations/paginations.module';
import { MClientComponent } from './components/modals/m-client/m-client.component';

const ANGULAR: any[] = [CommonModule, FormsModule, ReactiveFormsModule];
const NEBULAR: any[] = [
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbButtonModule,
  NbSpinnerModule,
  NbDialogModule.forChild(),
  NbFormFieldModule,
  NbSelectModule,
  NbAutocompleteModule
];
@NgModule({
  declarations: [
    ClientsHomeComponent,
    MClientComponent,
  ],
  imports: [
    ClientsRoutingModule,
    PaginationsModule,
    ...ANGULAR,
    ...NEBULAR
  ]
})
export class ClientsModule { }
