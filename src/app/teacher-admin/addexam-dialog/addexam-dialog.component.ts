import { Component, EventEmitter, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ExamVariables } from "./addexam-variable";
import { MessageService } from "primeng/api";
import { Subject } from "rxjs";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-addexam-dialog",
  templateUrl: "./addexam-dialog.component.html",
  styleUrls: ["./addexam-dialog.component.css"],
  styles: [
    `
      .p-stepper {
        flex-basis: 50rem;
      }
    `,
  ],
})
export class AddExamDialogComponent {

uploadedFileName: any;
  @Output() nextCallback = new EventEmitter<void>();
  @Output() prevCallback = new EventEmitter<void>();

  Examedata = {
    totalMarks: "",
    passingPercentage: 0,
    examDate: "",
    examTime: "",
    examName: "",
  };

  chapter4 = {
    searchQuery: "",
    electedTags: [],
    

  }
  // ------------select course chapter 1--------------------
  courses: any = [
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
  ]; // Example courses

  // ------------select subject chapter 2--------------------

  subjects: any = [
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
    "B.Tech Specialization in Health Informatics",
  ];
  selectedBatches: any =
[
  "3CO - JVY",
  "3CO - JVY",
  "3CO - JVY",
];

 

  constructor(
    private dialogs: MatDialog,
    private messageService: MessageService
  ) {}
  activeIndex: number = 0;
  selectedCourse: any;
  selectSubject: any;

  onSelectSubject(subject: string) {
    this.selectSubject = subject; // Set the selected subject name in the search box
    console.log("select subject", subject);
  }

  onCourseSelect(data: any) {
    this.selectedCourse = data; // Set the selected course name in the search box
    console.log("select course", data);
  }

  // ------------Continue button----------------

  onSubmit(): void {
    console.log("Form submitted");
    console.log("Total Marks:", this.Examedata.totalMarks);
    console.log("Passing Percentage:", this.Examedata.passingPercentage);
    console.log("Exam Date:", this.Examedata.examDate);
    console.log("Exam Time:", this.Examedata.examTime); // Add this line to log Exam Time
    console.log("Exam Name:", this.Examedata.examName);
    console.log("Form data:", this.Examedata); 
  
    // Move to the next step in the stepper
    this.activeIndex++;
  }

  // Method to close the dialog
  closeDialog(): void {
    this.dialogs.closeAll(); // This will close all open dialogs
  }
  onNext(nextCallback: () => void): void {
    nextCallback(); // Move to the next step
  }

  onPrev(prevCallback: () => void): void {
    prevCallback(); // Move to the previous step
  }

  onBack(): void {
    console.log("Back button clicked");
  }

  logExamTime(event: any) {
    console.log("Exam time updated to:", event);  // This will help track if the value is being updated
  }
  


 

 

  // ------------------------------------Tags Chapter  3---------------------------------- 

  prevStep() {
    this.prevCallback.emit(); // Trigger the previous step callback
  }

  nextStep() {
    this.nextCallback.emit(); // Trigger the next step callback
  }



   // ------------------------------------Exam Specificatin Chapter  4----------------------------------
   examspecification(form: NgForm): void {
    if (form.valid) {
      console.log("Exam data:", this.Examedata);     


      // Show success message
      this.messageService.add({
        severity: "success",
        summary: "Success",
        detail: "Exam data submitted successfully",
      });

      // Proceed to the next step
      this.nextCallback.emit();
    } else {
      // Show error message if form is invalid
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "All fields are required",
      });
    }
  }

  uploadQuestionPaper(event: Event): void {
    console.log("Exam time when uploading:", this.Examedata.examTime);  // Log exam time
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0]; // Get the first selected file
      this.uploadedFileName = file.name; // Store the file name
      console.log("Uploaded file:", this.uploadedFileName); // Log it for debugging
    } else {
      console.log("No file selected.");
    }
  }
  
  onConfirm(): void {
    if (this.selectedCourse && this.selectSubject && this.Examedata.totalMarks && this.Examedata.passingPercentage && this.uploadedFileName) {
      // Show success message
      this.messageService.add({
        severity: "success",
        summary: "Success",
        detail: "All exam details have been successfully submitted.",
      });
      
      // Optionally close dialog or move to a final step
      this.closeDialog();
    } else {
      // Show error if any field is missing
      this.messageService.add({
        severity: "error",
        summary: "Error",
        detail: "Please ensure all fields are filled before confirming.",
      });
    }
  }
  
  
  

  


}





 

  
