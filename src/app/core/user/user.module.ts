import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ProfileComponent } from './profile/profile.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SetPasswordComponent } from './set-password/set-password.component'


@NgModule({
  declarations: [UserComponent, LoginSignupComponent, ProfileComponent, SetPasswordComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
