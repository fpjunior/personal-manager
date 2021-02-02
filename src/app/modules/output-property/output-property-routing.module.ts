import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { OutputPropertyDashboardComponent } from 'src/app/shared/components/layout/output-property/output-property-dashboard/output-property-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: OutputPropertyComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', component: OutputPropertyDashboardComponent },
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