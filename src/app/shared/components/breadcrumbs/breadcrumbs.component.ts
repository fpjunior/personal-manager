import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { BreadcrumbService } from './breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {

  home: MenuItem = { label: 'Preço', routerLink: '/home' };
  breadcrumb: MenuItem[];

  constructor(
    private breadcrumbService: BreadcrumbService) {

    this.breadcrumbService.breadcrumbChanged.subscribe(breadcrumb => { this.breadcrumb = breadcrumb })
  }

}
