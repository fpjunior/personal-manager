import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

isActive: boolean;
public progressBarChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

changeProgressBar(isActive: boolean): void {
  this.isActive = isActive;
  this.progressBarChanged.next(this.isActive);
}
}
