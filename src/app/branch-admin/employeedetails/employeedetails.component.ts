import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrl: './employeedetails.component.css'
})
export class EmployeedetailsComponent {

  constructor(public dialogRef: MatDialogRef<EmployeedetailsComponent>) { }

  first: number = 0;
  rows: number = 3;

 // -------------header--------------------
 studentName: string = "MOGAMBO";
 studentID: string = "TIPSG5682";
 gender: string = "Male";
 attendancePercentage: number = 85;
 totalClassesAttended: number = 85;
 totalClasses: number = 100;

 instructors = [
  {
    attendancePercentage: 85,
    payment: 'Due',
    status: 'Active',
    leave: 12,
    completeTask: 150,
    pendingTask: 20
  },
  {
    attendancePercentage: 92,
    payment: 'Paid',
    status: 'Inactive',
    leave: 8,
    completeTask: 120,
    pendingTask: 10
  },
  {
    attendancePercentage: 78,
    payment: 'Paid',
    status: 'Active',
    leave: 15,
    completeTask: 140,
    pendingTask: 30
  },
  {
    attendancePercentage: 60,
    payment: 'Cancelled',
    status: 'Suspended',
    leave: 20,
    completeTask: 80,
    pendingTask: 50
  },
  {
    attendancePercentage: 88,
    payment: 'Paid',
    status: 'Active',
    leave: 10,
    completeTask: 170,
    pendingTask: 25
  },
  {
    attendancePercentage: 75,
    payment: 'Due',
    status: 'Active',
    leave: 18,
    completeTask: 130,
    pendingTask: 40
  },
  {
    attendancePercentage: 82,
    payment: 'Paid',
    status: 'Inactive',
    leave: 5,
    completeTask: 110,
    pendingTask: 15
  },
  {
    attendancePercentage: 91,
    payment: 'Paid',
    status: 'Active',
    leave: 9,
    completeTask: 160,
    pendingTask: 18
  },
  {
    attendancePercentage: 68,
    payment: 'Cancelled',
    status: 'Suspended',
    leave: 22,
    completeTask: 90,
    pendingTask: 55
  },
  {
    attendancePercentage: 93,
    payment: 'Paid',
    status: 'Active',
    leave: 7,
    completeTask: 180,
    pendingTask: 12
  },
  {
    attendancePercentage: 86,
    payment: 'Due',
    status: 'Active',
    leave: 14,
    completeTask: 150,
    pendingTask: 20
  },
  {
    attendancePercentage: 90,
    payment: 'Paid',
    status: 'Inactive',
    leave: 6,
    completeTask: 125,
    pendingTask: 10
  },
  {
    attendancePercentage: 83,
    payment: 'Paid',
    status: 'Active',
    leave: 12,
    completeTask: 175,
    pendingTask: 22
  },
  {
    attendancePercentage: 65,
    payment: 'Cancelled',
    status: 'Suspended',
    leave: 19,
    completeTask: 95,
    pendingTask: 60
  },
  {
    attendancePercentage: 89,
    payment: 'Paid',
    status: 'Active',
    leave: 9,
    completeTask: 165,
    pendingTask: 19
  },
  {
    attendancePercentage: 77,
    payment: 'Due',
    status: 'Active',
    leave: 16,
    completeTask: 135,
    pendingTask: 32
  },
  {
    attendancePercentage: 95,
    payment: 'Paid',
    status: 'Inactive',
    leave: 3,
    completeTask: 190,
    pendingTask: 9
  },
  {
    attendancePercentage: 87,
    payment: 'Paid',
    status: 'Active',
    leave: 11,
    completeTask: 155,
    pendingTask: 17
  },
  {
    attendancePercentage: 64,
    payment: 'Cancelled',
    status: 'Suspended',
    leave: 23,
    completeTask: 85,
    pendingTask: 65
  },
  {
    attendancePercentage: 80,
    payment: 'Paid',
    status: 'Active',
    leave: 13,
    completeTask: 145,
    pendingTask: 28
  },
  {
    attendancePercentage: 73,
    payment: 'Due',
    status: 'Active',
    leave: 17,
    completeTask: 130,
    pendingTask: 35
  },
  {
    attendancePercentage: 88,
    payment: 'Paid',
    status: 'Inactive',
    leave: 7,
    completeTask: 115,
    pendingTask: 13
  },
  {
    attendancePercentage: 90,
    payment: 'Paid',
    status: 'Active',
    leave: 10,
    completeTask: 160,
    pendingTask: 20
  },
  {
    attendancePercentage: 67,
    payment: 'Cancelled',
    status: 'Suspended',
    leave: 21,
    completeTask: 100,
    pendingTask: 48
  },
  {
    attendancePercentage: 84,
    payment: 'Paid',
    status: 'Active',
    leave: 11,
    completeTask: 140,
    pendingTask: 25
  },
  {
    attendancePercentage: 70,
    payment: 'Due',
    status: 'Active',
    leave: 18,
    completeTask: 125,
    pendingTask: 33
  }
];


 onCancelClick(): void {
  this.dialogRef.close();
}

onPageChange(event: any) {
  console.log(event);
  this.first = event.first;
  this.rows = event.rows;
}

addinfo() {
  // const dialogRef = this.dialog.open(AddviewmorestudentComponent, {
  //   width: "30%",
  //   height: "auto",
  // });
}

}
