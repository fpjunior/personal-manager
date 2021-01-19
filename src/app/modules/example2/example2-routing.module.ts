import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exampe2DashboardComponent } from 'src/app/shared/components/example2/exampe2-dashboard/exampe2-dashboard.component';

import { Example2FormComponent } from './../../shared/components/example2/example2-form/example2-form.component';
import { Example2Component } from './example2/example2.component';

const routes: Routes = [
    {
        path: '',
        component: Example2Component,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', component: Exampe2DashboardComponent },
            { path: 'cadastrar', component: Example2FormComponent },
            { path: 'editar/id', component: Example2FormComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Example2RoutingModule { }