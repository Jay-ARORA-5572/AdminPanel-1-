import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-history-view-details-dialog',
  templateUrl: './quiz-history-view-details-dialog.component.html',
  styleUrl: './quiz-history-view-details-dialog.component.css'
})
export class QuizHistoryViewDetailsDialogComponent {

  
  dialogRef: any;
  selectedTab: string = 'Details'; // Set default value to 'Details'
   
  constructor( public dialog: MatDialog) { }
  
  closeDialog(): void {
    this.dialog.closeAll(); // This will close all open dialogs
  }
 

   // ---------------------------details button ts-------------------
  
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
   quizName: string = "Networking for Beginners"
 
   // ----------------Buttons------------------------------
   showDetails: boolean = true; // Details section always starts open
   showResponse: boolean = false; // Response section starts closed
 
   // Method to show details; when response is open, it closes the response
   details() {
    this.selectedTab = 'Details';
  }

  // Method to show response
  response() {
    this.selectedTab = 'Result';
  }
 
   // ---------------------------------------------------
 
   passingPercentage: number = 70;
 
   formGroup!: FormGroup;
 
   stateOptions: any[] = [
     { label: "Off", value: "off" },
     { label: "On", value: "on" },
   ];
 
   ngOnInit() {
     this.formGroup = new FormGroup({
       value: new FormControl("on"),
     });
   }
 
   rule: string[] = [
     "You must use a functioning webcam and microphone",
     "No cell phones or other secondary devices in the room or test area",
     "Your desk/table must be clear of any materials except your test-taking device",
     "No one else can be in the room with you",
     "No talking",
     "The testing room must be well-lit and you must be clearly visible",
     "No dual screens/monitors",
     "Do not leave the camera",
   ];
 
 
 
   // ----------------------------------Result button content ts-----------------------------------
   
    students = [
      { name: 'Rahul Sharma', marks: 52, status: 'Fail' },
      { name: 'Rahul Sharma', marks: 85, status: 'Pass' },
      { name: 'Rahul Sharma', marks: 52, status: 'Fail' },
      { name: 'Rahul Sharma', marks: 85, status: 'Pass' },
      { name: 'Rahul Sharma', marks: 52, status: 'Fail' },
      { name: 'Rahul Sharma', marks: 85, status: 'Pass' },
      { name: 'Rahul Sharma', marks: 52, status: 'Fail' },
      { name: 'Rahul Sharma', marks: 85, status: 'Pass' },
  ];
  }   
