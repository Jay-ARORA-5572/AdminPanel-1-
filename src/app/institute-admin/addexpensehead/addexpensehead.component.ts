import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addexpensehead',
  templateUrl: './addexpensehead.component.html',
  styleUrl: './addexpensehead.component.css'
})
export class AddexpenseheadComponent {

  constructor(public dialogRef: MatDialogRef<AddexpenseheadComponent>) {}


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
