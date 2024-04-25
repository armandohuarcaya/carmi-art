import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRecoveryComponent } from './components/login-recovery/login-recovery.component';
import { LoginRoutingModule } from './login-routing.module';
import { NbAlertModule, NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbSpinnerModule, NbThemeModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneralService } from '../providers';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { LoginHomeComponent } from './containers/login-home.component';
import { LoginNewPasswordComponent } from './components/login-new-password/login-new-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    LoginHomeComponent,
    SignInComponent,
    LoginRegisterComponent,
    LoginRecoveryComponent,
    LoginNewPasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbFormFieldModule,
    NbAlertModule,
    NbSpinnerModule
  ],
  exports: [],
  providers: [GeneralService]
})
export class LoginModule { }
