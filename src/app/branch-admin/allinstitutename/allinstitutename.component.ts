import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SharedService } from '../../institute-admin/shared.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-allinstitutename',
  templateUrl: './allinstitutename.component.html',
  styleUrl: './allinstitutename.component.css'
})
export class AllinstitutenameComponent {

  first: number = 0;
  rows: number = 5;

  constructor(private messageService: MessageService,private sharedService:SharedService,public dialogRef: MatDialogRef<AllinstitutenameComponent>) { }

  studentPayments = [
    { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, status: 'Cancelled' },
    { studentId: '#326T4M9', date: '21 Jan 2019, 6:12am', amount: 200, status: 'Complete' },
    { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, status: 'Cancelled' }, { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, status: 'Cancelled' }, { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, status: 'Cancelled' }, { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, status: 'Cancelled' },
];

moredata(event: any) {
  console.log(event);
  this.first = event.first;
  this.rows = event.rows;
}

}
