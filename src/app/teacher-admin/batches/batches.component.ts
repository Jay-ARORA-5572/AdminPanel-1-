import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewBatchdetailsDialogComponent } from '../view-batchdetails-dialog/view-batchdetails-dialog.component';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.css'
})
export class BatchesComponent {

  
  // Define your batch data 
  batch = {
    title: '3CO-JVY',
    course: 'B.Tech Specialization in Health Informatics',
  };
  // Define your questionbank data
  course = {
    title: '',
    course: 'B.Tech Specialization in Health Informatics',
    subject: 'Network Engineering',
    questions: 1654,
  };
 
  //navbar data
  activeTab: string = 'batches'; // Default tab
 
  

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  constructor(private dialog: MatDialog) { }

  viewDetails(): void {
   const dialogRef = this.dialog.open(ViewBatchdetailsDialogComponent,{
    width: "50%",
    height : "auto"
   })
  }

  addbatch(): void {
    alert('Add batch functionality here!');
    // You can navigate to a form to add a new batch
  }

}
