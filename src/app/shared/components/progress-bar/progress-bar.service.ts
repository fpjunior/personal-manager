import { EventEmitter, Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class ProgressBarService {
  public progressBarChanged = new EventEmitter<boolean>(false);

  changeProgressBar(isActive: boolean): void {
    this.progressBarChanged.next(isActive);
  }
}
