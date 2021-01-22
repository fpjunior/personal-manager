import { RoleGuard } from './core/guards/role.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './error/access-denied/access-denied.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'error',
    component: AccessDeniedComponent,
    // canLoad: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
    canLoad: [AuthGuard],
    canActivate: [RoleGuard],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
