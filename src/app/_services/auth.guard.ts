import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
   public authService : AuthService, 
   private router : Router, 
   private decode : decode){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   const expectedRole = route.data.expectedRole;
   const token = localStorage.getItem('token');
   const decodedToken = decode(token);

   if(!this.authService.isAuthenticated() || decodedToken.role !== expectedRole) {
     this.router.navigate(['/login']);
    return false;
   }


    return true;
  }




  
}
