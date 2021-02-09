import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../../../breadcrumbs/breadcrumbs.service';
import { ProgressBarService } from '../../../progress-bar/progress-bar.service';

@Component({
  selector: 'app-input-property-form',
  templateUrl: './input-property-form.component.html',
  styleUrls: ['./input-property-form.component.scss']
})
export class InputPropertyFormComponent implements OnInit {

  page = 'input-property';
  sourceList: Array<any> = [];
  targetList: Array<any> = [];

  showModalResponse = false;
  isErrorResponse: boolean;
  contentResponse: string;
  showModalConfirm = false;
  exit = false;

  breadcrumbItems: MenuItem[] = [
    { label: `Motor de Serviços`, command: () => this.cancelForm() }, 
    { label: `Configurações` },
    { label: `Acesso aos Indicadores` },

  ];

  constructor(
    private route: Router,
    private breadcrumbService: BreadcrumbService,
    private progressBarService: ProgressBarService,
  ) { }

  ngOnInit() {
  }

  onHide = (): Promise<boolean> => this.exit && this.confirmExit();

  onShow = () => setTimeout(() => { if (!this.isErrorResponse) { this.showModalResponse = false; } }, 1500);

  confirmExit = (): Promise<boolean> => this.route.navigate(['/home/dashboard']);

  cancelForm = (): boolean => this.showModalConfirm = true;

  onHideDialogConfirm = (): boolean => this.showModalConfirm = false;

}
