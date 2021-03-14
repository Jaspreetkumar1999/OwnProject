import { environment } from './../environments/environment';
import { AuthService } from 'src/app/core/user/services/auth.service';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { HeaderInterceptor } from './interceptor/header.interceptor';
import { UserServiceService } from './_services/user-service.service';
import { SharedServiceService } from './_services/shared-service.service';
import { ApiServiceService } from './_services/api-service.service';
// import { AuthService } from './core/user/services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from "@auth0/angular-jwt";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {Common_Module} from 'src/app/common/common.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';


export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Common_Module,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.baseUrl],
        disallowedRoutes: [],
      },
    }),
 
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
    },
  
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
