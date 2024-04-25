import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-not-found',
  template: `
    <div class="container">
      <br>
      <div class="row justify-content-center">
        <div class="col col-xl-6 col-lg-6 col-md-8 col-sm-12">
          <nb-card class="border-0 shadow-sm">
            <nb-card-body class="text-center">
              <h2 class="h2 p-1 m-0">404 Página no encontrada</h2>
              <p>La página que estabas buscando no existe</p>
            </nb-card-body>
            <nb-card-footer class="text-center">
              <button nbButton (click)="goToHome()" type="button" status="primary" shape="semi-round">
                <nb-icon icon="home-outline"></nb-icon>
                Ir a página de inicio
              </button>
            </nb-card-footer>
          </nb-card>
        </div>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {

  constructor(@Inject(DOCUMENT) protected document: any,) {
  }

  goToHome() {
    this.document.location.href = '/';
  }

}
