import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ExampleDirective } from './directives/example.directive';
import { PrimengModule } from './modules/primeng.module';
import { ExamplePipe } from './pipes/example.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    ExamplePipe,
    HeaderComponent,
    BreadcrumbsComponent,
    SpinnerComponent,
    ExampleDirective,
    ProgressBarComponent,
  ],

  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PrimengModule,
    HeaderComponent,
    SpinnerComponent,
    FormsModule,
    BreadcrumbsComponent,
    ProgressBarComponent
    

  ],
  entryComponents: [

  ], providers: [
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
