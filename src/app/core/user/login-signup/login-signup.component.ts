import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormControl, FormGroup, FormGroupName, Validators} from "@angular/forms"
import { AuthService } from 'src/app/core/user/services/auth.service';
import {SweetAlertService} from 'src/app/_services/sweet-alert.service'
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  loginForm:any
  constructor(
    private formBuilder : FormBuilder,
    public authService: AuthService,
    private alert:SweetAlertService
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
  
  async logindata(){
    const data:any = await this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
    if(data.success){this.alert.apiResponseAlert('Login Successfully','success')
    }else{ this.alert.apiResponseAlert(data.error,'error')}
  }
  forgetPassword(){    
    this.alert.inputField('Enter your Email','Submit')
  }

 
}
