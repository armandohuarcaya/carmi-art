import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/providers';

@Component({
  selector: 'app-login-new-password',
  templateUrl: './login-new-password.component.html',
  styleUrls: ['./login-new-password.component.scss']
})
export class LoginNewPasswordComponent implements OnInit {
  showPassword = true;
  showPassword2 = true;
  formHeaders:any = FormGroup;
  loading: boolean = false;
  @Output() changeValues: EventEmitter<any> = new EventEmitter();
  constructor(private service: GeneralService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.fielReactive();
  }
  private fielReactive() {
    const controls = {
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      messageResponse: [''],
      success: [true],
    }
    this.formHeaders = this.formBuilder.group(controls);
  }
  getInputType() {
    if (this.showPassword) {
      return 'password';
    } else {
      return 'text';
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  getInputType2() {
    if (this.showPassword2) {
      return 'password';
    } else {
      return 'text';
    }
  }

  toggleShowPassword2() {
    this.showPassword2 = !this.showPassword2;
  }

  
  get validPass() : string {
    let valid:any = '';
    const forms = this.formHeaders.value;
    if ((forms.password !== forms.confirm_password) && forms.password && forms.confirm_password) {
      valid = 'Las contraseñas deben ser iguales';
    } else {
      valid = '';
    }
    return valid;
  }
  

  newPasswordLogin() {
    this.formHeaders.controls['messageResponse'].setValue('');
    this.formHeaders.controls['success'].setValue(true);
    const forms = this.formHeaders.value;
    const serviceName = 'new-password';
    const params = {
      password: forms.password,
      confirm_password: forms.confirm_password,
      codigo: forms.codigo,
    }
    this.loading = true;
    this.service.addNameData$(serviceName, params).subscribe((res:any) => {
      this.formHeaders.controls['messageResponse'].setValue(res.message);
      this.formHeaders.controls['success'].setValue(res.success);
      if (res && res.success) {
        this.changeValues.emit('SIGN_IN');;
      } else {
      }
    }, () => this.loading = false, () => this.loading = false);
  }
  backRegister() {
    this.changeValues.emit('RECOVERY');
  }
}
