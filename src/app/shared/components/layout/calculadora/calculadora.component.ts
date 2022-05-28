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
  ResultValue: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  changeValue(operator: string) {
    switch (operator) {
      case '+':
        this.operacao = "Somando...";
        break;
      case '-':
        this.operacao = "Subtraindo...";
        break;
      case '*':
        this.operacao = "Multiplicando...";
        break;
      case '/':
        this.operacao = "Dividindo...";
        break;
      default:
        break;
    }
  }

  zeroValue(input: string) {
    if (input == "limpar") {
      this.value1 = 0;
      this.value2 = 0;
      this.ResultValue = 0;
    }
  }
  resultado(result: string) {
    if (result == "=") {
      switch (this.operacao) {
        case 'Somando...':
          this.ResultValue = this.value1 + this.value2;
          break;
        case 'Subtraindo...':
          this.ResultValue = this.value1 - this.value2;
          break;
        case 'Multiplicando...':
          this.ResultValue = this.value1 * this.value2;
          break;
        case 'Dividindo...':
          this.ResultValue = this.value1 / this.value2;
          break;
        default:
          break;
      }
  }
}
}

