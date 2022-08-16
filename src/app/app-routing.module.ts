import { ContasComponent } from './pages/contas/contas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { HomeComponent } from './pages/home/home.component';
import { ReceitasComponent } from './pages/receitas/receitas.component';
import UsuariosComponent from './pages/usuarios/usuarios.component';
import { CategoriasComponent } from './pages/tiposdespesas/categorias.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
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
    path: "categorias",
    canActivate: [AuthGuard],
    component: CategoriasComponent,
    },
  {
    path: "home",
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
  {
    path: "contas",
    canActivate: [AuthGuard],
    component: ContasComponent,
  },
  {
    path: "receitas",
    canActivate: [AuthGuard],
    component: ReceitasComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



