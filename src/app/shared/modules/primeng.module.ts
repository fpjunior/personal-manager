import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { StepsModule } from 'primeng/steps';
import { InputMaskModule } from 'primeng/inputmask';
import { TooltipModule } from 'primeng/tooltip';
import { ColorPickerModule } from 'primeng/colorpicker';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { KeyFilterModule } from 'primeng/keyfilter';

@NgModule({
  exports: [
    CardModule,
    MenubarModule,
    ProgressSpinnerModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    CardModule,
    SplitButtonModule,
    PanelMenuModule,
    ProgressBarModule,
    DropdownModule,
    InputNumberModule,
    PickListModule,
    BreadcrumbModule,
    DialogModule,
    ChartModule,
    CheckboxModule,
    InputTextModule,
    StepsModule,
    InputMaskModule,
    TooltipModule,
    ColorPickerModule,
    MultiSelectModule,
    CalendarModule,
    KeyFilterModule
  ]
})
export class PrimengModule { }
