import { CadastroEventoRoutingModule } from './modules/cadastro-evento/cadastro-evento-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbService } from './shared/components/breadcrumbs/breadcrumbs.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { authInterceptorProvider } from './core/interceptors/auth.interceptor';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProgressBarService } from './shared/components/progress-bar/progress-bar.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
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
  ],
  providers: [BreadcrumbService, authInterceptorProvider, ProgressBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
