import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { CoreOptions, CORE_OPTIONS } from 'src/app/core/core.options';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  showPassword = true;
  formHeaders:any = FormGroup;
  loading: boolean = false;
  @Output() changeValues: EventEmitter<any> = new EventEmitter();
  constructor(private service: GeneralService, private formBuilder: FormBuilder, private router: Router,
    @Inject(CORE_OPTIONS) protected options: CoreOptions) {
      
    }

  ngOnInit(): void {
    // console.log('holas');
    this.fielReactive();
  }
  private fielReactive() {
    const controls = {
      email: ['', [Validators.required, Validators.email]],
      // name: ['', [Validators.required]],
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
  loginSignIn() {
    this.formHeaders.controls['messageResponse'].setValue('');
    this.formHeaders.controls['success'].setValue(true);
    const forms = this.formHeaders.value;
    const serviceName = environment.auth +  '/login';
    const params = {
      email: forms.email,
      provider: 'carmi',
      password: forms.password,
    }
    // if (forms.email === 'admin@admin' && forms.password === '1234567891') {
    //   localStorage.setItem('autorize', JSON.stringify(true));
    //   setTimeout(() => {
    //     this.router.navigate(['/pages/settings/products']);
    //   }, 100);
    // }
    this.loading = true;
    this.service.addNameDataPublic$(serviceName, params).subscribe((res:any) => {
      // this.formHeaders.controls['messageResponse'].setValue(res?.message);
      // this.formHeaders.controls['success'].setValue(res.success);

      // setTimeout(() => {
      //   this.formHeaders.controls['messageResponse'].setValue('');
      // }, 5000);
      // console.log(res);
      if (res && res.success) {
        const token = JSON.stringify(res && res?.token);
        localStorage.setItem('token', token);
        this.router.navigate(['/pages/settings/products']);
        // this.formHeaders.controls['success'].setValue(true);
      } else {
        localStorage.removeItem('token');
      }
    }, () => this.loading = false, () => this.loading = false);
  }
  init() {
    this.router.navigate(['/intipaz']);
  }
  typesChange() {
    this.changeValues.emit('REGISTER');
  }
  recoveryChange() {
    this.changeValues.emit('RECOVERY');
  }
  ngOnDestroy(): void {
  }
}
