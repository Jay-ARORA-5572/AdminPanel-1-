import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-batchdetails-dialog',
  templateUrl: './view-batchdetails-dialog.component.html',
  styleUrl: './view-batchdetails-dialog.component.css'
})
export class ViewBatchdetailsDialogComponent {
  students: any[] = [
    { name: 'Rahul Sharma', sort: '' },
    { name: 'Rahul Sharma', sort: '' },
    { name: 'Rahul Sharma', sort: '' },
    { name: 'Rahul Sharma', sort: '' },
    { name: 'Rahul Sharma', sort: '' },
    { name: 'Rahul Sharma', sort: '' },
    { name: 'Rahul Sharma', sort: '' },
    { name: 'Rahul Sharma', sort: '' },
    { name: 'Rahul Sharma', sort: '' },
    { name: 'Rahul Sharma', sort: '' },

  ];
  constructor(
    private dialogs: MatDialog
  ) {}

  closeDialog(): void {
    this.dialogs.closeAll(); // This will close all open dialogs
  }

}
