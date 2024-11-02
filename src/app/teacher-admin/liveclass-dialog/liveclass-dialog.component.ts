import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-liveclass-dialog',
  templateUrl: './liveclass-dialog.component.html',
  styleUrl: './liveclass-dialog.component.css',
  providers: [ConfirmationService, MessageService],
})
export class LiveclassDialogComponent {
 
  students = [
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    {  name: 'Anubhav Dubey', status: 'absent' },
    // Add more students as needed
  ];
  constructor(
    private dialogs: MatDialog,
    private confirmationService: ConfirmationService,
    private messageService: MessageService


  ) {}

  // Method to toggle attendance status
  toggleAttendance(student: any) {
    student.status = student.status === 'present' ? 'absent' : 'present';
  }
  closeDialog(): void {
    this.dialogs.closeAll(); // This will close all open dialogs
  }
  
  isReviewDialogOpen = false;  //
  get absentStudents() {
    return this.students.filter(student => student.status === 'absent');
  }
  confirm1(event: Event) {
    const presentCount = this.getPresentCount();
    const absentCount = this.getAbsentCount();

    this.confirmationService.confirm({
        target: event.target as EventTarget,
        
        message: `
            <div>
                <h4>Are you sure that you want to proceed?</h4>
                <div class="attendance-summary"">
                    
                        <strong style="color: green;">Number of Present Students:</strong> ${presentCount}
                        <br>
                        <strong>Number of Absent Students:</strong><span style="color: red;"> ${absentCount}</span>
                    
                </div>
            </div>`,
        header: 'Attendance Confirmation',
        acceptIcon: "none",
        rejectIcon: "none",
        rejectButtonStyleClass: "p-button-text",
      
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Attendance Submitted ' });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected ', life: 3000 });
        }
    });
}

  getPresentCount() {
    console.log('Present count method called');
    return this.students.filter(student => student.status === 'present').length;
  }

  getAbsentCount() {
    console.log('Absent count method called');
    return this.students.filter(student => student.status === 'absent').length;
  }


}