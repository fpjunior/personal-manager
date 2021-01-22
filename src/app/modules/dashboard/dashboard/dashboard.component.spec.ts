import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService, Message, MenuItem} from 'primeng/api';
import { BreadcrumbService } from 'src/app/shared/components/breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class DashboardComponent implements OnInit {

  msgs: Message[] = [];

  position: string;

  teste = false;
  breadcrumbItems: MenuItem[] = [{ label: `Dashboard` }];


  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private breadcrumbService: BreadcrumbService) {
  }

  ngOnInit(): void {
    this.breadcrumbService.setBreadcrumb(this.breadcrumbItems);
  }

  confirmFunction(){
      alert('chegou aqui - CONFIRM')
  }

  cancelFunction(){
    alert('chegou aqui - CANCEL')
}

  confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'mensagem 2'});
        },
        reject: () => {
            this.messageService.add({severity:'info', summary:'Rejected', detail:'You have rejected'});
        }
    });
}

confirm2() {
  this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
      },
      reject: () => {
          this.messageService.add({severity:'info', summary:'Rejected', detail:'You have rejected'});
      }
  });
}

}
