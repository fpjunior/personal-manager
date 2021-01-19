import { EventEmitter, Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  items: MenuItem[] = [];

  public breadcrumbsChanged: EventEmitter<MenuItem[]> = new EventEmitter<MenuItem[]>();

  getBreadcrumb(): MenuItem[] {
    return this.items;
  }

  setBreadcrumb(breadcrumb: MenuItem[]): void {
    this.items = breadcrumb;
    this.breadcrumbsChanged.next(this.items);
  } 

  constructor() { }

}
