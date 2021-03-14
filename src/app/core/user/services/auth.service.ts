import { SweetAlertService } from './../../../_services/sweet-alert.service';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { ApiServiceService } from '../../../_services/api-service.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { JwtHelperService } from '@auth0/angular-jwt/src/jwthelper.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { strict } from 'assert';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token : string = "";
   jwtService = new JwtHelperService ();
  public currentUserSubject : BehaviorSubject<User>;
  public currentUser : Observable<User>;

  constructor( 
    private apiSerive : ApiServiceService ,
    private router : Router,
    private alert : SweetAlertService) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
    }

  public isAuthenticated() : boolean{
    const token = localStorage.getItem('token');
    if(!token ) return false;

     if(!this.jwtService.isTokenExpired(this.token)){
       this.token = token;
       return true;
     }else{
       localStorage.removeItem('token');
       this.token = "";
       return false;
     }
  }

  public getToken() : string{
    return this.token;
  }
  public signUp(email : string, password : string){
    this.apiSerive.callAPI('post', {email : email, password : password}, "admin/signup")
     .subscribe(data => {
       if(data.success === true){
         this.alert.apiResponseAlert(data.data.message ? data.data.message : "SignUp successfully.", "success");
         this.router.navigate(['user'])
       }
     })

  }
  public login(email :string , password : string){
   return this.apiSerive.callAPI("post", {email :email , password : password } , "admin/signin")
   .subscribe( (data :any) =>{
    //  console.log("Data =>", data)
     if(data.success === true){
     this.saveToken( JSON.stringify(data.data.authToken));
       const { password ,authToken, createdAt, isDeleted , isEmailVerified, isPhoneVerified, isVerified,secondaryEmail, status,
      updatedAt, verificationBy , ...rest } = data.data
       this.saveUser( JSON.stringify(rest));
       this.currentUserSubject.next(rest);
       this.router.navigate([""]);

     }
     return data;

   })
   
   
 
    
  }
  public saveToken (body : string){
      localStorage.setItem("token", body);
  }
  public saveUser(body:string){
    localStorage.setItem('currentUser', body);
  }
  public logout(){
    localStorage.removeItem('token');
    this.currentUserSubject.next(null!);
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}


}


