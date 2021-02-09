import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPropertyComponent } from './input-property/input-property.component';
import { InputPropertyDashboardComponent } from 'src/app/shared/components/layout/input-property/input-property-dashboard/input-property-dashboard.component';
import { InputPropertyFormComponent } from 'src/app/shared/components/layout/input-property/input-property-form/input-property-form.component';

const routes: Routes = [
    {
        path: '',
        component: InputPropertyComponent,
        children: [
            {path: '', redirectTo: 'dashboard'},
            {path: 'dashboard', component: InputPropertyDashboardComponent},
            {path: 'cadastrar', component: InputPropertyFormComponent},
            {path: '**', redirectTo: 'home'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InputPropertyRoutingModule {}