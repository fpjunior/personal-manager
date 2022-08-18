import { DespesaService } from './../despesas/service/despesas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  date1: Date;
  es: any;
  dateValue: Date;
  totalDespesa: any;

  constructor(private despesaService: DespesaService) {

  }

  ngOnInit() {
    debugger
    this.getAllExpense();
}
private getAllExpense() {
this.despesaService.getAllExpense().subscribe(
  (despesa: any) =>{
    console.log(despesa);

  },
  (error: any) =>{}
)
}
}
