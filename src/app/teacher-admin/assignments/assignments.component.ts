import { Component } from '@angular/core';
import { AddassignmentDailogComponent } from '../addassignment-dailog/addassignment-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewassignmentDialogComponent } from '../viewassignment-dialog/viewassignment-dialog.component';
import { DeclareAssignmentresultDialogComponent } from '../declare-assignmentresult-dialog/declare-assignmentresult-dialog.component';
import { ViewAssignmentresultDialogComponent } from '../view-assignmentresult-dialog/view-assignmentresult-dialog.component';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent {

  Assignment = {
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
  

  //navbar data
  activeTab: string = 'scheduled'; // Default tab
  constructor(private dialog: MatDialog) { }
 
  

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  viewDetails() : void{
    const dialogRef = this.dialog.open(ViewassignmentDialogComponent , {
         width: "70%",
         height: "auot",
    });
  }
  addAssignment(): void{

    const dialogRef = this.dialog.open(AddassignmentDailogComponent ,{
      width: "auto",
      height: "auto",
      
    });

  }
  declareResult(): void {
    const dialogRef = this.dialog.open(DeclareAssignmentresultDialogComponent, {
        width : "50%",
        height : "auto"

    })  
    }


    viewResult() : void{
     const dialogRef = this.dialog.open(ViewAssignmentresultDialogComponent,{
        width : "50%",
        height : "auto"

     }) 
    }
   

}
