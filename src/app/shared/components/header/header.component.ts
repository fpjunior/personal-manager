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

  usuario(): void {}

  private initMenu = (): MenuItem[] =>
    (this.items = [
      {
        label: 'Cadastro de Eventos',
        icon: 'fas fa-laptop fa-lg:1em',
        command: () => {
          this.visibleSidebar = false;
          this.route.navigate(['/example']);
        },
      },
      {
        label: 'Associar Eventos',
        icon: 'fas fa-exchange-alt fa-lg:1em',
        items: [
          {
            style: { 'margin-left': '0px' },
            label: 'Sugestão do Preço de Venda',
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
            label: 'Preço de Lista',
            icon: 'fas fa-file-invoice-dollar fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate([
                '/example3',
              ]);
            },
          },
          { separator: true },
        ],
      },
      {
        label: 'Manutenção Preço de Lista',
        icon: 'fas fa-list-ul fa-lg:1em',
        disabled: false,
        command: () => {
          this.visibleSidebar = false;
          this.route.navigate(['']);
        },
      },
      {
        label: 'UFs de Atuação e Aliq de IR',
        icon: 'fas fa-map-marked-alt fa-lg:1em',
        command: () => {
          this.visibleSidebar = false;
          this.route.navigate(['/home']);
        },
      },
      {
        label: 'Motor de Serviço',
        icon: 'fas fa-cogs fa-lg:1em',
        disabled: false,
        items: [
          {
            style: { 'margin-left': '0px' },
            label: 'Configurações do Indicador',
            icon: 'fas fa-file-invoice fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate(['/main-page']);
            },
          },
          {
            style: { 'margin-left': '0px' },
            label: 'Acesso ao Indicador',
            icon: 'fas fa-calendar-minus fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate(['input-property']);
            },
          },
          {
            style: { 'margin-left': '0px' },
            label: 'Direcionamento de OS',
            icon: 'fas fa-file-export fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate(['']);
            },
          },
          {
            style: { 'margin-left': '0px' },
            label: `OS's Pendentes`,
            icon: 'fas fa-clipboard-list fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate(['']);
            },
          },
          { separator: true },
        ],
      },
      {
        label: 'Log de Atualização de Preço',
        icon: 'fas fa-file-invoice fa-lg:1em ',
        disabled: false,
        command: () => {
          this.visibleSidebar = false;
          this.route.navigate(['']);
        },
      },
      {
        label: 'Gerenciar Usuários',
        icon: 'fas fa-users-cog fa-lg:1em',
        items: [
          {
            style: { 'margin-left': '0px' },
            label: 'Perfil',
            icon: 'fas fa-users fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate(['/home/gerencia-usuario/perfil/dashboard']);
            },
          },
          {
            style: { 'margin-left': '0px' },
            label: 'Usuários',
            icon: 'fas fa-user fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate(['/home/gerencia-usuario/usuario/dashboard']);
            },
          },
          { separator: true },
        ],
      },
      {
        label: 'Configurações',
        icon: 'fas fa-cogs fa-lg:1em',
        disabled: false,
        items: [
          {
            style: { 'margin-left': '0px' },
            label: 'Parâmetros Gerais',
            icon: 'fas fa-list-ul fa-lg:1em',
            command: () => {
              this.visibleSidebar = false;
              this.route.navigate(['/home/configuacoes']);
            },
          },
          { separator: true },
        ],
      },
      {
        label: 'Cadastro do Custo de Partida',
        icon: 'fas fa-dollar-sign fa-lg:1em ',
        disabled: false,
        command: () => {
          this.visibleSidebar = false;
          this.route.navigate(['']);
        },
      },
    ]);

}
