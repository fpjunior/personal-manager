import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example/example.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ExampleComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    CheckboxModule,
    SharedModule,

  ]
})
export class ExampleModule { }
