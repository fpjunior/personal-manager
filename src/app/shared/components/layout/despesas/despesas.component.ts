import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../breadcrumbs/breadcrumbs.service';


@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent implements OnInit {

  breadcrumbItems: MenuItem[] = [{ label: `Despesas`}]

  constructor(
    private breadcrumbService: BreadcrumbService,
    ) { }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);

  }

}
