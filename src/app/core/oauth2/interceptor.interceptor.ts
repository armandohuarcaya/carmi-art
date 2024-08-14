import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tok:any = localStorage.getItem('token');
    // console.log(tok);
    if (tok) {
      const token = JSON.parse(tok);
      // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDQVJNSSAtIEFVVEgiLCJzdWIiOiJDQVJNSSAtIHN1YiIsImF1ZCI6IkFSVCAtIENBUk1JIiwia2lkIjoiLSIsImp0aSI6IjQ5OGIxODM5LTU2M2MtNGU1ZC1hYWI0LTVjZDVhZDA0ZDEzOSIsInR5cGUiOiJwZXJtaXNzaW9uIiwicHJvdmlkZXIiOiJjYXJtaSIsInVzZXIiOnsiX2lkIjoiNjVkOGMxNTE4ODJkNDcxYjdiMWQxNzNmIiwiZnVsbF9uYW1lIjoiQWxleGFuZGVyIExsYWNobyBWYXJhIiwiZW1haWwiOiJhbGxhY2hvQGdtYWlsLmNvbSIsImNlbGxwaG9uZSI6Ijk5MjAzNDEwOSIsImFkZHJlc3MiOiJBdi4gTG9zIEFsYW1vcyAxMjMiLCJzdXBlcl9hZG1pbiI6dHJ1ZX0sImlhdCI6MTcxNDA4NjUwMiwiZXhwIjoxNzE0MTcyOTAyfQ.WFk0S83DgQnW_FQUfMLBbV21X3qUFoOK3k0X1LouTA0';
      request = request.clone({
        setHeaders: {
          'Content-Type' : 'application/json; charset=utf-8',
          'Accept'       : 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}
