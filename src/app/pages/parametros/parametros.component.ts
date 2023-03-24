import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ParametroService } from './service/parametro.service';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss']
})
export class ParametrosComponent implements OnInit {

  selectedCities: string[] = [];
  valorCheck: boolean;
  parametroForm!: FormGroup;

  constructor(private _parametroService: ParametroService) { }

  ngOnInit() {
    this._getAllExpenseType();
  }


  teste(event) {
    this.valorCheck = event.checked
    console.log(event.checked)
  }

  private _getAllExpenseType() {
    // this.isLoading = true;
    this._parametroService.getAllParametro().subscribe(
      (parametro: any) => {
          this.valorCheck = parametro[1].isAnonimized
        });

      (error) => {
        // this._handleError(error);
        // this._progressBarService.changeProgressBar(false);
      }
  }

  saveParametro(): void {
    const obj = {
      code: 1,
      isAnonimized: this.valorCheck
    }
    this._parametroService.saveOrUpdateDespesa(obj).subscribe(
      (response) => {
        this.parametroForm.reset();
        // this.showDialogDespesa = false;
        // this._sucessResponse("Despesa salva com sucesso");

      },
      (error) => {
        // this._handleError(error);
      }
    );
  }

}
