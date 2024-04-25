import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.scss']
})
export class LoginHomeComponent implements OnInit {
  formHeaders:any = FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fielReactive();
  }
  private fielReactive() {
    const controls = {
      type: ['SIGN_IN', [Validators.required]],
    }
    this.formHeaders = this.formBuilder.group(controls);
  }
  changeValues($event:any) {
    this.formHeaders.controls['type'].setValue($event);
  }
}
