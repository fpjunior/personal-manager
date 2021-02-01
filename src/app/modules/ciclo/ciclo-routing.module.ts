import { Routes, RouterModule } from '@angular/router';
import { CicloComponent } from './ciclo/ciclo.component';
import { CicloDashboardComponent } from 'src/app/shared/components/layout/ciclo/ciclo-dashboard/ciclo-dashboard.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: CicloComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', component: CicloDashboardComponent },
            // { path: 'cadastrar', component: EventoFormComponent },
            { path: '**', redirectTo: 'home' }
          ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CicloRoutingModule {}