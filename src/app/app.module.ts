import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbLayoutModule, NbSidebarModule, NbButtonModule, NbThemeModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment.dev';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // NbAuthModule.forRoot(strategies),
    // // NbAuthModule.forRoot(
    // //   {
    // //     strategies: [
    // //       NbPasswordAuthStrategy.setup({
    // //         name: 'login',
    // //         baseEndpoint: environment.apiUrls.good,
    // //       }),
    // //     ]
    // //   }
    // // ),
    CoreModule.forRoot({
      strategyName: environment.authStrategy.name,
        apiAuth: environment.apiUrls.art,
        moduleId: environment.module_id,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
