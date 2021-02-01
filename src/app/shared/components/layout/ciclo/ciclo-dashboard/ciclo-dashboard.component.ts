import { Component, OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo-dashboard',
  templateUrl: './ciclo-dashboard.component.html',
  styleUrls: ['./ciclo-dashboard.component.scss']
})

// DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
//   AfterViewChecked, OnDestroy
export class CicloDashboardComponent implements OnDestroy, AfterContentChecked, OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, AfterViewInit
   {

   @Input() valorInicialCiclo: number = 10;
   @Input() nomeInicialCiclo: string = 'Fernando';

  constructor() {
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngOnChanges() {
    this.log('ngOnchanges');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentCheck');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
