import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/providers';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  showPassword = true;
  formHeaders:any = FormGroup;
  loading: boolean = false;
  @Output() changeValues: EventEmitter<any> = new EventEmitter();
  constructor(private service: GeneralService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.fielReactive();
  }
  private fielReactive() {
    const controls = {
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
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
  registerLogin() {
    this.formHeaders.controls['messageResponse'].setValue('');
    this.formHeaders.controls['success'].setValue(true);
    const forms = this.formHeaders.value;
    const serviceName = 'register';
    const params = {
      email: forms.email,
      password: forms.password,
      name: forms.username,
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
    this.changeValues.emit('SIGN_IN');
  }
}
