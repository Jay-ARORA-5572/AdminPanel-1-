import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UseraddserviceService } from './useraddservice.service';
import { Userdata } from './useradd-variables';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-addstaffmanagement',
  templateUrl: './addstaffmanagement.component.html',
  styleUrl: './addstaffmanagement.component.css'
})
export class AddstaffmanagementComponent {

  constructor(private messageService: MessageService,private sharedService:SharedService,public dialogRef: MatDialogRef<AddstaffmanagementComponent>,public adduser:UseraddserviceService) { }

  imgsrc:any=""
  hide=true;
  instituteid:string="ujkgz1";
  token:any=""

  uservalue: Userdata = {
    name: "",
    role: "",
    aadharnumber: 0,
    ins_id:"",
    address: {
      housenumber: '',
      zipcode: 0,
      landmark: '',
      country: 'India',
      state: '',
      city: ''
    },
    contactdetail: {
      emailid: "",
      mobnum: 0
    }
  };


  ngOnInit(): void {
    this.token=localStorage.getItem("accesstoken");
    console.log("add user api called ")
    // console.log((this.token))
  }
  




  readURL(input:any) {
    if (input.target.files && input.target.files[0]) {
      const file = input.target.files[0];
      // this.formData.append("formimg",file);
      const reader = new FileReader();
      reader.onload = (e:any) => {
        this.imgsrc = reader.result;
        // this.img=e.target.result.toString();
      }
      reader.readAsDataURL(file);
    }
  }




  openToast(){
    console.log("call toast function----");
    // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    // this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    // this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    // this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }

  // addCourse(){
  //   console.log(this.coursedata)
  //   this.courseaddservice.coursedata(this.coursedata).subscribe((res:any) =>{
  //     console.log(res);
  //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Course add successfully' })
  //   });
  // }




  addstaff(values:any){
    console.log(values)
    let valid;
    valid=values['form']['status']
    // console.log(valid)
    this.uservalue.name=values['form']['value']['name'];
    this.uservalue.role=values['form']['value']['role'];
    this.uservalue.aadharnumber=values['form']['value']['aadharnumber'];
    this.uservalue.contactdetail.mobnum=values['form']['value']['mobnum'];
    this.uservalue.contactdetail.emailid=values['form']['value']['emailid'];
    this.uservalue.address.city=values['form']['value']['city'];
    this.uservalue.address.zipcode=values['form']['value']['zip'];
    this.uservalue.address.housenumber=values['form']['value']['housenumber'];
    this.uservalue.address.landmark=values['form']['value']['landmark'];
    this.uservalue.ins_id=this.instituteid
    console.log(this.uservalue)
 
    if (valid=="VALID"){
      // this.adduser.newuseradd(this.uservalue,this.token).subscribe((res:any) =>{
      //  console.log(res);
      //  if (res['messege']=="Successfully Create the User"){
      //    this.sharedService.myRouteEmitter.emit('Staff Management');
      //    this.sharedService.refreshData.emit('true');
      //    values['form'].reset();
      //    this.onCancelClick();
      //  }
      //  else{
        //  this.messageService.add({ severity: 'error', summary: 'Error', detail: res["messege"] })
         this.messageService.add({ severity: 'error', summary: 'Error', detail: "Required" })
    //    }
    //  });
   }
   else{
       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' })
   }

  }
  


  cancel (){
    console.log("cancel")
    // this.sharedService.myRouteEmitter.emit('Dashboard');
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
