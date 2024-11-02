import { Component } from '@angular/core';

@Component({
  selector: 'app-top5institutename',
  templateUrl: './top5institutename.component.html',
  styleUrl: './top5institutename.component.css'
})
export class Top5institutenameComponent {

  first: number = 0;
  rows: number = 5;

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
