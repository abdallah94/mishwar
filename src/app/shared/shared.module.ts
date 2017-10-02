import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./components/login/login.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {LoginService} from "./services/login.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
  ],
  providers: [LoginService],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class SharedModule {
}
