import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  @Input() valor: number = 10;
  @Input() valorInicial: number = 10;

  valorMaisUm: number = 0;
  valorMaisDois: number = 0;
  valorMaisQuatro: number = 0;
  valorMaisDez: number = 0;




  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  breadcrumbItems: MenuItem[] = [{ label: `Contato`}]

  constructor(
    private breadcrumbService: BreadcrumbService,

  ) { }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
  }

  incrementaMais1() {
    this.valorMaisUm = this.valorMaisUm + 1
  }

  decrementaMais1() {
    this.valorMaisUm = this.valorMaisUm -1

  }

  incrementaMais2() {
    this.valorMaisDois = this.valorMaisDois + 2
  }

  decrementaMais2() {
    this.valorMaisDois = this.valorMaisDois -2

  }

  incrementaMais4() {
    this.valorMaisQuatro = this.valorMaisQuatro + 4
  }

  decrementaMais4() {
    this.valorMaisQuatro = this.valorMaisQuatro - 4

  }

  incrementaMais10() {
    this.valorMaisDez = this.valorMaisDez + 10
  }

  decrementaMais10() {
    this.valorMaisDez = this.valorMaisDez -10

  }

}
