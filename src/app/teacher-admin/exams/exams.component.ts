import { Component } from '@angular/core';
import { AddExamDialogComponent } from '../addexam-dialog/addexam-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewexamdetailsDialogComponent } from '../viewexamdetails-dialog/viewexamdetails-dialog.component';
import { DeclareExamresultDialogComponent } from '../declare-examresult-dialog/declare-examresult-dialog.component';
import { ViewexamresultDialogComponent } from '../viewexamresult-dialog/viewexamresult-dialog.component';


@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrl: './exams.component.css'
})
export class ExamsComponent {

   
  Exam = {
    title: 'Articulate structure of C++ and Java in Semester 1',
    course: 'B.Tech Specialization in Health Informatics',
    subject: 'Network Engineering',
    date: '3-01-2023',
    time: '12:30 AM - 01:40 PM',
    questions: 50,
    passingPercentage: 70
  };

 
  // Define your history data
  history = [
    {
      title: 'Articulate structure of C++ and Java in Semester 1',
      course: 'B.Tech Specialization in Health Informatics',
      subject: 'Network Engineering',
      date: '3-01-2023',
      time: '12:30 AM - 01:40 PM',
      questions: 50,
      passingPercentage: 70,
      resultDeclared : false
    },
    {
      title: 'Articulate structure of C++ and Java in Semester 1',
      course: 'B.Tech Specialization in Health Informatics',
      subject: 'Network Engineering',
      date: '3-01-2023',
      time: '12:30 AM - 01:40 PM',
      questions: 50,
      passingPercentage: 70,
      resultDeclared : true
    }
  ];
  constructor(private dialog: MatDialog) { }
  

  //navbar data
  activeTab: string = 'scheduled'; // Default tab
 
 
  

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  viewDetails() : void{
    const dialogRef = this.dialog.open(ViewexamdetailsDialogComponent , {
         width: "50%",
         height: "auot",
    });
  }
 

  addExam(): void {
    const dialogRef = this.dialog.open(AddExamDialogComponent, {
      width: "auto",
      height: "auto",
    });
    // You can navigate to a form to add a new Exam
  }


  declareResult() : void{
       const dialogRef = this.dialog.open(DeclareExamresultDialogComponent ,
        {
         width : "55%",
         height : "auto",
        });
    }

 
viewResult(): void { 
  const dialogRef = this.dialog.open(ViewexamresultDialogComponent, {
    width: '55%', 
    height: 'auto' 
  });
}

}
