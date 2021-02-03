import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../breadcrumbs/breadcrumbs.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-evento-dashboard',
  templateUrl: './evento-dashboard.component.html',
  styleUrls: ['./evento-dashboard.component.scss']
})
export class EventoDashboardComponent implements OnInit {

  breadcrumbItems: MenuItem[] = [{ label: `Evento Dashboard` }];

  constructor(
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
  }

}
