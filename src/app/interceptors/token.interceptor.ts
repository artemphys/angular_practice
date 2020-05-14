import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = sessionStorage.getItem('authToken');

    if (!authToken) {
      return next.handle(request);
    }

    const authRequest = request.clone({
      headers: request.headers.set('Authorization', authToken),
    });
    return next.handle(authRequest);
  }
}
