import { environment } from './../../environments/environment';
import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(
    private auth : AuthService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     let token = this.auth.getToken();
     const clonedRequest = request.clone({
      headers: request
        .headers
        .set('Authorization', token ? `Bearer ${token}` : '')
        .set('API_KEY', environment.apiKey)

    });

    return next.handle(request);
  }
}
