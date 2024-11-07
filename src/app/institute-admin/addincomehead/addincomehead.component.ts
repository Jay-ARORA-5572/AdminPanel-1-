import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addincomehead',
  templateUrl: './addincomehead.component.html',
  styleUrl: './addincomehead.component.css'
})
export class AddincomeheadComponent {

  constructor(public dialogRef: MatDialogRef<AddincomeheadComponent>) {}

  country: any;
  state: any;

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      const fileName = Array.from(files).map(file => file.name).join(', ');
      const fileNameSpan = document.querySelector('.file-name');
      if (fileNameSpan) {
        fileNameSpan.textContent = fileName;
      }
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
  
}