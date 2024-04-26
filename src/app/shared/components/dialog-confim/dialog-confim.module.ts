import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogConfimComponent } from './dialog-confim.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';

const ANGULAR: any[] = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [DialogConfimComponent],
  imports: [
    CommonModule,
    ...ANGULAR,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule

  ],
  exports: [DialogConfimComponent, ...ANGULAR],
})
export class DialogConfimModule { }
