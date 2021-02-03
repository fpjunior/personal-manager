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
    // console.log(this.campoValorInput.nativeElement.value);
    // this.valor++
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor })
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--; //aqui foi realizado um decremento através do element DOM pegando através da variável que foi declarada no html
    // this.valor--
    this.mudouValor.emit({ novoValor: this.valor })

  }

}
