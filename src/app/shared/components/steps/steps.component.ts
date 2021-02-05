import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  @Input() model: MenuItem[];
  @Input() activeIndex: number;
  @Input() readonly: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
