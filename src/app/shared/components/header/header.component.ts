import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PortalUser } from 'src/app/core/model/portal-user';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/user/user.service';
import { USER } from '../../constants/local-storage-keys';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];
  items2!: MenuItem[];
  logout: MenuItem[];
  user: MenuItem[];
  visibleSidebar = false;
  portalUser: PortalUser;
  showModalCalc: boolean = false;
  UserName:string;

  constructor(private route: Router, private authService: AuthService, private userService: UserService,
  ) {
    this.user = [
      {
        label: 'Sair',
        icon: 'fas fa-sign-out-alt fa-lg:1em',
        command: () => {
          this.authService.logout();
        },
      },
    ];
  }

  ngOnInit(): void {
    this.UserName = sessionStorage.getItem('user')
    const user = JSON.parse(localStorage.getItem(USER));
    this.portalUser = user;
    this.initMenu();
  }

  showModalSelectColumns() {
    this.showModalCalc = true;
  }

  onHideDialogTable(): void {

  }

  usuario(): void { }

  private initMenu = (): MenuItem[] =>
  (this.items = [
    {
      label: 'Usuários',
      icon: 'fa fa-address-book',
      command: () => {
        this.visibleSidebar = false;
        this.route.navigate(['usuarios']);
      },
    },

    {
      label: 'Despesas',
      icon: 'fa fa-credit-card fa-lg:1em',
      disabled: false,
      command: () => {
        this.visibleSidebar = false;
        this.route.navigate(['despesas']);
      },
    },

    {
      label: 'Categorias',
      icon: 'fas fa-list-ul fa-lg:1em',
      disabled: false,
      command: () => {
        this.visibleSidebar = false;
        this.route.navigate(['categorias']);
      },
    },
    {
      label: 'Home',
      icon: 'fa fa-address-book',
      command: () => {
        this.visibleSidebar = false;
        this.route.navigate(['home']);
      },
    },    {
      label: 'Contas',
      icon: 'fa fa-address-book',
      command: () => {
        this.visibleSidebar = false;
        this.route.navigate(['contas']);
      },
    },
    {
      label: 'Receitas',
      icon: 'pi  pi-dollar',
      command: () => {
        this.visibleSidebar = false;
        this.route.navigate(['receitas']);
      },
    },
    {
      label: 'Parâmetros',
      icon: 'pi  pi-dollar',
      command: () => {
        this.visibleSidebar = false;
        this.route.navigate(['parametros']);
      },
    },
  ]);
}
