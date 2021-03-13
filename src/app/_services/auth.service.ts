import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token : string = "";

  constructor( public jwtSerive : JwtHelperService ) { }

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
}
