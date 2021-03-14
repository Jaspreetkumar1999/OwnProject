import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
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

}
