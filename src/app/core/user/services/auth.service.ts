import { User } from '../../../models/user';
import { ApiServiceService } from '../../../_services/api-service.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token : string = "";
  public currentUserSubject : BehaviorSubject<User>;
  public currentUser : Observable<User>;

  constructor( public jwtSerive : JwtHelperService,
    private apiSerive : ApiServiceService ) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
    }

  public isAuthenticated() : boolean{
    const token = localStorage.getItem('token');
    if(!token ) return false;

     if(!this.jwtSerive.isTokenExpired(this.token)){
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
  public login(email :string , password : string){
   return this.apiSerive.callAPI("post", {email :email , password : password } , "admin/signin")
   .subscribe( (data :any) =>{
     if(data.success === true){
       data.data = data.data;
      this.saveToken( JSON.stringify(data.token));
      this.saveUser( JSON.stringify(data.data))
      this.currentUserSubject.next(data);
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


