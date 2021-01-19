import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { BreadcrumbsService } from './breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  home: MenuItem = { label: 'Home', routerLink: '/home' };
  breadcrumb: MenuItem[];

  constructor(
    private breadcrumbsService: BreadcrumbsService
  ) {
    this.breadcrumbsService.breadcrumbsChanged.subscribe(breadcrumb => { this.breadcrumb = breadcrumb })
  }

  ngOnInit() {
  }

}
