import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { CadastroEventoRoutingModule } from './cadastro-evento-routing.module';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';

@NgModule({
    declarations: [CadastroEventoComponent],
    imports: [
        CommonModule,
        SharedModule,
        CadastroEventoRoutingModule,
    ]
})

export class CadastroEventoModule { }