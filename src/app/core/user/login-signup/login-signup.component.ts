import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormArray , FormControl, FormGroup, FormGroupName, Validators} from "@angular/forms"

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  loginForm:any
  constructor(
    private formBuilder : FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      email: new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password: new FormControl(null,{validators:[Validators.required]}),
    })
  }

  logindata(){
    console.log(this.loginForm.value);
    
  }

  ngOnInit(): void {
  }

}
