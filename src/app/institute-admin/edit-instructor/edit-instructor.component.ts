import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SharedService } from '../shared.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { instructorAdd } from '../registerforAll-variable';

@Component({
  selector: 'app-edit-instructor',
  templateUrl: './edit-instructor.component.html',
  styleUrl: './edit-instructor.component.css'
})
export class EditInstructorComponent {


  token: any = "";
  mode:any="";

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


  constructor(private messageService: MessageService, private sharedService: SharedService,  public dialogRef: MatDialogRef<EditInstructorComponent>) { 
    this.mode = 'Add Instructor'; 
  }

  ngOnInit(): void {
    this.token = localStorage.getItem("accesstoken")
  }



  onAddInstructorClick(): void {
    // console.log(this.instructorForm.value);
    // Logs all form data to console
  }

  onCancelClick1(): void {
    // this.instructorForm.reset(); 
    // Resets the form
  }

  editInstructordetails(editinstructor: NgForm) {
    let valid;
    valid = editinstructor['form']['status']

    if (valid=="VALID"){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Add Instructor Successfully' })
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' })
    }
  }

  

  onCancelClick(event: Event): void {
    event.stopPropagation();  // Prevents the event from bubbling up or triggering multiple times
    this.dialogRef.close();   // Close the dialog
  }
  

}
