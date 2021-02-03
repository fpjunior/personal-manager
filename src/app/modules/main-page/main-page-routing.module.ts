import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [

{
    path:'',
    component: MainPageComponent,
    children: [
        { path: '', redirectTo: 'home'},
        {
            path: 'cadastro-evento',
            loadChildren: () =>
              import('../cadastro-evento/cadastro-evento.module').then(
                (m) => m.CadastroEventoModule
              ),
          },
          {
            path: 'output-property',
            loadChildren: () =>
              import('../output-property/output-property.module').then(
                (m) => m.OutputPropertyModule
              ),
          },
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainPageRoutingModule{}