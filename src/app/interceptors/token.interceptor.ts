import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { checkToken, getToken } from '../utilities/common';

/**
 * agregar token a la paeticion globalmente
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.handleToken(request);
    return next.handle(request);
  }

  /**
   * revisar si hay token, en caso de haberla clonar el objeto de peticion
   * pero agregandole los headers
   * @param request http request captado por el interceptor
   * @returns el header modificado o no.
   */
  handleToken(request: HttpRequest<unknown>): HttpRequest<unknown> {
    if (checkToken()) {
      const token = `Bearer ${getToken()}`;
      const headers = request.headers.set('Authorization', token);
      request = request.clone({headers});      
    }
    return request;
  }
}
