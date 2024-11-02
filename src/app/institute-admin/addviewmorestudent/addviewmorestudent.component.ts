import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-addviewmorestudent',
  templateUrl: './addviewmorestudent.component.html',
  styleUrl: './addviewmorestudent.component.css'
})
export class AddviewmorestudentComponent {

constructor (public dialogRef: MatDialogRef<StudentComponent>) {}

}
