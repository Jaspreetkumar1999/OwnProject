import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
<<<<<<< HEAD
  baseURL = "http://52.90.163.87:3001"
  constructor(
    private http:HttpClient
  ) { }
  callAPI(method: String, apidata: any, APIEndPoint: String) {
    if(method==='post'){
      return this.http.post(this.baseURL + APIEndPoint, apidata);
    }else if(method==='get'){
      return this.http.get(this.baseURL + APIEndPoint, apidata);
    }else if(method==='delete'){
      return this.http.delete(this.baseURL + APIEndPoint, apidata);
    }else if(method==='put'){
      return this.http.put(this.baseURL + APIEndPoint, apidata);
    }
    else{
      return this.http.get(this.baseURL + APIEndPoint, apidata);
    }
  }
=======
  baseUrl :string = environment.baseUrl

  constructor(
    private http : HttpClient
  ) { }
  callAPI(method: string, apiData :any, APIEndPoint:string): Observable<any> {
    if (method.toLowerCase() === "post") {
      return Observable.create((observer :any) => {
        this.http
          .post(this.baseUrl + APIEndPoint, apiData)
          .subscribe((data: any) => {
            observer.next(data);
            observer.complete();
          });
      });
    } else if (method.toLowerCase() === "get") {
      return Observable.create((observer :any) => {
        this.http
          .get(this.baseUrl + APIEndPoint + "?" + apiData)
          .subscribe((data: any) => {
            observer.next(data);
            observer.complete();
          });
      });
    } else if (method.toLowerCase() === "put") {
      return Observable.create((observer :any) => {
        this.http
          .put(this.baseUrl + APIEndPoint, apiData)
          .subscribe((data: any) => {
            observer.next(data);
            observer.complete();
          });
      });
    } else if (method.toLowerCase() === "delete") {
      return Observable.create( (observer :any) => {
        this.http
          .delete(this.baseUrl + APIEndPoint, apiData)
          .subscribe((data: any) => {
            observer.next(data);
            observer.complete();
          });
      });
    }
  }

>>>>>>> jaspreet_dev
}
