import { AngularFireModule } from "@angular/fire";
import { CadastroEventoRoutingModule } from "./modules/cadastro-evento/cadastro-evento-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BreadcrumbService } from "./shared/components/breadcrumbs/breadcrumbs.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { authInterceptorProvider } from "./core/interceptors/auth.interceptor";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ProgressBarService } from "./shared/components/progress-bar/progress-bar.service";
import { environment } from "src/environments/environment";
// import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import {AngularFireDatabaseModule} from '@angular/fire/database'



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    CoreModule,
    ConfirmDialogModule,
    // AngularFirestore,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestoreModule,
    // AngularFireAuthModule,
    // AngularFireDatabaseModule
  ],
  providers: [
    BreadcrumbService,
    authInterceptorProvider,
    ProgressBarService,
    // AngularFireModule,
    // AngularFirestore,
    // AngularFireDatabase,
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    // AngularFirestoreModule,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
