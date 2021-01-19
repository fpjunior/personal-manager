import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {

 nomeDoCurso: string = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }

}
