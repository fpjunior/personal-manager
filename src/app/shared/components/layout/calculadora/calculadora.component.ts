import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
   value1: number;
   value2: number;
  operacao: string = "";
  valueInput1: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  changeValue(operator: string) {
    switch (operator) {
      case '+':
        this.valueInput1 = this.value1 + this.value2;
        this.operacao = "Soma";
        break;
      case '-':
        this.valueInput1 = this.value1 - this.value2;
        this.operacao = "Subtração";
        break;
      case '*':
        this.valueInput1 = this.value1 * this.value2;
        this.operacao = "Multiplicação";
        break;
      case '/':
        this.valueInput1 = this.value1 / this.value2;
        this.operacao = "Divisão";
        break;
      default:
        break;
    }
  }

  zeroValue(input: string) {
    if (input == "limpar") {
      this.valueInput1 = 0;
      this.value1 = 0;
      this.value2 = 0;
    }
  }
}
