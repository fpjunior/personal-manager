import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../breadcrumbs/breadcrumbs.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit() {
  }

}
