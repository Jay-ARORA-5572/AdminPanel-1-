import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SharedService } from '../shared.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent {
  constructor(private messageService: MessageService,private sharedService:SharedService,public dialogRef: MatDialogRef<AddstudentComponent>) { }
  
  student = {
    firstName: '',
    lastName: '',
    course: null,
    email: '',
    phone: '',
    dob: null,
    paymentMethods: []
  };


  selectedUser: any;
  selectedCourse: any;
  selectedState: any;
  country: any;
  state: any;
  selectedPaymentMethod: any;
  phone: any;
  email: any;
  address: any;
  studentId: any;
  courseSelect:any;

  courses = [
    { label: 'UI/UX Design with Adobe XD', value: 'UI/UX Design with Adobe XD' },
    { label: 'Front-end Development', value: 'Front-end Development' },
    { label: 'Responsive Design', value: 'Responsive Design' },
    { label: 'UI/UX Design with Adobe XD', value: 'UI/UX Design with Adobe XD' },
    { label: 'Front-end Development', value: 'Front-end Development' },
    { label: 'Responsive Design', value: 'Responsive Design' },
    { label: 'UI/UX Design with Adobe XD', value: 'UI/UX Design with Adobe XD' },
    { label: 'Front-end Development', value: 'Front-end Development' },
    { label: 'Responsive Design', value: 'Responsive Design' },
  ];


  states = [
    { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
    { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
    { label: 'Assam', value: 'Assam' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Chhattisgarh', value: 'Chhattisgarh' },
    { label: 'Goa', value: 'Goa' },
    { label: 'Gujarat', value: 'Gujarat' },
    { label: 'Haryana', value: 'Haryana' },
    { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
    { label: 'Jharkhand', value: 'Jharkhand' },
    { label: 'Karnataka', value: 'Karnataka' },
    { label: 'Kerala', value: 'Kerala' },
    { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
    { label: 'Maharashtra', value: 'Maharashtra' },
    { label: 'Manipur', value: 'Manipur' },
    { label: 'Meghalaya', value: 'Meghalaya' },
    { label: 'Mizoram', value: 'Mizoram' },
    { label: 'Nagaland', value: 'Nagaland' },
    { label: 'Odisha', value: 'Odisha' },
    { label: 'Punjab', value: 'Punjab' },
    { label: 'Rajasthan', value: 'Rajasthan' },
    { label: 'Sikkim', value: 'Sikkim' },
    { label: 'Tamil Nadu', value: 'Tamil Nadu' },
    { label: 'Telangana', value: 'Telangana' },
    { label: 'Tripura', value: 'Tripura' },
    { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
    { label: 'Uttarakhand', value: 'Uttarakhand' },
    { label: 'West Bengal', value: 'West Bengal' },
    // { label: 'Andaman and Nicobar Islands', value: 'Andaman and Nicobar Islands' },
    { label: 'Chandigarh', value: 'Chandigarh' },
    // { label: 'Dadra and Nagar Haveli and Daman and Diu', value: 'Dadra and Nagar Haveli and Daman and Diu' },
    // { label: 'Lakshadweep', value: 'Lakshadweep' },
    // { label: 'Delhi', value: 'Delhi' },
    // { label: 'Puducherry', value: 'Puducherry' },
    // { label: 'Ladakh', value: 'Ladakh' },
    // { label: 'Jammu and Kashmir', value: 'Jammu and Kashmir' }
  ];

  addStudent() {
    console.log(this.student);
  }


  users = [
    { label: 'Abu Bin Ishtiyak', value: 'Abu Bin Ishtiyak' },
    // Add other users as needed
  ];

  paymentMethods = [
    { label: 'Card', value: 'Card' },
    { label: 'Cash', value: 'Cash' },
    { label: 'Online', value: 'Online' },
  ];






  onCancelClick(): void {
    this.dialogRef.close();
  }

}
