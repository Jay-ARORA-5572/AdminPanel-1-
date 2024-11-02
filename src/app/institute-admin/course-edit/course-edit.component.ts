import { Component } from '@angular/core';

import { MessageService } from 'primeng/api';
import { SharedService } from '../shared.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrl: './course-edit.component.css'
})
export class CourseEditComponent {

  date: Date | undefined;

  value: string | undefined;
  constructor(private messageService: MessageService,private sharedService:SharedService,public dialogRef: MatDialogRef<CourseEditComponent>){}

  categories = [
    { label: 'Web Development', value: 'web-dev' },
    { label: 'Mobile Development', value: 'mobile-dev' },
    { label: 'Data Science', value: 'data-science' }
  ];
  
  difficulties = [
    { label: 'Beginners', value: 'beginners' },
    { label: 'Intermediate', value: 'intermediate' },
    { label: 'Advanced', value: 'advanced' }
  ];


  
 
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
