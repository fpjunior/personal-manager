import { ExampleComponent } from './example/example.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleDashboardComponent } from 'src/app/shared/components/layout/example/example-dashboard/example-dashboard.component';
import { ExampleFormComponent } from 'src/app/shared/components/layout/example-form/example-form.component';


const routes: Routes = [ 
  {
    path: '', 
    component: ExampleComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: ExampleDashboardComponent },
      { path: 'cadastrar', component: ExampleFormComponent },
      { path: 'editar/:id', component: ExampleFormComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }
