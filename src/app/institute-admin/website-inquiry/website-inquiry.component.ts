import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import { UpdatecourseDialogComponent } from '../updatecourse-dialog/updatecourse-dialog.component';

import { GetAllCourseService } from './get-all-website-query.service';
import { AddwebsiteenquiryComponent } from '../addwebsiteenquiry/addwebsiteenquiry.component';

interface Status {
  OngoingStatus: string;
}

@Component({
  selector: 'app-website-inquiry',
  templateUrl: './website-inquiry.component.html',
  styleUrl: './website-inquiry.component.css'
})
export class WebsiteInquiryComponent {
  first: number = 0;

  rows: number = 10;
  checkedall: boolean = false;
  checkedone: boolean = false;

  value: any = ""
  showAnotherComponent = false;
  search_bar: any = false;
  mydata = true
  searcharray: any = [];
  totalbranch = 0
  singlecheck: any = [];
  downloadicon = ""
  downloadicon1 = "up";
  courseData: any;
  token: any;


  constructor(private dialog: MatDialog, private messageService: MessageService, private getallcourselist: GetAllCourseService) { }

  status: Status[] | undefined;

  selectedStatus: Status | undefined;

  ngOnInit() {
    this.token = localStorage.getItem("accesstoken")
    this.getAllCourses();

    this.status = [
      { OngoingStatus: 'Active' },
      { OngoingStatus: 'No Action' },
      { OngoingStatus: 'Done' },
      { OngoingStatus: 'Inactive' },
    ];
  }


  getAllCourses() {
    this.token = localStorage.getItem("accesstoken")
    this.getallcourselist.getallcourse(this.token).subscribe((res: any) => {
      console.log("Response ---->", res);
      // if (res['success'] == "Successfully") {
      //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Course Category Create Successfully' })
      // }
      // else {
      //   this.messageService.add({ severity: 'error', summary: 'Error', detail: res })
      // }
    }, (error) => {
      console.log("HTTP request error:", error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error["error"]["error"] });
    });
  }






  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }


  addnew() {
    const dialogRef = this.dialog.open(AddwebsiteenquiryComponent, {
      width: "60%",
      // height: "75%",
      height: "auto",
    });
  }

  EditCourse() {
    console.log('View Details clicked');
    // const dialogRef = this.dialog.open(CourseEditComponent, {
    const dialogRef = this.dialog.open(UpdatecourseDialogComponent, {
      width: "60%",
      height: "auto",
    });
  }

  DeleteCourse() {
    console.log('Activities clicked');
  }

  selectbtn(op: any) {
    console.log("select")
    op.hide();
  }



  courses = [
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Inactive', statusClass: 'inactive', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'Done', statusClass: 'done', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
    {
      number: '1', OngoingStatus: 'College',
      category: 'Web Development', instructor: 'Alex Ashley',
      lesson: 'Total lesson: 32', enroleStudent: 'Total enrolment: 25',
      status: 'Active', statusClass: 'active', price: '0987654321', deadline: '20.4.2021'
    },
    {
      number: '1', OngoingStatus: 'abcd',
      category: 'Mobile Application', instructor: 'Michael Wood',
      lesson: 'Total lesson: 11', enroleStudent: 'Total enrolment: 7',
      status: 'No Action', statusClass: 'noaction', price: '1234567890', deadline: '10.5.2021'
    },
  ];

}
