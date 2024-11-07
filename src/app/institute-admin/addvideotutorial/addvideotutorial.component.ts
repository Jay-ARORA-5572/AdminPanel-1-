import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addvideotutorial',
  templateUrl: './addvideotutorial.component.html',
  styleUrl: './addvideotutorial.component.css'
})
export class AddvideotutorialComponent {

  constructor(public dialogRef: MatDialogRef<AddvideotutorialComponent>) {}

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
