/**
 * Created by Abdallah on 9/30/2017.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RouteConstants} from "./utils/route-constants";
import {LoginComponent} from "./shared/components/login/login.component";


const appRoutes: Routes = [
  {
    path: RouteConstants.ROUTE_LOGIN,
    component: LoginComponent,
  },
  {
    path: '', redirectTo: RouteConstants.ROUTE_LOGIN, pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

