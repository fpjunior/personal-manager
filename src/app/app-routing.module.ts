import { RoleGuard } from './core/guards/role.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './error/access-denied/access-denied.component';
import { AuthGuard } from './core/guards/auth.guard';
import { Example2Component } from './modules/example2/example2/example2.component';
import { HomeComponent } from './modules/home/home/home.component';
import { MainPageComponent } from './modules/main-page/main-page/main-page.component';
import { InputPropertyComponent } from './modules/input-property/input-property/input-property.component';
import { OutputPropertyComponent } from './modules/output-property/output-property.component';
import { CadastroEventoComponent } from './modules/cadastro-evento/cadastro-evento/cadastro-evento.component';


const routes: Routes = [
  // {path: 'example2', component: Example2Component},
  // {path: 'example3', component: Example2Component},
  // {path: 'home', component: HomeComponent},
  // {path: 'main-page', component: MainPageComponent},
  // {path: 'input-property', component: InputPropertyComponent},
  // {path: 'output-property', component: OutputPropertyComponent},
  // {path: 'cadastro-evento', component: CadastroEventoComponent},
  {
    path: '', 
    loadChildren: () => import('./modules/example/example.module').then(m => m.ExampleModule)
  },
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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }



