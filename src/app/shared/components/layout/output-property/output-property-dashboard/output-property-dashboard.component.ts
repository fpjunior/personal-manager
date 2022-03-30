import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../../breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-output-property-dashboard',
  templateUrl: './output-property-dashboard.component.html',
  styleUrls: ['./output-property-dashboard.component.scss']
})
export class OutputPropertyDashboardComponent implements OnInit {

  @Input() valor: number = 10;
  @Input() valorInicial: number = 10;

  valorAux: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  breadcrumbItems: MenuItem[] = [{ label: `OutPut-Property`}]

  constructor(
    private breadcrumbService: BreadcrumbService,

  ) { }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
  }

  incrementa() {
    this.valorAux = this.valorAux + 1
  }

  decrementa() {
    this.valorAux = this.valorAux -1

  }

}
