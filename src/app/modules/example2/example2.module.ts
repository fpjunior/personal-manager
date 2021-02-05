import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { Example2RoutingModule } from './example2-routing.module';
import { Example2Component } from './example2/example2.component';

@NgModule({
    declarations: [Example2Component],
    imports: [
        CommonModule,
        SharedModule,
        Example2RoutingModule,
    ]
})

export class Example2Module {}