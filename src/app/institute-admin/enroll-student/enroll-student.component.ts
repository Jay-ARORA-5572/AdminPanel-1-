import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { NgForm } from '@angular/forms';
import { instructorAdd } from '../registerforAll-variable';


@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrl: './enroll-student.component.css'
})
export class EnrollStudentComponent {
  


  constructor(private sharedService: SharedService) { }

  ngOnInit(): void { }
  
  showPassword = false;
  showConfirmPassword = false;
  
  registerinstructor: instructorAdd = {
    firstname: '',
    lastname: '',
    about: '',
    rolekey: '', // institute id 
    password: '',
    confirmpassword: '',
    role: '', // role key 
    salary: '',
    contactdetail: {
      emailid: '',
      mobnum: ''
    },
    address: {
      pincode: 0,
      state: '',
      city: '',
      address1: '',
      address2: ''
    },
    username: ''
  }

  users = [
    { label: 'Abu Bin Ishtiyak', value: 'Abu Bin Ishtiyak' },
    // Add other users as needed
  ];
  courses = [
    { label: 'UI/UX Design with Adobe XD', value: 'UI/UX Design with Adobe XD' },
    // Add other courses as needed
  ];
  paymentMethods = [
    { label: 'Card', value: 'Card' },
    { label: 'Cash', value: 'Cash' },
    { label: 'Online', value: 'Online' },
  ];

  enrollStudent(addstudentdata: NgForm) {
    // Add logic to enroll the student
      console.log("Add Enroll Student")
      
      // this.sharedService.myRouteEmitter.emit('Enroll List');
  
  }




  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }


}