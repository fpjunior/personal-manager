import { Component, OnInit, Input } from '@angular/core';
import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  // @Input('isLoading') isLoading: boolean;
  isLoading: boolean;

  constructor(
    private progressBarService: ProgressBarService) {
    this.progressBarService.progressBarChanged.subscribe(isActive => { this.isLoading = isActive; });
  }

  ngOnInit() {
  }

}
