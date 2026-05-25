import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NbMediaBreakpointsService, NbSidebarService, NbThemeService} from '@nebular/theme';
import {map, Subscription} from 'rxjs';
import {AppMenuItem} from "./menu-item.interface";

@Component({
  selector: 'app-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent implements OnInit {
  copyright = atob('Q3JlYXRlIGJ5IEBDcmlzdGlhbiBIdWFyY2F5YSAyMDI0'); // CH
  loading: boolean = false;
  isLessThanXl = false;
  user: any = '';
  superadmin: any = '';
  userRoles: string[] = [];
  filteredMenu: AppMenuItem[] = [];
  isMobile: boolean = false;
  MENU_ITEMS: AppMenuItem[] = [
    {
      title: "Administrar",
      icon: "settings-2-outline",
      link: "/pages/admin",
      roles: ['superadmin'],
      pathMatch: "prefix",
      children: [
        {
          title: "Usuarios",
          icon: "people-outline",
          link: "/pages/admin/user",
          pathMatch: "prefix",
        },
        {
          title: "Empresa",
          icon: "pricetags-outline",
          link: "/pages/admin/company",
          pathMatch: "prefix",
        },
      ],
    },
    {
      title: "Configuración",
      icon: "settings-2-outline",
      link: "/pages/settings",
      roles: ['admin'],
      pathMatch: "prefix",
      children: [
        {
          title: "Productos",
          icon: "cube-outline",
          link: "/pages/settings/product",
          pathMatch: "prefix",
        },
        {
          title: "Marcas",
          icon: "pricetags-outline",
          link: "/pages/settings/brand",
          pathMatch: "prefix",
        },
        {
          title: "Categorías",
          icon: "grid-outline",
          link: "/pages/settings/category",
          pathMatch: "prefix",
        },
        {
          title: "Sub categoría",
          icon: "layers-outline",
          link: "/pages/settings/sub-category",
          pathMatch: "prefix",
        },
        {
          title: "Clientes",
          icon: "people-outline",
          link: "/pages/settings/client",
          pathMatch: "prefix",
        },
      ],
    },
    {
      title: "Ventas",
      icon: "shopping-cart-outline",
      link: "/pages/sales",
      roles: ['admin', 'seller'],
      pathMatch: "prefix",
      children: [
        {
          title: "Ventas rápidas",
          icon: "flash-outline",
          link: "/pages/sales/sale",
          pathMatch: "prefix",
        },
      ],
    },
    {
      title: "Reportes",
      icon: "bar-chart-2-outline",
      link: "/pages/reports",
      roles: ['admin'],
      pathMatch: "prefix",
      children: [
        {
          title: "Ventas",
          icon: "trending-up-outline",
          link: "/pages/reports/sale",
          pathMatch: "prefix",
        },
      ],
    },
  ];

  constructor(
    private readonly router: Router,
    private readonly _nbSidebarService: NbSidebarService,
    private readonly _breakpointService: NbMediaBreakpointsService,
    private readonly _nbThemeService: NbThemeService
  ) {
  }

  onLessThanXl(): Subscription {
    const {xl} = this._breakpointService.getBreakpointsMap();
    return this._nbThemeService.onMediaQueryChange().pipe(
      map(([, currentBreakpoint]) => currentBreakpoint.width < xl))
      .subscribe((isLessThanXl: boolean) => this.isLessThanXl = isLessThanXl);
  }

  ngOnInit(): void {
    const tok: any = localStorage.getItem('token') ? localStorage.getItem('token')?.split('.') : '';
    this.user = JSON.parse(atob(tok[1]));

    this.superadmin = this.user.user.super_admin;
    this.userRoles = this.user.user.roles.map(
      (r: any) => r.role_id.slug
    );
    if (this.superadmin) this.userRoles.push('superadmin');
    this.filteredMenu = this.filterMenu(this.MENU_ITEMS);

    this.isMobile = this.detectMobileDevice();
  }

  detectMobileDevice(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor;
    // Detecta si el usuario está en un dispositivo móvil (iOS, Android, Windows Phone)
    return /android|iPad|iPhone|iPod|windows phone/i.test(userAgent);
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

  hasRole(roles?: string[]): boolean {

    if (!roles || roles.length === 0) {
      return true;
    }

    return this.userRoles.some(
      role => roles.includes(role)
    );
  }

  filterMenu(items: AppMenuItem[]): AppMenuItem[] {

    return items
      .filter(item => this.hasRole(item.roles))
      .map(item => {

        const filteredChildren = item.children
          ? this.filterMenu(item.children)
          : undefined;

        return {
          ...item,
          children: filteredChildren,
        };
      })
      .filter(item => {

        return item.link ||
          (item.children && item.children.length > 0);
      });
  }
}
