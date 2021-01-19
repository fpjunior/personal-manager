import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPropertyComponent } from './input-property/input-property.component';

const routes: Routes = [
    {
        path: '',
        component: InputPropertyComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InputPropertyRoutingModule {}