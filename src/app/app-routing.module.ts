import { TesteComponent } from './shared/components/layout/teste/teste.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesasComponent } from './shared/components/layout/despesas/despesas.component';
import { TiposdespesasComponent } from './shared/components/layout/tiposdespesas/tiposdespesas.component';


const routes: Routes = [
  {
    path: 'cadastro-evento',
    loadChildren: () =>
      import('./modules/cadastro-evento/cadastro-evento.module').then(
        (m) => m.CadastroEventoModule
      ),
  },
  {
    path: 'example',
    loadChildren: () =>
      import('./modules/example/example.module').then(
        (m) => m.ExampleModule
      ),
  },
  {
    path: 'ciclo',
    loadChildren: () =>
      import('./modules/ciclo/ciclo.module').then(
        (m) => m.CicloModule
      ),
  },
  {
    path: 'example2',
    loadChildren: () =>
      import('./modules/example2/example2.module').then(
        (m) => m.Example2Module
      ),
  },
  {
    path: 'output-property',
    loadChildren: () =>
      import('./modules/output-property/output-property.module').then(
        (m) => m.OutputPropertyModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(
        (m) => m.HomeModule
      ),
  },

  {
    path: "despesas",
    component: DespesasComponent,
  },
  {
    path: "teste",
    component: TesteComponent,
  },

  {
    path: "tiposdespesas",
    component: TiposdespesasComponent,
  },

  { path: 'input-property',
  loadChildren: () =>
  import('./modules/input-property/input-property.module').then(
    (m) => m.InputPropertyModule
  ),
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



