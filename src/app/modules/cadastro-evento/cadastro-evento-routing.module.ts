import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { EventoDashboardComponent } from 'src/app/shared/components/layout/cadastro-evento/evento-dashboard/evento-dashboard.component';
import { EventoFormComponent } from 'src/app/shared/components/layout/cadastro-evento/evento-form/evento-form.component';

const routes: Routes = [
    {
        path: '',
        component: CadastroEventoComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', component: EventoDashboardComponent },
            { path: 'cadastrar', component: EventoFormComponent },
            { path: '**', redirectTo: 'home' }
          ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CadastroEventoRoutingModule {}