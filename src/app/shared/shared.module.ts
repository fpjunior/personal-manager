import { EventoDashboardComponent } from './components/layout/cadastro-evento/evento-dashboard/evento-dashboard.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TableDashboardComponent } from './components/tables/table-dashboard/table-dashboard.component';
import { TableGerenciaComponent } from './components/tables/table-gerencia/table-gerencia.component';
import { ExampleDirective } from './directives/example.directive';
import { PrimengModule } from './modules/primeng.module';
import { ExamplePipe } from './pipes/example.pipe';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';
import { CardServicoAbertoComponent } from './components/widgets/card-servico-aberto/card-servico-aberto.component';
import { CardVariacaoPrecoComponent } from './components/widgets/card-variacao-preco/card-variacao-preco.component';
import { ExampleDashboardComponent } from './components/layout/example/example-dashboard/example-dashboard.component';
import { ExampleFormComponent } from './components/layout/example/example-form/example-form.component';
import { InputPropertyComponent } from '../modules/input-property/input-property/input-property.component';
import {ButtonModule} from 'primeng/button';
import { EventoFormComponent } from './components/layout/cadastro-evento/evento-form/evento-form.component';
import { CicloDashboardComponent } from './components/layout/ciclo/ciclo-dashboard/ciclo-dashboard.component';
import { OutputPropertyDashboardComponent } from './components/layout/output-property/output-property-dashboard/output-property-dashboard.component';


@NgModule({
  declarations: [
    ExamplePipe,
    HeaderComponent,
    BreadcrumbsComponent,
    SpinnerComponent,
    ExampleDirective,
    ProgressBarComponent,
    ExampleDashboardComponent,
    ExampleFormComponent,
    InputPropertyComponent,
    OutputPropertyDashboardComponent,
    EventoDashboardComponent,
    EventoFormComponent,
    CicloDashboardComponent,
    

    // DIALOGS
    ConfirmDialogComponent,

    // CARDS
    CardServicoAbertoComponent,
    CardVariacaoPrecoComponent,

    // TABLES
    TableDashboardComponent,
    TableGerenciaComponent
  ],

  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    
  ],
  exports: [
    PrimengModule,
    HeaderComponent,
    SpinnerComponent,
    FormsModule,
    BreadcrumbsComponent,
    ProgressBarComponent,
    InputPropertyComponent,
    OutputPropertyDashboardComponent,
    EventoDashboardComponent,
    EventoFormComponent,
    CicloDashboardComponent,    

    // DIALOGS
    ConfirmDialogComponent,

    // CARDS
    CardServicoAbertoComponent,
    CardVariacaoPrecoComponent,
    // TABLES
    TableDashboardComponent,
    TableGerenciaComponent
  ],
  entryComponents: [

  ], providers: [
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
