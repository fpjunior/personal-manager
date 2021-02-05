import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.scss']
})
export class EventoFormComponent implements OnInit {

  model;
  readonly;
  modelSteps: MenuItem[];
  activeIndex = 0;

  constructor() { }

  ngOnInit() {
    this.initSteps();
  }

  private initSteps = (): MenuItem[] => (
    this.modelSteps = [
      { label: 'UF ATUAÇÃO', command: () => { this.activeIndex = 0; } },
      { label: 'TRIBUTOS', command: () => { this.activeIndex = 1; } }
    ]
  )

}
