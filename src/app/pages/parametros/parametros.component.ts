import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss']
})
export class ParametrosComponent implements OnInit {

  selectedCities: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  teste(event){
    console.log(event.checked)
  }

}
