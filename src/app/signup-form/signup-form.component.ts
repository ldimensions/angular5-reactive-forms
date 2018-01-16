import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private signupFormBuilder:FormBuilder) { }

  private user: User;
  signupForm: FormGroup;


  ngOnInit() {
    this.signupForm = this.signupFormBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: this.signupFormBuilder.group({
        pwd: ['', [Validators.required, Validators.minLength(4)]],
        confirmPwd: ['', [Validators.required, Validators.minLength(4)]]
      })
    })
  }

  public formSubmit() {
    if(this.signupForm.valid) {
      this.user = this.signupForm.value;
      console.log(this.user);
    }
  }

}
