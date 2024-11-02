import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-examresultdetails-dialog',
  templateUrl: './examresultdetails-dialog.component.html',
  styleUrl: './examresultdetails-dialog.component.css'
})
export class ExamresultdetailsDialogComponent {

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
 
   constructor(private messageService: MessageService,public dialogRef: MatDialogRef<ExamresultdetailsDialogComponent>) { }
   onCancelClick(): void {
     this.dialogRef.close();
   }

}
