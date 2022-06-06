import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OutputPropertyComponent } from './output-property/output-property.component';
import ContatoComponent from 'src/app/shared/components/layout/contato/contato.component';

const routes: Routes = [
    {
        path: '',
        component: OutputPropertyComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', component: ContatoComponent },
            // { path: 'cadastrar', component: EventoFormComponent },
            { path: '**', redirectTo: 'home' }
          ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OutputPropertyRoutingModule {}
