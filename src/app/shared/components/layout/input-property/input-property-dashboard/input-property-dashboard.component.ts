import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../breadcrumbs/breadcrumbs.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-input-property-dashboard',
  templateUrl: './input-property-dashboard.component.html',
  styleUrls: ['./input-property-dashboard.component.scss']
})
export class InputPropertyDashboardComponent implements OnInit {

  breadcrumbItems: MenuItem[] = [{label: 'Input Property'}]

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
  }

  editRegister(): string {
        return '/input-property/cadastrar'
    }
}
