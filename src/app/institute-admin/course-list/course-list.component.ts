import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddcourseDialogComponent } from '../addcourse-dialog/addcourse-dialog.component';
import { CourseEditComponent } from '../course-edit/course-edit.component';
import { MessageService,ConfirmationService } from 'primeng/api';
import { UpdatecourseDialogComponent } from '../updatecourse-dialog/updatecourse-dialog.component';

import { GetAllCourseService } from './get-all-course.service';

interface Status {
  OngoingStatus: string;
}

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {

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
  courseData:any;
  token: any;


  constructor(private dialog: MatDialog,private messageService: MessageService,private getallcourselist:GetAllCourseService) { }

  status: Status[] | undefined;

    selectedStatus: Status | undefined;

    ngOnInit() {
      this.token = localStorage.getItem("accesstoken")
      this.getAllCourses();
    
        this.status = [
            { OngoingStatus: 'Active' },
            { OngoingStatus: 'Pending' },
            { OngoingStatus: 'Rejected' },
        ];
    }


    getAllCourses(){
      this.token = localStorage.getItem("accesstoken")
      this.getallcourselist.getallcourse(this.token).subscribe((res: any) => {
        console.log("Response ---->",res);
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


  addcourse() {
    const dialogRef = this.dialog.open(AddcourseDialogComponent, {
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

  selectbtn(op:any){
    console.log("select")
    op.hide();
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

}
