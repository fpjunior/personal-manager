import { Component, OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, Input } from '@angular/core';
import { BreadcrumbService } from '../../../breadcrumbs/breadcrumbs.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-ciclo-dashboard',
  templateUrl: './ciclo-dashboard.component.html',
  styleUrls: ['./ciclo-dashboard.component.scss']
})

// DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
//   AfterViewChecked, OnDestroy
export class CicloDashboardComponent implements OnDestroy, AfterContentChecked, OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, AfterViewInit {

  @Input() valorInicialCiclo: number = 10;
  @Input() nomeInicialCiclo: string = 'Fernando';

  breadcrumbItems: MenuItem[] = [{ label: `Ciclo` }];

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) {
    this.log('constructor'); 
  }

  ngOnInit() {
    this.log('ngOnInit'); 
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
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
  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
