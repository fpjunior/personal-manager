import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { InputPropertyComponent } from './input-property/input-property.component';
import { InputPropertyRoutingModule } from './input-property-routing.module';

@NgModule({
    declarations: [InputPropertyComponent],
    imports: [
        CommonModule,
        SharedModule,
        InputPropertyRoutingModule,
    ]
})

export class InputPropertyModule { }