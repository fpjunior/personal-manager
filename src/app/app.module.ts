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
import { ExampleModule } from './modules/example/example.module';
import { InputPropertyComponent } from './modules/input-property/input-property/input-property.component';
import { ExampleComponent } from './modules/example/example/example.component';

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
    ConfirmDialogModule,
  ],
  providers: [BreadcrumbService, authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
