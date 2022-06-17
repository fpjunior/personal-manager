import { DialogTableColumnComponent } from './components/dialogs/dialog-table-column/dialog-table-column.component';
import { GenericResponseDialogComponent } from "./components/dialogs/generic-response-dialog/generic-response-dialog.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BreadcrumbsComponent } from "./components/breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./components/header/header.component";
import { ProgressBarComponent } from "./components/progress-bar/progress-bar.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { TableDashboardComponent } from "./components/tables/table-dashboard/table-dashboard.component";
import { TableGerenciaComponent } from "./components/tables/table-gerencia/table-gerencia.component";
import { ExampleDirective } from "./directives/example.directive";
import { PrimengModule } from "./modules/primeng.module";
import { ExamplePipe } from "./pipes/example.pipe";
import { ConfirmDialogComponent } from "./components/dialogs/confirm-dialog/confirm-dialog.component";
import { CardServicoAbertoComponent } from "./components/widgets/card-servico-aberto/card-servico-aberto.component";
import { CardVariacaoPrecoComponent } from "./components/widgets/card-variacao-preco/card-variacao-preco.component";
import { ExampleDashboardComponent } from "./components/layout/example/example-dashboard/example-dashboard.component";
import { ExampleFormComponent } from "./components/layout/example/example-form/example-form.component";
import { ButtonModule } from "primeng/button";
import { Example2FormComponent } from "./components/example2/example2-form/example2-form.component";
import { StepsComponent } from "./components/steps/steps.component";
import { PicklistComponent } from "./components/fields/picklist/picklist.component";
import { DialogPicklistComponent } from "./components/dialogs/dialog-picklist/dialog-picklist.component";
import { GenericButtonsComponent } from "./components/buttons/generic-buttons/generic-buttons.component";
import { InfoFieldErrorMessageComponent } from "./components/fields/info-field-error-message/info-field-error-message.component";
import { InputTextComponent } from "./components/fields/input-text/input-text.component";
import { TiposdespesasComponent } from './components/layout/tiposdespesas/tiposdespesas.component';
import { DespesasComponent } from './components/layout/despesas/despesas.component';
import { InputDropdownComponent } from './components/fields/input-dropdown/input-dropdown.component';
import { InputMaskComponent } from './components/fields/input-mask/input-mask.component';
import UsuariosComponent from './components/layout/usuarios/usuarios.component';
import { HomeComponent } from './components/layout/home/home.component';

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
    Example2FormComponent,
    InfoFieldErrorMessageComponent,
    HomeComponent,
    UsuariosComponent,
    // CORE
    StepsComponent,
    DespesasComponent,

    // DIALOGS
    DialogTableColumnComponent,
    ConfirmDialogComponent,
    DialogPicklistComponent,
    GenericResponseDialogComponent,

    // CARDS
    CardServicoAbertoComponent,
    CardVariacaoPrecoComponent,

    // TABLES
    TableDashboardComponent,
    TableGerenciaComponent,

    //FIELDS
    PicklistComponent,
    InputTextComponent,
    InputDropdownComponent,
    InputMaskComponent,

    // BUTTONS
    GenericButtonsComponent,

    TiposdespesasComponent,

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
    InputMaskComponent,
    PicklistComponent,
    InfoFieldErrorMessageComponent,


    // CORE
    StepsComponent,

    // DIALOGS
    DialogTableColumnComponent,
    ConfirmDialogComponent,
    GenericResponseDialogComponent,

    // CARDS
    CardServicoAbertoComponent,
    CardVariacaoPrecoComponent,
    // TABLES
    TableDashboardComponent,
    TableGerenciaComponent,

    // BUTTONS
    GenericButtonsComponent,

    // FIELDS
    InputTextComponent,
    InputDropdownComponent,


    // PAGES
    TiposdespesasComponent,
    DespesasComponent,
    UsuariosComponent,
    HomeComponent,


  ],
  entryComponents: [],
  providers: [PrimengModule, ReactiveFormsModule],
})
export class SharedModule {}
