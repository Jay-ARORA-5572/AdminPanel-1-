import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-assignmentresultdetails-dialog',
  templateUrl: './assignmentresultdetails-dialog.component.html',
  styleUrl: './assignmentresultdetails-dialog.component.css'
})
export class AssignmentresultdetailsDialogComponent {

  
   // ---------------------------details button ts-------------------
   studentName: string = "karan";
   studentId: string = "22";
   resultDate: string = "17 Jan 2023";
   resultTime: string = "12:40 PM";
   quizDescription: string =
     "Articulate structure of C++ and Java in Semester 1";
   batch: string = "3CO - JVY";
   quizTime: string = "12:40 PM";
   quizDate: string = "17 Jan 2023";
   status: string = "Pass";
   course: string = "B.Tech Specialization in Health Informatics";
   subject: string = "Networking";
 
  
 
  
 
 
 
 
   selectedAnswers: string[] = [];
 
   // Function to select an answer and store it
   selectOption(questionIndex: number, selectedOption: string, isCorrect: boolean) {
     this.selectedAnswers[questionIndex] = selectedOption;
   }
 
   constructor(private messageService: MessageService,public dialogRef: MatDialogRef<AssignmentresultdetailsDialogComponent>) { }
   onCancelClick(): void {
     this.dialogRef.close();
   }

// ---------------inside content----------------------

   totalMarks: number = 50;
   passingPercentage: number = 70;
   
   instructorAttachments: string[] = [
     'Networking Mid Sem Question Paper.pdf', 'Networking Mid Sem Question Paper.pdf',
     'Networking Mid Sem Question Paper.pdf', 'Networking Mid Sem Question Paper.pdf',
     'Networking Mid Sem Question Paper.pdf', 'Networking Mid Sem Question Paper.pdf',
     'Networking Mid Sem Question Paper.pdf', 'Networking Mid Sem Question Paper.pdf',
     'Networking Mid Sem Question Paper.pdf', 'Networking Mid Sem Question Paper.pdf'
   ];
 
   studentAttachments: string[] = [
     'Networking Mid Sem Question Paper.pdf', 'Networking Mid Sem Question Paper.pdf',
     'Networking Mid Sem Question Paper.pdf', 'Networking Mid Sem Question Paper.pdf',
     'Networking Mid Sem Question Paper.pdf', 'Networking Mid Sem Question Paper.pdf',
     'Networking Mid Sem Question Paper.pdf', 'Networking Mid Sem Question Paper.pdf'
   ];
 
  
 
   ngOnInit(): void {
     // Additional logic or API calls for dynamic content can be added here
   }
 
   downloadFile(fileName: string): void {
     // Implement download logic here
     alert(`Downloading ${fileName}`);
   }
}
