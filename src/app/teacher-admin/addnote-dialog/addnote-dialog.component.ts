import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addnote-dialog',
  templateUrl: './addnote-dialog.component.html',
  styleUrl: './addnote-dialog.component.css'
})
export class AddnoteDialogComponent {
  noteContent: string = '';
  display: boolean = true; // Add this property to control the dialog visibility

  constructor(public dialogRef: MatDialogRef<AddnoteDialogComponent>) {}

  onSave(): void {
    console.log('Note Saved:', this.noteContent);
    this.dialogRef.close(this.noteContent); // You can pass the note content back when the dialog is closed
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without returning data
  }
  
}
