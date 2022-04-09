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

  valueInput1: number = 0;
  valueInput2: number = 0;
  valueInput3: number = 0;
  valueInput4: number = 0;


  contacts = [
    {name:'Breno', idade: '19', cpf:'12345678901', email:'breno@gmail.com'},
    {name:'Fernando', idade: '20', cpf:'12345678902', email:'fernando@gmail.com' },
    {name:'Ivson', idade: '21', cpf:'12345678903', email:'ivson@gmail.com'},
    {name:'Thiago', idade: '22', cpf:'12345678904', email:'thiago@gmail.com'},

  ]


  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  breadcrumbItems: MenuItem[] = [{ label: `Contatos`}]

  constructor(
    private breadcrumbService: BreadcrumbService,

  ) { }

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
  }

  changeValue(valueToChange: number, operator:string) {
  //bloco dos botões de incremento
    if(operator === '+'){
      if(valueToChange === 1){
        this.valueInput1 = this.valueInput1 + valueToChange;
      }
      if(valueToChange === 2){
        this.valueInput2 = this.valueInput2 + valueToChange;
      }
      if(valueToChange === 4){
        this.valueInput3 = this.valueInput3 + valueToChange;
      }
      if(valueToChange === 10){
        this.valueInput4 = this.valueInput4 + valueToChange;
      }
    }
    //bloco dos botões de decremento
    if(operator === '-'){
      if(valueToChange === 1){
          this.valueInput1 = this.valueInput1 - valueToChange;
      }
      if(valueToChange === 2){
        this.valueInput2 = this.valueInput2 - valueToChange;
      }
      if(valueToChange === 4){
        this.valueInput3 = this.valueInput3 - valueToChange;
      }
      if(valueToChange === 10){
        this.valueInput4 = this.valueInput4 - valueToChange;
      }
      }

    }
    zeroValue(input:string){
      if(input === 'input1'){
        this.valueInput1 = 0;
      }
      if(input === 'input2'){
        this.valueInput2 = 0;
      }
      if(input === 'input3'){
        this.valueInput3 = 0;
      }
      if(input === 'input4'){
        this.valueInput4 = 0;
      }
    }
  }


