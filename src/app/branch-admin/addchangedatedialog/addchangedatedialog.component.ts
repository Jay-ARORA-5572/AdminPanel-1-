import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addchangedatedialog',
  templateUrl: './addchangedatedialog.component.html',
  styleUrl: './addchangedatedialog.component.css'
})
export class AddchangedatedialogComponent {
  
  constructor(public dialogRef: MatDialogRef<AddchangedatedialogComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  selectedFormat: any;

  changeDateFormat() {
    // Add logic to enroll the student
    console.log({
      selectedUser: this.selectedFormat,
    });
  }

  dateFormats = [
    { format: 'M,D,YYYY', },
    { format: 'D,M,YYYY', },
    { format: 'M,D,YYYY', },
    { format: 'YYYY,M,D', }
   
  ];

  selectedLanguage: any = null;

}