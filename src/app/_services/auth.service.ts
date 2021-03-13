import { ApiServiceService } from './api-service.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token : String = "";
  public currentUserSubject : BehaviorSubject<any>;
  public currentUser : Observable<any>;

  constructor( public jwtSerive : JwtHelperService,
    private apiSerive : ApiServiceService ) { 
          this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
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
  public login(body){
   return this.apiSerive.callAPI("post", body , "admin/signin").pipe(
     map((data =>{
       if(data.success === true ){
         this.saveToken(data.data.token);
         this.currentUserSubject.next(data);
       }
       return data;
     }))
   )
    
  }
  public saveToken (body){
      localStorage.setItem("token", body);
  }
  public saveUser(body){
    localStorage.setItem('currentUser', body);
  }
  public removeToken(){
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

}

// private currentUserSubject: BehaviorSubject<User>;
// public currentUser: Observable<User>;

// constructor(private http: HttpClient) {
//     this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
//     this.currentUser = this.currentUserSubject.asObservable();
// }

// public get currentUserValue(): User {
//     return this.currentUserSubject.value;
// }

// login(username: string, password: string) {
//     return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username, password })
//         .pipe(map(user => {
//             // login successful if there's a jwt token in the response
//             if (user && user.token) {
//                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//                 localStorage.setItem('currentUser', JSON.stringify(user));
//                 this.currentUserSubject.next(user);
//             }

//             return user;
//         }));
// }

// logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(null);
// }
