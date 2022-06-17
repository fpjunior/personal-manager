import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input() isLoged;


  constructor(private loginService: LoginService) { }

  logOn(mail, password) {
    this.loginService.login(mail, password);
    this.isLoged = true
  }

}
