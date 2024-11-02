import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SharedService } from '../shared.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { instructorAdd } from '../registerforAll-variable';
import { AddinstructorserviceService } from './addinstructorservice.service';
import { log } from 'console';




@Component({
  selector: 'app-addinstructor',
  templateUrl: './addinstructor.component.html',
  styleUrl: './addinstructor.component.css'
})
export class AddinstructorComponent {

  token: any = "";
  mode:any="";
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

  constructor(private messageService: MessageService, private sharedService: SharedService,private addinstructor:AddinstructorserviceService, public dialogRef: MatDialogRef<AddinstructorComponent>) { }

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

  register(registerinstructor: NgForm) {
    let valid;
    valid = registerinstructor['form']['status']


    if (valid=="VALID"){
      // this.onCancelClick();
      this.registerinstructor.rolekey="Ins_8rcra7"  // institute id  --> hostbooksrahul2022@gmail.com
      this.registerinstructor.role="teacher"
      this.registerinstructor.username=registerinstructor["form"]["value"]["username"]
      this.registerinstructor.firstname=registerinstructor['form']['value']["firstname"]
      this.registerinstructor.lastname=registerinstructor['form']['value']["lastname"]
      this.registerinstructor.contactdetail.emailid=registerinstructor['form']['value']["email"]
      this.registerinstructor.contactdetail.mobnum=registerinstructor['form']['value']["mobile"]
      this.registerinstructor.password=registerinstructor['form']['value']["password"]
      this.registerinstructor.confirmpassword=registerinstructor['form']['value']["conformpassword"]
      this.registerinstructor.about=registerinstructor['form']['value']["aboutinstructor"]
      this.registerinstructor.salary=registerinstructor['form']['value']["salary"]
      this.registerinstructor.address.address1=registerinstructor['form']['value']["firstaddress"]
      this.registerinstructor.address.address1=registerinstructor['form']['value']["secondaddress"]
      this.registerinstructor.address.city=registerinstructor['form']['value']["city"]
      this.registerinstructor.address.state=registerinstructor['form']['value']["state"]
      this.registerinstructor.address.pincode=registerinstructor['form']['value']["pincode"]

      console.log("payload is ------->",this.registerinstructor)

      this.addinstructor.instructoradd(this.registerinstructor, this.token).subscribe((res: any) => {
        console.log(res);
        if (res['message'] == "Successfully created the user") {
          this.sharedService.myRouteEmitter.emit('instructorlist');
          this.sharedService.refreshData.emit('true');
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Created User Successfully' })
          this.onCancelClick();

        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res })
        }
      }, (error) => {
        console.log("111. HTTP request error:", error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error["error"]["error"] });
      });
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' })
    }
  }



  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onCancelClick(): void {
    console.log("Close Function called")
    this.dialogRef.close();
  }



}
