import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMediaBreakpointsService, NbMenuItem, NbSidebarService, NbThemeService } from '@nebular/theme';
import { Subscription, map } from 'rxjs';
// import { GeneralService } from 'src/app/providers';

@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent implements OnInit {
  loading: boolean = false;
  isLessThanXl = false;
  MENU_ITEMS: NbMenuItem[] = [
    {
      title: "Administrar",
      icon: "settings-outline",
      link: "/pages/settings",
      pathMatch: "prefix",
      children: [
        {
          title: "Productos",
          icon: "sync-outline",
          link: "/pages/settings/products",
          pathMatch: "prefix",
        },
      ],
    },
    {
      title: "Ventas",
      icon: "settings-outline",
      link: "/pages/sales",
      pathMatch: "prefix",
      children: [
        {
          title: "Ventas rápidas",
          icon: "sync-outline",
          link: "/pages/sales/sale",
          pathMatch: "prefix",
        },
      ],
    },
  ];
  user:any = '';
  isMobile: boolean = false;
  constructor(private router: Router, private _nbSidebarService: NbSidebarService, private _breakpointService: NbMediaBreakpointsService,
    private _nbThemeService: NbThemeService) { }

  onLessThanXl(): Subscription {
    const {xl} = this._breakpointService.getBreakpointsMap();
    return this._nbThemeService.onMediaQueryChange().pipe(
      map(([, currentBreakpoint]) => currentBreakpoint.width < xl))
      .subscribe((isLessThanXl: boolean) => this.isLessThanXl = isLessThanXl);
  }

  ngOnInit(): void {
    const tok:any = localStorage.getItem('token') ? localStorage.getItem('token')?.split('.') : '';
    this.user = JSON.parse(atob(tok[1]));
    // console.log(this.user.user);
    this.isMobile = this.detectMobileDevice();
    console.log('¿Está usando un dispositivo móvil?', this.isMobile);
  }
  detectMobileDevice(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor;
    // Detecta si el usuario está en un dispositivo móvil (iOS, Android, Windows Phone)
    if (/android|iPad|iPhone|iPod|windows phone/i.test(userAgent)) {
      return true;
    }
    return false;
  }
  logout() {
    // const serviceName = 'logout';
    // this.loading = true;
    // this.service.addName$(serviceName).subscribe((res:any) => {
    //   if (res.success) {
    //     localStorage.removeItem('user');
    //     setTimeout(() => {
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
    //     }, 100);
    //   }
    // }, () => this.loading = false, () => this.loading = false);
  }
  toggle(): boolean {
    this._nbSidebarService.toggle(true, 'core-sidebar');
    this.isLessThanXl = !this.isLessThanXl;
    return false;
  }
}
