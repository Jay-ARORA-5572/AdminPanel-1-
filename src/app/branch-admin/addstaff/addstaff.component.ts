import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrl: './addstaff.component.css'
})
export class AddstaffComponent {

  constructor(private messageService: MessageService,public dialogRef: MatDialogRef<AddstaffComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
