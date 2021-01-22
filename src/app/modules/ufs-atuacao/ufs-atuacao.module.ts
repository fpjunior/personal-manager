import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { UfsAtuacaoComponent } from './ufs-atuacao/ufs-atuacao.component';
import { UfsAtuacaoRoutingModule } from './ufs-atuacao-routing.module';

@NgModule({
  declarations: [UfsAtuacaoComponent],
  imports: [
    CommonModule,
    SharedModule,
    UfsAtuacaoRoutingModule,
  ]
})
export class UfsAtuacaoModule { }
