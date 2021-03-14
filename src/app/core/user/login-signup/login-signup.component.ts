import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormControl, FormGroup, FormGroupName, Validators} from "@angular/forms"
import { AuthService } from 'src/app/core/user/services/auth.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  title : string = "login"

  loginForm:any
  constructor(
    private formBuilder : FormBuilder,
    public authService: AuthService
  ) {
    this.form()
  }
  ngOnInit(): void {
  }

  form(){
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password: new FormControl(null,{validators:[Validators.required]}),
    })
  }
  
  logindata(){
    // console.log(this.loginForm.value);
    //   console.log("check =>", this.loginForm.controls);
      if(this.loginForm.invalid){
        return
      }
     this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value);
    // this.authService.login()
  }

  showLogin(){
    this.title = 'login'
  }
  showSignup(){
    this.title = 'signup'
  }

 
}
