import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CicloComponent } from './ciclo/ciclo.component';
import { CicloRoutingModule } from './ciclo-routing.module';


@NgModule({
    declarations: [CicloComponent],
    imports: [
        CommonModule,
        SharedModule,
        CicloRoutingModule,
    ]
})

export class CicloModule { }