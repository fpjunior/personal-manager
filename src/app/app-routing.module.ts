import { OutputPropertyModule } from './modules/output-property/output-property.module';
import { RoleGuard } from './core/guards/role.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './error/access-denied/access-denied.component';
import { AuthGuard } from './core/guards/auth.guard';
import { Example2Component } from './modules/example2/example2/example2.component';
import { HomeComponent } from './modules/home/home/home.component';
import { MainPageComponent } from './modules/main-page/main-page/main-page.component';
import { InputPropertyComponent } from './modules/input-property/input-property/input-property.component';
import { CadastroEventoComponent } from './modules/cadastro-evento/cadastro-evento/cadastro-evento.component';


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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



