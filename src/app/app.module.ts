import { ErrorInterceptor } from './interceptor/error.interceptor';
import { HeaderInterceptor } from './interceptor/header.interceptor';
import { UserServiceService } from './_services/user-service.service';
import { SharedServiceService } from './_services/shared-service.service';
import { ApiServiceService } from './_services/api-service.service';
import { AuthService } from './core/user/services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    ApiServiceService,
    SharedServiceService,
    UserServiceService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HeaderInterceptor,
      multi : true
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : ErrorInterceptor,
      multi : true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
