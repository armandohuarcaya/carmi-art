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
        {
          title: "Ventas rápidas",
          icon: "sync-outline",
          link: "/pages/settings/sales",
          pathMatch: "prefix",
        },
      ],
    },
    {
      title: "Relaciones",
      icon: "settings-outline",
      link: "/pages/relations",
      pathMatch: "prefix",
      children: [
        {
          title: "Unir",
          icon: "sync-outline",
          link: "/pages/relations/union",
          pathMatch: "prefix",
        },
      ],
    },
  ];
  constructor(private router: Router, private _nbSidebarService: NbSidebarService, private _breakpointService: NbMediaBreakpointsService,
    private _nbThemeService: NbThemeService) { }

  onLessThanXl(): Subscription {
    const {xl} = this._breakpointService.getBreakpointsMap();
    return this._nbThemeService.onMediaQueryChange().pipe(
      map(([, currentBreakpoint]) => currentBreakpoint.width < xl))
      .subscribe((isLessThanXl: boolean) => this.isLessThanXl = isLessThanXl);
  }
  
  ngOnInit(): void {
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
