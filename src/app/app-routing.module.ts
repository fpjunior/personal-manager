import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { HomeComponent } from './pages/home/home.component';
import { TiposdespesasComponent } from './pages/tiposdespesas/tiposdespesas.component';
import UsuariosComponent from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    // canActivate: [SampleGuard],
  },

  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent,
  },

  {
    path: "usuarios",
    canActivate: [AuthGuard],
    component: UsuariosComponent,
  },

  {
    path: "despesas",
    canActivate: [AuthGuard],
    component: DespesasComponent,
  },
  {
    path: "tiposdespesas",
    canActivate: [AuthGuard],
    component: TiposdespesasComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



