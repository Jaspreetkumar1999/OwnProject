import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    CommonRoutingModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class Common_Module { }
