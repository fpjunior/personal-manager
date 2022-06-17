import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesasComponent } from './shared/components/layout/despesas/despesas.component';
import { TiposdespesasComponent } from './shared/components/layout/tiposdespesas/tiposdespesas.component';
// import { AuthGuard } from './core/guards/auth.guard';
import { SampleGuard } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import UsuariosComponent from './shared/components/layout/usuarios/usuarios.component';
import { HomeComponent } from './shared/components/layout/home/home.component';

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



