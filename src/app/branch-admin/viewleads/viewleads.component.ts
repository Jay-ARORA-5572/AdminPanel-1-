import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

interface Status {
  OngoingStatus: string;
}

@Component({
  selector: 'app-viewleads',
  templateUrl: './viewleads.component.html',
  styleUrl: './viewleads.component.css'
})
export class ViewleadsComponent {

  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<ViewleadsComponent>) { }

  first: number = 0;

  rows: number = 10;
  checkedall: boolean = false;
  checkedone: boolean = false;

  status: Status[] | undefined;

    selectedStatus: Status | undefined;

    ngOnInit() {
        this.status = [
            { OngoingStatus: 'Active' },
            { OngoingStatus: 'Pending' },
            { OngoingStatus: 'Rejected' },
        ];
    }

  courses = [
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
    {
      badge: 'RD', badgeClass: 'rd', OngoingStatus: 'Responsive Design',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '$30', deadline: '20.4.2021'
    },
    {
      badge: 'AD', badgeClass: 'ad', OngoingStatus: 'Android Development',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Pending', statusClass: 'pending', price: '$65', deadline: '10.5.2021'
    },
  ];



  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }


  addcourse() {
    // const dialogRef = this.dialog.open(AddcourseDialogComponent, {
    //   width: "60%",
    //   // height: "75%",
    //   height: "auto",
    // });
  }

  EditCourse() {
    console.log('View Details clicked');
    // const dialogRef = this.dialog.open(CourseEditComponent, {
    //   width: "35%",
    //   height: "auto",
    // });
  }
  
  DeleteCourse() {
    console.log('Activities clicked');
  }

  selectbtn(op:any){
    console.log("select")
    op.hide();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
