import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { authInterceptorProvider } from './core/interceptors/auth.interceptor';
import { ExampleModule } from './modules/example/example.module';
import { BreadcrumbsService } from './shared/components/breadcrumbs/breadcrumbs.service';
import { SharedModule } from './shared/shared.module';

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
    ExampleModule,
    SharedModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot([]),
    ConfirmDialogModule

  ],

  exports: [
    FormsModule,
  ],

  providers: [BreadcrumbsService, authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
