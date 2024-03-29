import { Component, OnInit } from "@angular/core";
import { DespesaService } from "../despesas/service/despesas.service";
import { ReceitaService } from "../receitas/service/receitas.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  date1: Date;
  es: any;
  dateValue = new Date();
  months;
  mesAtual;
  totalDespesas;
  sumDespesas;
  sumReceipts: any;
  totalReceipts: any;

  dropdownOptionsMonth = [
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

  constructor(
    private _despesaService: DespesaService,
    private _receiptsService: ReceitaService,
    ) {}

  ngOnInit() {
    this.getActualMonth();
    this._getAllExpense();
    this.verifyMonth();
    this._getAllReceipts()
  }

  onDateChanged(event: any) {
    this.dateValue = event.date;
  }

  getActualMonth() {

    this.months = this.dropdownOptionsMonth.filter(month => {
      return month.value == (this.dateValue.getMonth() + 1).toString();
    }
    );

   this.mesAtual = this.months[0].label;
    console.log(this.mesAtual);
    return this.dateValue.getMonth() + 1;
  }

  private _getAllExpense() {
    // this._progressBarService.changeProgressBar(true);
    // this.isLoading = true;
    this._despesaService.getAllExpense().subscribe(
      (categorias: any) => {
        // this.dataToFillTable = Object.entries(contact).map(e=> e[1]);
        this.totalDespesas = Object.entries(categorias).map((e: any) => {
          e[1].code = e[0];
          return e[1];
        })
        this.totalDespesas.filter(e=>
          e.expenseDate.split('/')[1].toString().includes((this.dateValue.getMonth() +1)).toString()
      )

      this.sumDespesas = this.totalDespesas.reduce((acc, curr) => {
        return acc + curr.value;
      }
      , 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

        // .filter((e)=> e.user == 'fpsjunior87')
        // this.isLoading = false;
        // this._progressBarService.changeProgressBar(false);
      },
      (error) => {
        // this._handleError(error);
        // this.isLoading = false;
        // this._handleError(error);
        // this._progressBarService.changeProgressBar(false);
      }
    );
  }

  private _getAllReceipts() {
    // this._progressBarService.changeProgressBar(true);
    // this.isLoading = true;
    this._receiptsService.getAllReceitas().subscribe(
      (categorias: any) => {
        // this.dataToFillTable = Object.entries(contact).map(e=> e[1]);
        this.totalReceipts = Object.entries(categorias).map((e: any) => {
          e[1].code = e[0];
          return e[1];
        })
        this.totalReceipts.filter(e=>
          e.expenseDate.split('/')[1].toString().includes((this.dateValue.getMonth() +1)).toString()
      )

      this.sumReceipts = this.totalReceipts.reduce((acc, curr) => {
        return acc + curr.value;
      }
      , 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

        // .filter((e)=> e.user == 'fpsjunior87')
        // this.isLoading = false;
        // this._progressBarService.changeProgressBar(false);
      },
      (error) => {
        // this._handleError(error);
        // this.isLoading = false;
        // this._handleError(error);
        // this._progressBarService.changeProgressBar(false);
      }
    );
  }

  verifyMonth() {
   let date = '23/08/2022'

   let teste = date.split('/').map(Number);


  }

}
