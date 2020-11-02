import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtLocalStorageService } from './jwt.localstorege.service';

@Injectable({ providedIn: 'root' })
export class TokenInvoiceInterceptorService implements HttpInterceptor {
  constructor(private jwtService: JwtLocalStorageService) {}

  intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    console.log('Prosao kroz interceptor..');

    const token = this.jwtService.getToken();

    if(!token) {
      console.log('nema tokena!');
    }

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }
    const authRequest = req.clone({ setHeaders: headersConfig });
    return next.handle(authRequest);
  }
}
