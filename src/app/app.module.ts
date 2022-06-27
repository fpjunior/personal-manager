import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./auth/auth.guard";
import { AuthModule, SampleGuard } from "./auth/auth.module";
import { LoginService } from "./auth/login/service/login.service";
import { AuthService } from "./auth/service/auth.service";
import { CoreModule } from "./core/core.module";
import { authInterceptorProvider } from "./core/interceptors/auth.interceptor";
import { BreadcrumbService } from "./shared/components/breadcrumbs/breadcrumbs.service";
import { ProgressBarService } from "./shared/components/progress-bar/progress-bar.service";
import { SharedModule } from "./shared/shared.module";
import { ContasComponent } from './pages/contas/contas.component';


@NgModule({
  declarations: [AppComponent, ContasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    AuthModule,
    CoreModule,
    ConfirmDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    BreadcrumbService,
    authInterceptorProvider,
    ProgressBarService,
    // AuthGuard,
    AngularFireModule,
    AngularFireAuth,
    LoginService,
    SampleGuard,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}



