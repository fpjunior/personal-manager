import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { OutputPropertyRoutingModule } from './output-property-routing.module';
import { OutputPropertyComponent } from './output-property/output-property.component';


@NgModule({
    declarations: [OutputPropertyComponent],
    imports: [
        CommonModule,
        SharedModule,
        OutputPropertyRoutingModule,
    ]
})

export class OutputPropertyModule { }