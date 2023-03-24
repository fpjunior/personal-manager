import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }

import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class SampleGuard implements CanActivate {
    canActivate() {
        return false;
    }
}
