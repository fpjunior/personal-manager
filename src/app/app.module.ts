import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from './shared/components/breadcrumbs/breadcrumbs.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { authInterceptorProvider } from './core/interceptors/auth.interceptor';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    RouterModule.forRoot([]),
    ConfirmDialogModule
    
  ],
  providers: [BreadcrumbService, authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
