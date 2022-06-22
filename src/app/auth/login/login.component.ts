import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/pages/usuarios/service/usuarios.service";
import { LoginService } from "./service/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  @Input() isLoged;
  objUser: any;

  constructor(
    private loginService: LoginService,
    private _userService: UserService
  ) {}
  ngOnInit(): void {
    this.getAllUsers()
  }

  logOn(mail, password) {

   let usuarioNow = this.objUser.filter((e)=> {
    return e.email.includes(mail)
 })

    this.loginService.login(usuarioNow[0]?.email, password);

    this.isLoged = true;
    sessionStorage.setItem("user", mail);
  }

  criarUsuario(mail, password) {
    this.loginService.criarUsuario(mail, password);
    this.isLoged = true;
    sessionStorage.setItem("user", mail);
  }

  recuperarSenha(mail) {
    this.loginService.recuperarSenha(mail);
  }

  private getAllUsers() {
    this._userService.getAllUsers().subscribe(
      (user: any) => {
        this.objUser = Object.entries(user).map((e: any) => {
          e[1].id = e[0];
          return e[1];
        });
      },
      (error) => {
      }
    );
  }
}
