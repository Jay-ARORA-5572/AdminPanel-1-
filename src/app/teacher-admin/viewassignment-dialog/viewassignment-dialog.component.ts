import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-viewassignment-dialog',
  templateUrl: './viewassignment-dialog.component.html',
  styleUrl: './viewassignment-dialog.component.css'
})
export class ViewassignmentDialogComponent {
  
  constructor(private dialog: MatDialog,private confirmationService: ConfirmationService,private messageService: MessageService) {}

  closeDialog(): void {
    this.dialog.closeAll(); // This will close all open dialogs
  }
  confirm2(event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
        }
    });
}

}
