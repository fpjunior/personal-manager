import { EventEmitter, Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable()
export class BreadcrumbService {
  items: MenuItem[] = [];

  public breadcrumbChanged: EventEmitter<MenuItem[]> = new EventEmitter<MenuItem[]>();

  getBreadcrumb(): MenuItem[] {
    return this.items;
  }

  setBreadcrumb(breadcrumb: MenuItem[]): void {
    this.items = breadcrumb;
    this.breadcrumbChanged.next(this.items);
  }

}