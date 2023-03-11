import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss']
})
export class ParametrosComponent implements OnInit {
  [x: string]: any;

  selectedCities: string[] = [];
  actionButton: string;
  constructor() { }

  ngOnInit() {
  }

  teste(event){
    console.log(event.checked)
  }

  saveParameter(action: string){
    this.actionButton = action;
    this.showCorfirmDialog = true;
    this.msgModalConfirm = "Tem certeza que deseja salva as alterações?";
  }

  cancelParameter(action: string){
    this.actionButton = action;
    this.showCorfirmDialog = true;
    this.msgModalConfirm = "Tem certeza que deseja cancelar as alterações?";
  }

  confirmAction(){
    if (this.actionButton === 'save') {
      this.showCorfirmDialog = false;
      alert("Cadastro salvo com sucesso.");
    } else {
      this.showCorfirmDialog = false;
    }

  }

}
