import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path :"",
    redirectTo:"login"
    // component : UserComponent
  },
  {
    path :"login",
    component : LoginSignupComponent
  },
  {
    path :"signup",
    component : LoginSignupComponent
  },
  {
    path :"resetpassword",
    component : SetPasswordComponent
  },
  {
    path :"profile",
    component : ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
