import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    { path: ':parameter', component: AuthComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
})

export class CoreRoutingModule {}