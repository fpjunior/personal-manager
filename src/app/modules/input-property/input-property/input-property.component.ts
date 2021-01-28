import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss'],
  inputs: ['nomeProfessor', ]
})
export class InputPropertyComponent implements OnInit {

@Input() nome: string = '';

nomeProfessor: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
