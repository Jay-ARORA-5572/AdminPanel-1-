import { Component, OnInit } from '@angular/core';
// import { AddstaffmanagementComponent } from '../addstaffmanagement/addstaffmanagement.component';
import { MatDialog } from '@angular/material/dialog';
import { AddinstructorComponent } from '../addinstructor/addinstructor.component';
import { SharedService } from '../shared.service';
import { EditInstructorComponent } from '../edit-instructor/edit-instructor.component';
import { GetinstructorservicesService } from './getinstructorservices.service';


@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrl: './instructor-list.component.css'
})
export class InstructorListComponent implements OnInit {


  token:any;
  statusOptions: any[];
  first: number = 0;
  rows: number = 5;
  checkedall: boolean = false;
  checkedone: boolean = false;

  instructors: any;
  maindata:any;

  constructor(private dialog: MatDialog,private SharedServicedata:SharedService,private instructorsget:GetinstructorservicesService) {
    this.statusOptions = [
      { label: 'Active', value: 'Active' },
      { label: 'Pending', value: 'Pending' },
      { label: 'Suspend', value: 'Suspend' }
    ];
    // this.instructors = [
    //   { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    //   { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    //   { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    //   { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    //   { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    //   { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    //   { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    //   { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    //   { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    //   { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    //   { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    //   { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    //   { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    //   { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    //   { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    //   { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    //   { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    //   { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    //   { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    //   { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    //   { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    //   { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    //   { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    //   { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    //   // Add more instructor objects as needed
    // ];
  }

  ngOnInit(): void {
    this.token = localStorage.getItem("accesstoken")
    this.getAllTeacher();
    this.SharedServicedata.refreshData.subscribe((data: string) => {
      console.log('Received event:', data);

      this.getAllTeacher();
    });
   }


  getAllTeacher(){
    this.token = localStorage.getItem('accesstoken');
  
    let institutionId="66a4dc2610fd3e344773cd32"

    this.instructorsget.userdataget(institutionId,this.token).subscribe((res: any) => {
      console.log("70.----->",res["allUsers"]["teacher"])
      // this.maindata=res["allUsers"]

      this.instructors=res["allUsers"]["teacher"]
    });


  }




  getStatusClass(status: string): string {
    return status;
  }
  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  addinstructor() {
    const dialogRef = this.dialog.open(AddinstructorComponent, {
      width: "45%",
      height: "auto",
    });
  }

  EditCourse() {
    console.log('View Details clicked');
    const dialogRef = this.dialog.open(EditInstructorComponent, {
      width: "45%",
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



}