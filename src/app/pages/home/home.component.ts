import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  date1: Date;
  es: any;
  //dateValue: Date;
  optionsMonth = [
    { value: '1', label: 'Janeiro' },
    { value: '2', label: 'Fevereiro' },
    { value: '3', label: 'Março' },
    { value: '4', label: 'Abril' },
    { value: '5', label: 'Maio' },
    { value: '6', label: 'Junho' },
    { value: '7', label: 'Julho' },
    { value: '8', label: 'Agosto' },
    { value: '9', label: 'Setembro' },
    { value: '10', label: 'Outubro' },
    { value: '11', label: 'Novembro' },
    { value: '12', label: 'Dezembro' }
  ]

  mesAtual;
  months;
  dateValue = new Date();



  constructor() {
  }

  ngOnInit() {
    this.getActualMonth();

  }

  getActualMonth() {
    this.months = this.optionsMonth.filter(month => {
      return month.value == (this.dateValue.getMonth() + 1).toString();
    });
    this.mesAtual = this.months[0].label; console.log(this.mesAtual); return this.dateValue.getMonth() + 1;
  }
}

