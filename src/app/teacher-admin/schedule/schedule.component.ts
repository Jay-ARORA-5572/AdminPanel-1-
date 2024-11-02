import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewdetailsscheduleDialogComponent } from '../viewdetailsschedule-dialog/viewdetailsschedule-dialog.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  notStartedTasks = [
    'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming',
    'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming',
    'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming'
  ];

  ongoingTasks = [
    'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming',
    'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming',
    'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming'
  ];

  completedTasks = [
    'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming',
     'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming',
      'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming'
  ];
  constructor(public dialog: MatDialog) {}
  
  viewDetails(event: Event): void {
    event.preventDefault();  // Prevents the default link behavior
    this.dialog.open(ViewdetailsscheduleDialogComponent, {
      width: '70%',
      height: 'auto'
      // You can pass data to the dialog if needed
    });
  }
}
