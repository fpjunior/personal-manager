import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UfsAtuacaoComponent } from './ufs-atuacao/ufs-atuacao.component';
import { UfsAtuacaoDashboardComponent } from 'src/app/shared/components/layout/ufs-atuacao/ufs-atuacao-dashboard/ufs-atuacao-dashboard.component';
import { UfsAtuacaoFormComponent } from 'src/app/shared/components/layout/ufs-atuacao/ufs-atuacao-form/ufs-atuacao-form.component';

const routes: Routes = [
  {
    path: '',
    component: UfsAtuacaoComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: UfsAtuacaoDashboardComponent },
      { path: 'cadastrar', component: UfsAtuacaoFormComponent },
      { path: 'editar/:id', component: UfsAtuacaoFormComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UfsAtuacaoRoutingModule { }
