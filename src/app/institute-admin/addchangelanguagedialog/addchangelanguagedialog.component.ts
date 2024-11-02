import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddcoursecategoryComponent } from '../addcoursecategory/addcoursecategory.component';

@Component({
  selector: 'app-addchangelanguagedialog',
  templateUrl: './addchangelanguagedialog.component.html',
  styleUrl: './addchangelanguagedialog.component.css'
})
export class AddchangelanguagedialogComponent {

  constructor(public dialogRef: MatDialogRef<AddchangelanguagedialogComponent>) { }

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
    { name: 'English (United States)', code: 'en-US' },
    { name: 'Bangla', code: 'bn' },
    { name: 'English (United State)', code: 'en-US-duplicate' },
    { name: 'English (United Kingdom)', code: 'en-UK' },
    { name: 'Japanese', code: 'jp' },
    { name: 'Spanish', code: 'es' }
  ];

  selectedLanguage: any = null;

}

