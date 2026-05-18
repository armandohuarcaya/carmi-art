import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {NbGlobalPhysicalPosition, NbGlobalPosition, NbIconConfig, NbToastrService} from "@nebular/theme";
import {status} from './status-messages';
import {Router} from "@angular/router";

const showStatusCodes = new Set([400, 401, 500, 403, 404, 202, 422, 409, 0, 405]);

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  position: NbGlobalPosition = NbGlobalPhysicalPosition.BOTTOM_RIGHT;

  constructor(
    private readonly nbToastrService: NbToastrService,
    private readonly router: Router
  ) {
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
        if (err.status === 401) {
          this.handleUnauthorized();
        } else {
          this.throwErrorToast(err);
        }
        return throwError(() => err);
      })
    );
  }

  private interceptResponse(event: HttpEvent<any>, method: any): any {
    const $event: any = event;
    if (event && $event['status']) {
      let data: any = status[$event['status']];
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
    if (showStatusCodes.has(err.status)) {
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
    const iconConfig: NbIconConfig = {icon: iconName, status: status};
    this.nbToastrService.show(msg, title, iconConfig);
  }

  private handleUnauthorized() {
    localStorage.clear(); // O sessionStorage.clear() / localStorage.removeItem('token')
    this.router.navigate(['/login']);
    this.nbToastrService.warning('Tu sesión ha expirado', 'Sesión terminada');
  }
}
