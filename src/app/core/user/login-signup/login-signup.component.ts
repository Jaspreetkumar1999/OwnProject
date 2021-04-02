import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormControl, FormGroup, FormGroupName, Validators} from "@angular/forms"
import { AuthService } from 'src/app/core/user/services/auth.service';
import {SweetAlertService} from 'src/app/_services/sweet-alert.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  authform:any
  constructor(
    private formBuilder : FormBuilder,
    public authService: AuthService,
    private alert:SweetAlertService,
    private router:Router
  ) {
    this.form()
  }
  ngOnInit(): void {
  }

  form(){
    this.authform = this.formBuilder.group({
      email: new FormControl(null,{validators:[Validators.required,Validators.email]}),
      password: new FormControl(null,{validators:[Validators.required]}),
    })
  }
  
  async authsubmit(){
    // this.router.url
    console.log('this.router.url', this.router.url)
    if (this.router.url==="/user/signup") {
      const data:any = await this.authService.login(this.authform.controls.email.value, this.authform.controls.password.value)
      if(data.success){this.alert.apiResponseAlert('Login Successfully','success')
      }else{ this.alert.apiResponseAlert(data.error,'error')}
    }
    if(this.router.url==='/user/login'){
      const data:any = await this.authService.login(this.authform.controls.email.value, this.authform.controls.password.value)
      if(data.success){this.alert.apiResponseAlert('Login Successfully','success')
      }else{ this.alert.apiResponseAlert(data.error,'error')}
    }
  }
  forgetPassword(){    
    this.alert.inputField('Enter your Email','Submit')
  }

 
}
