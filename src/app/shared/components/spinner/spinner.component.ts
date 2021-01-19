import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input('isLoading') isLoading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
