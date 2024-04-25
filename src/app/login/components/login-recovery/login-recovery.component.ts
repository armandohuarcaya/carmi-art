import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/providers';

@Component({
  selector: 'app-login-recovery',
  templateUrl: './login-recovery.component.html',
  styleUrls: ['./login-recovery.component.scss']
})
export class LoginRecoveryComponent implements OnInit {
  formHeaders:any = FormGroup;
  loading: boolean = false;
  @Output() changeValues: EventEmitter<any> = new EventEmitter();
  constructor(private service: GeneralService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.fielReactive();
  }
  private fielReactive() {
    const controls = {
      email: ['', [Validators.required, Validators.email]],
      messageResponse: [''],
      success: [true],
    }
    this.formHeaders = this.formBuilder.group(controls);
  }

  requestPAssword() {
    this.formHeaders.controls['messageResponse'].setValue('');
    this.formHeaders.controls['success'].setValue(true);
    const forms = this.formHeaders.value;
    const serviceName = 'reset-password';
    const params = {
      email: forms.email,
    }
    this.loading = true;
    this.service.addNameData$(serviceName, params).subscribe((res:any) => {
      this.formHeaders.controls['messageResponse'].setValue(res.message);
      this.formHeaders.controls['success'].setValue(res.success);
      if (res && res.success) {
        this.changeValues.emit('NEW_PASSWORD');;
      } else {
      }
    }, () => this.loading = false, () => this.loading = false);
  }
  backRegister() {
    this.changeValues.emit('SIGN_IN');
  }
}
