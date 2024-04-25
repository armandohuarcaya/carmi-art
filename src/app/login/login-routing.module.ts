import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { LoginHomeComponent } from "./containers/login-home.component";

const routes: Routes = [
    {
        path: '',
        component: LoginHomeComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule { }
  