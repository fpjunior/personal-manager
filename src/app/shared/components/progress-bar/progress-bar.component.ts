import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  isLoading!: boolean;
  body = document.body as HTMLElement;
  @ViewChild('progressbarContainer') progressbarContainer!: ElementRef;

  constructor(private progressBarService: ProgressBarService, private renderer2: Renderer2) {
    this.progressBarService.progressBarChanged.subscribe((isActive: boolean) => {
      this.isLoading = isActive;
      isActive ? this.body.style.overflow = "hidden" : this.body.style.overflow = "auto";

      setTimeout(() => this.manageProgressBarContainer(), 200);
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isLoading) {
      this.manageProgressBarContainer();
    }
  }

  manageProgressBarContainer(): void {
    window.pageYOffset > 51 ?
      document.getElementById('progressbar')?.classList.add('sticky-loading') : document.getElementById('progressbar')?.classList.remove('sticky-loading')
    // window.pageXOffset > 51 ?
    //   this.renderer2.addClass(this.progressbarContainer.nativeElement, 'sticky-loading') :
    //   this.renderer2.removeClass(this.progressbarContainer.nativeElement, 'sticky-loading');
  }
}
