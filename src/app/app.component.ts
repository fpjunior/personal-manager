import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from './shared/components/breadcrumbs/breadcrumbs.service';
import { Router } from '@angular/router';
import { UserService } from './core/services/user/user.service';
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
  ) {}

  ngOnInit() {
    // this.breadcrumbItems.push({ label: `Gerência` });
    // this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
  }

  private configPrimeNG():void {
    this.config.setTranslation(ptbr);
    this.config.ripple = true;
  }

  
}
