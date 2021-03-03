import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  // {
  //   path : "user",
  //   loadChildren : () => import('./core/user/user.module').then(f => f.UserModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
