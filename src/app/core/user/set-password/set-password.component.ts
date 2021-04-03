import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormControl, FormGroup, FormGroupName, Validators} from "@angular/forms"
import { AuthService } from 'src/app/core/user/services/auth.service';
import {SweetAlertService} from 'src/app/_services/sweet-alert.service'
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  resetpassword : any
  verifyedOrNot:boolean=false
  constructor(
    private formBuilder : FormBuilder,
    public authService: AuthService,
    private alert:SweetAlertService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {   }

  async verify(){
    await this.activatedRoute.queryParams.subscribe(async(params:any)=>{
      let data:any = await this.authService.verify(params.code)
      if (data.success) {
        this.alert.apiResponseAlert(data.message,'success')
        this.verifyedOrNot=true

      } else {
        this.alert.apiResponseAlert(data.error,'error')
      }
    })
  }
  ngOnInit(): void {
    this.verify()
    this.form()
  }
  form(){
      // this.authform = this.formBuilder.group({
      //   email: new FormControl(null,{validators:[Validators.required,Validators.email]}),
      //   password: new FormControl(null,{validators:[Validators.required]}),
      // })
  }

}
