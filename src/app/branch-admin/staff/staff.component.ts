import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddstaffDialogComponent } from '../addstaff-dialog/addstaff-dialog.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {

  constructor(private route: Router, private dialog: MatDialog) { }


  addstaff() {
    const dialogRef = this.dialog.open(AddstaffDialogComponent, {
      width: "60vw",
      height: "65vh",
    });
  }


}
