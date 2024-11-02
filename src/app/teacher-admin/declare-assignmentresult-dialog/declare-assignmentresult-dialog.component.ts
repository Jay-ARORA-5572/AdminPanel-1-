import { Component } from '@angular/core';
import { AddnoteDialogComponent } from '../addnote-dialog/addnote-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-declare-assignmentresult-dialog',
  templateUrl: './declare-assignmentresult-dialog.component.html',
  styleUrl: './declare-assignmentresult-dialog.component.css'
})
export class DeclareAssignmentresultDialogComponent {
  
  dialogRef: any;
  selectedTab: string = 'Details'; // Set default value to 'Details'
   
  
  constructor( public dialog: MatDialog) { }
  
 
  options = [
    { label: 'Details', value: 'showDetails' },
    { label: 'Result', value: 'showResponse' }
  ];

  // Methods to switch between tabs
 
   // ---------------------------details button ts-------------------
   
   
   resultDate: string = "17 Jan 2023";
   resultTime: string = "12:40 PM";
   examDescription: string =
     "Articulate structure of C++ and Java in Semester 1";
   batch: string = "3CO - JVY";
   examTime: string = "12:40 PM";
   examDate: string = "17 Jan 2023";
   status: string = "Pass";
   course: string = "B.Tech Specialization in Health";
   subject: string = "Networking";
   examName: string = "Networking for Beginners"
 
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
   closeDialog(): void {
    this.dialog.closeAll(); // This will close all open dialogs
  }
 
  
 
 
   // ----------------------------------Result button content ts-----------------------------------
   
    students = [
      { id: 'TIPSGHM 202', name: 'Harsh Kadyan', attachment: 'Download', attachmentName: 'Download', marks: '', note: '' },
      { id: 'TIPSGHM 206', name: 'Harsh Kadyan', attachment: 'Download', attachmentName: 'Download', marks: '', note: '' },
      { id: 'TIPSGHM 203', name: 'Harsh Kadyan', attachment: 'Download', attachmentName: 'Download', marks: '', note: '' },
      { id: 'TIPSGHM 206', name: 'Harsh Kadyan', attachment: 'Download', attachmentName: 'Download', marks: '', note: '' },
      { id: 'TIPSGHM 202', name: 'Harsh Kadyan', attachment: 'Download', attachmentName: 'Download', marks: '', note: '' },
      { id: 'TIPSGHM 203', name: 'Harsh Kadyan', attachment: 'Download', attachmentName: 'Download', marks: '', note: '' },
      { id: 'TIPSGHM 206', name: 'Harsh Kadyan', attachment: 'Download', attachmentName: 'Download', marks: '', note: '' },
      { id: 'TIPSGHM 203', name: 'Harsh Kadyan', attachment: 'Download', attachmentName: 'Download', marks: '', note: '' },
      { id: 'TIPSGHM 202', name: 'Harsh Kadyan', attachment: 'Download', attachmentName: 'Download', marks: '', note: '' },

  ];

  selectbtn(op:any){
    console.log("select")
    op.hide();

  }

  EditCourse() {
    console.log('View Details clicked');
    const dialogRef = this.dialog.open(AddnoteDialogComponent, {
      width: "35%",
      height: "auto",
    });
  }
  
  DeleteCourse() {
    console.log('Activities clicked');
  }

  

}
