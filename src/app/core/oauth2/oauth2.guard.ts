import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
// import {NbAuthService} from '@nebular/auth';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable()
export class Auth2Guard implements CanActivate {

    constructor(
        // private authService: NbAuthService,
        private router: Router,
        private datePipe: DatePipe) {
    }

    canActivate(): Observable<boolean> {
        let valid:any = false;
        const valida:any = localStorage.getItem('token');
        if (valida) {
            valid = true;
        } else {
            this.router.navigate(['/login']);
        }
        // const user:any = localStorage.getItem('user');
        // if (user) {
        //   const userObject = JSON.parse(user);
        //   const token_expired = userObject.token_expired_at;
        //   const expired:any = this.datePipe.transform(token_expired, 'dd-MM-yyyy HH:mm');
        //   const newDate:any = this.datePipe.transform(new Date(), 'dd-MM-yyyy HH:mm'); 
        // //   console.log(expired, 'Expired', newDate, 'New dates');
        //   if (expired >= newDate) {
        //     valid = true;
        //   } else {
        //     localStorage.removeItem('user');
        //     setTimeout(() => {
        //       this.router.navigate(['/login']);
        //     }, 1000);
        //     valid = false;
        //   }
        // } else {
        //     localStorage.removeItem('user');
        //     setTimeout(() => {
        //       this.router.navigate(['/login']);
        //     }, 1000);
        //     valid = false;
        // }
        return valid;
      
    }

}
