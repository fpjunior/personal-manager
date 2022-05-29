import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { PortalUser } from 'src/app/core/model/portal-user';
import { USER } from '../../constants/local-storage-keys';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];
  user: MenuItem[];
  visibleSidebar = false;
  portalUser: PortalUser;
  showModalCalc: boolean = false;

  constructor(private route: Router, private authService: AuthService) {
    this.user = [
      // {
      //   label: 'Perfil',
      //   icon: 'fas fa-user-circle fa-lg:1em',
      //   command: () => {
      //     this.router.navigate(['/usuarios/perfil-usuarios/listar-perfil']);
      //   }
      // },
      {
        label: 'Sair',
        icon: 'fas fa-sign-out-alt fa-lg:1em',
        command: () => {
          this.authService.logout();
          window.location.href = this.portalUser.baseUrl;
        },
      },
    ];
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem(USER));
    this.portalUser = user;
    this.initMenu();
  }

  showModalSelectColumns() {
    this.showModalCalc = true;
  }

  onHideDialogTable(): void {

  }

  usuario(): void {}

  private initMenu = (): MenuItem[] =>
    (this.items = [
      {
        label: 'Contatos',
        icon: 'fa fa-address-book',
        command: () => {
          this.visibleSidebar = false;
          this.route.navigate(['example']);
        },
      },
      {
        label: 'Chamar Example2',
        icon: 'fas fa-exchange-alt fa-lg:1em',
        items: [
          {
            style: { 'margin-left': '0px' },
            label: 'Example2',
            icon: 'fas fa-file-invoice-dollar fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate([
                '/example2',
              ]);
            },
          },
          {
            style: { 'margin-left': '0px' },
            label: 'Sem Rota',
            icon: 'fas fa-file-invoice-dollar fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate([
                '',
              ]);
            },
          },
          { separator: true },
        ],
      },
      {
        label: 'Despesas',
        icon: 'fas fa-list-ul fa-lg:1em',
        disabled: false,
        command: () => {
          this.visibleSidebar = false;
          this.route.navigate(['despesas']);
        },
      },

      {
        label: 'Tipos Despesas',
        icon: 'fas fa-list-ul fa-lg:1em',
        disabled: false,
        command: () => {
          this.visibleSidebar = false;
          this.route.navigate(['tiposdespesas']);
        },
      },
      {
        label: 'Calculadora',
        icon: 'fas fa-list-ul fa-lg:1em',
        disabled: false,
        command: () => {
          this.visibleSidebar = false;
          this.route.navigate(['calculadora']);
        },
      },

      {
        label: 'Home',
        icon: 'fas fa-map-marked-alt fa-lg:1em',
        command: () => {
          this.visibleSidebar = false;
          this.route.navigate(['/home']);
        },
      },
      {
        label: 'Ciclo',
        icon: 'fas fa-map-marked-alt fa-lg:1em',
        command: () => {
          this.visibleSidebar = false;
          this.route.navigate(['/ciclo']);
        },
      },
      {
        label: 'Teste',
        icon: 'fas fa-map-marked-alt fa-lg:1em',
        command: () => {
          this.visibleSidebar = false;
          this.route.navigate(['/teste']);
        },
      },
      {
        label: 'Main Page',
        icon: 'fas fa-cogs fa-lg:1em',
        disabled: false,
        items: [
          {
            style: { 'margin-left': '0px' },
            label: 'Chamar Main Page',
            icon: 'fas fa-file-invoice fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate(['/main-page']);
            },
          },
          {
            style: { 'margin-left': '0px' },
            label: 'Sem Rota',
            icon: 'fas fa-calendar-minus fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate(['']);
            },
          },
          {
            style: { 'margin-left': '0px' },
            label: 'Input Property',
            icon: 'fas fa-file-export fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate(['input-property']);
            },
          },
          {
            style: { 'margin-left': '0px' },
            label: `Output Property`,
            icon: 'fas fa-clipboard-list fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate(['output-property']);
            },
          },
          { separator: true },
        ],
      },

      {
        label: 'Cadastro de Evento',
        icon: 'fas fa-cogs fa-lg:1em',
        disabled: false,
        items: [
          {
            style: { 'margin-left': '0px' },
            label: 'Cadastrar Eventos',
            icon: 'fas fa-list-ul fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate(['/cadastro-evento']);
            },
          },
          { separator: true },
        ],
      },

    ]);

}
