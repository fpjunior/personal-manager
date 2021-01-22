import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from 'src/app/shared/components/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  breadcrumbItems: MenuItem[] = [];

  display: boolean = true
  isLoginRoute = false;

  constructor(private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    this.breadcrumbItems.push({ label: `Gerência` });
    // this.breadcrumbItems.push({ label: `Teste2` });
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
  }

}
