import { HomeComponent } from './modules/home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example3Component } from './modules/example3/example3.component';
import { MainPageComponent } from './modules/main-page/main-page/main-page.component';
import { InputPropertyComponent } from './modules/input-property/input-property/input-property.component';
import { Example2Component } from './modules/example2/example2/example2.component';


const routes: Routes = [
  {path: 'example2', component: Example2Component},
  {path: 'example3', component: Example3Component},
  {path: 'home', component: HomeComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'input-property', component: InputPropertyComponent},
  {
    path: '', 
    loadChildren: () => import('./modules/example/example.module').then(m => m.ExampleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
