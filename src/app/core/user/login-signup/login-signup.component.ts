import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormControl, FormGroup, FormGroupName, Validators} from "@angular/forms"
import { AuthService } from 'src/app/core/user/services/auth.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  loginForm:any
  constructor(
    private formBuilder : FormBuilder,
    public authService: AuthService
  ) {
    this.form()
  }
  form(){
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password: new FormControl(null,{validators:[Validators.required]}),
    })
  }
  
  logindata(){
    console.log(this.loginForm.value);
    // this.authService.login()
  }

  ngOnInit(): void {
  }

}
