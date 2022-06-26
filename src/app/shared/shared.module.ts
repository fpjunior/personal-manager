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
import { ButtonModule } from "primeng/button";
import { Example2FormComponent } from "./components/example2/example2-form/example2-form.component";
import { StepsComponent } from "./components/steps/steps.component";
import { PicklistComponent } from "./components/fields/picklist/picklist.component";
import { DialogPicklistComponent } from "./components/dialogs/dialog-picklist/dialog-picklist.component";
import { GenericButtonsComponent } from "./components/buttons/generic-buttons/generic-buttons.component";
import { InfoFieldErrorMessageComponent } from "./components/fields/info-field-error-message/info-field-error-message.component";
import { InputTextComponent } from "./components/fields/input-text/input-text.component";
import { DespesasComponent } from '../pages/despesas/despesas.component';
import { InputDropdownComponent } from './components/fields/input-dropdown/input-dropdown.component';
import { InputMaskComponent } from './components/fields/input-mask/input-mask.component';
import { HomeComponent } from '../pages/home/home.component';
import UsuariosComponent from '../pages/usuarios/usuarios.component';
import { TiposdespesasComponent } from '../pages/tiposdespesas/tiposdespesas.component';
import { CalculatorComponent } from './components/calculator/calculator.component';


@NgModule({
  declarations: [
    ExamplePipe,
    HeaderComponent,
    BreadcrumbsComponent,
    SpinnerComponent,
    ExampleDirective,
    ProgressBarComponent,
    Example2FormComponent,
    InfoFieldErrorMessageComponent,

    // CORE
    StepsComponent,

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

    // PAGES
    HomeComponent,
    UsuariosComponent,
    TiposdespesasComponent,
    DespesasComponent,
    CalculatorComponent,
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
    HomeComponent,
    UsuariosComponent,
    TiposdespesasComponent,
    DespesasComponent,
    CalculatorComponent,
  ],
  entryComponents: [],
  providers: [PrimengModule, ReactiveFormsModule],
})
export class SharedModule {}
