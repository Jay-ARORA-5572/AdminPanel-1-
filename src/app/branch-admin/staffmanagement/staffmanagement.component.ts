import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeedetailsComponent } from '../employeedetails/employeedetails.component';
import { AddstaffComponent } from '../addstaff/addstaff.component';

@Component({
  selector: 'app-staffmanagement',
  templateUrl: './staffmanagement.component.html',
  styleUrl: './staffmanagement.component.css'
})
export class StaffmanagementComponent {

  constructor(private dialog: MatDialog) {}

  first: number = 0;
  rows: number = 5;

  studentPayments = [
    { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, ratio: '70%', status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, ratio: '70%', status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, ratio: '70%', status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, ratio: '70%', status: 'Cancelled' },
    { studentId: '#326T4M9', date: '21 Jan 2019, 6:12am', amount: 200, ratio: '70%', status: 'Complete' },
    { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, ratio: '70%', status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, ratio: '70%', status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, ratio: '70%', status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, ratio: '70%', status: 'Cancelled' }, { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, ratio: '70%', status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, ratio: '70%', status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, ratio: '70%', status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, ratio: '70%', status: 'Cancelled' }, { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, ratio: '70%', status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, ratio: '70%', status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, ratio: '70%', status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, ratio: '70%', status: 'Cancelled' }, { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, ratio: '70%', status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, ratio: '70%', status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, ratio: '70%', status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, ratio: '70%', status: 'Cancelled' },
];

moredata(event: any) {
  console.log(event);
  this.first = event.first;
  this.rows = event.rows;
}

viewemployee() {
  console.log('view clicked');
  const dialogRef = this.dialog.open(EmployeedetailsComponent, {
    width: "1000%",
    height: "80%",
  });
}

addStaff() {
  const dialogRef = this.dialog.open(AddstaffComponent, {
    width: "35%",
    height: "auto",
  });
}

}
