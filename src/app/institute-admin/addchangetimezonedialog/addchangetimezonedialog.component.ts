import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addchangetimezonedialog',
  templateUrl: './addchangetimezonedialog.component.html',
  styleUrl: './addchangetimezonedialog.component.css'
})
export class AddchangetimezonedialogComponent {
  constructor(public dialogRef: MatDialogRef<AddchangetimezonedialogComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  selectedCountry: any;

  changeLanguage() {
    // Add logic to enroll the student
    console.log({
      selectedUser: this.selectedCountry,
    });
  }

  countries = [
    { name: 'Canada (GMT -6:00)' },
    { name: 'Bangladesh (GMT +6:00)' },
    { name: 'Bangkok (GMT +7:00)' },
    { name: 'Hong Kong (GMT +8:00)' },
    { name: 'New Delhi (GMT +5:30)' },
    { name: 'Australia (GMT +10:00)' },
  ];

  selectedLanguage: any = null;

}

