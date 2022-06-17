import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { ptbr } from './shared/constants/pt-br';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pesonal-manager';
  filteredBrands: any[];
  product: string;
  breadcrumbItems: MenuItem[] = [];
  display: boolean = true;
  isLoginRoute = false;
  isPermissionDashboard: boolean;

  constructor(
    private router: Router,
    private config: PrimeNGConfig
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginRoute = this.router.url === '/login';
      }
    }
    );
  }

  ngOnInit() {
    // this.breadcrumbItems.push({ label: `Gerência` });
    // this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
  }



}
