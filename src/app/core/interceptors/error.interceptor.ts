import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {NbGlobalPhysicalPosition, NbGlobalPosition, NbIconConfig, NbToastrService} from "@nebular/theme";
import { status } from './status-messages';

const showStatusCodes = [400, 401, 500, 403, 404, 202, 422, 409, 0, 405];

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  position: NbGlobalPosition = NbGlobalPhysicalPosition.BOTTOM_RIGHT;
  constructor(private nbToastrService: NbToastrService) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(
          (res: HttpEvent<any>) => {
            // console.log(res, req.method)
            if (res && req.method !== 'GET') {
                this.interceptResponse(res, req.method);
              }
          },
       ),
      catchError((err: HttpErrorResponse) => {
        this.throwErrorToast(err);
        return throwError(err);
      })
    );
  }
  private interceptResponse(event: HttpEvent<any>, method: any): any {
    const $event:any =  event;
      if (event && $event['status']) {
        var data: any = status[$event['status']];
          let msg = data.description;
          if ($event && $event.body && $event.body.message) {
            msg = $event.body.message;
            setTimeout(() => {
              this.showMessage(msg, data.title, data.icon, data.status);
            }, 100);
          }
      }
  }
  private throwErrorToast(err: any): void {
    if (showStatusCodes.includes(err.status)) {
      // this.toast(`${err.message}`, err.name);
      this.toast(`Error en el servicio`, 'Error');
    }
  }

  private toast(msg: any, title: any): void {
    this.nbToastrService.danger(msg, title, {
      duration: 4000,
      icon: 'alert-circle-outline',
    });
  }
  showMessage(msg: any, title: any, iconName: string, status: any): any {
    const iconConfig: NbIconConfig = { icon: iconName,  status: status};
    this.nbToastrService.show(msg, title, iconConfig);
  }
}
