import { Component, Inject } from "@angular/core";
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { MatDialog } from "@angular/material/dialog";



@Component({
  selector: "app-quizresultdetails-dialog",
  templateUrl: "./quizresultdetails-dialog.component.html",
  styleUrl: "./quizresultdetails-dialog.component.css",
})
export class QuizresultdetailsDialogComponent {

  
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

  // ----------------Buttons------------------------------

  dialogRef: any;
  selectedTab: string = 'Details'; // Set default value to 'Details'
   
  showDetails: boolean = true; // Details section always starts open
  showResponse: boolean = false; // Response section starts closed

  // Method to show details; when response is open, it closes the response
  details() {
   this.selectedTab = 'Details';
 }

 // Method to show response
 response() {
   this.selectedTab = 'Response';
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



  // ----------------------------------response button content ts-----------------------------------
   // Define the questions array with options and correct answers
   questions = [
    {
      text: 'Which of the following is not a networking protocol?',
      options: [
        { text: 'ICP', isCorrect: false },
        { text: 'DCP', isCorrect: false },
        { text: 'BCP', isCorrect: true },
        { text: 'CCP', isCorrect: false }
      ]
    },
    {
      text: 'Which of the following is not a networking protocol?',
      options: [
        { text: 'ICP', isCorrect: false },
        { text: 'DCP', isCorrect: false },
        { text: 'BCP', isCorrect: true },
        { text: 'CCP', isCorrect: false }
      ]
    },
    // Add more questions similarly if needed
  ];

  selectedAnswers: string[] = [];

  // Function to select an answer and store it
  selectOption(questionIndex: number, selectedOption: string, isCorrect: boolean) {
    this.selectedAnswers[questionIndex] = selectedOption;
  }

  constructor(private messageService: MessageService, public dialog: MatDialog) { }
  closeDialog(): void {
    this.dialog.closeAll(); // This will close all open dialogs
  }
 
}
