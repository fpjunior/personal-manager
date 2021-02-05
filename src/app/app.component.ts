import { Component } from '@angular/core';
import { BreadcrumbService } from './shared/components/breadcrumbs/breadcrumbs.service';
import { Router } from '@angular/router';
import { UserService } from './core/services/user/user.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pesonal-manager';

  filteredBrands: any[];
  product: string;

  breadcrumbItems: MenuItem[] = [];
  display: boolean = true;
  isLoginRoute = false;

  isPermissionDashboard: boolean;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private router: Router,
  ) {}

  ngOnInit() {
    // this.breadcrumbItems.push({ label: `Gerência` });
    // this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
  }

  
}
