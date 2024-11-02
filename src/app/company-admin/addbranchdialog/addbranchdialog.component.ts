import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { Branch } from './addbranch_variables';
import { BrachaddServicesService } from './brachadd-services.service';
import { SharedServicesService } from '../shared-services.service';

@Component({
  selector: 'app-addbranchdialog',
  templateUrl: './addbranchdialog.component.html',
  styleUrl: './addbranchdialog.component.css'
})
export class AddbranchdialogComponent {



  constructor(private messageService:MessageService,public dialogRef: MatDialogRef<AddbranchdialogComponent>,private branchservices:BrachaddServicesService,private sharedservice:SharedServicesService) {}
  token:any="";
  imgsrc:any="";
  hide=true;
  branchdata: Branch = {
    branchName: '',
    contact:'',
    city:'',
    username:'',
    password:'',
    location: {
      baseaddress: '',
      landmark: '',
      pincode: ''
    },
  };

  iscolumn: any = [
    { 'key': 'institutionId', 'show': 'Institute Id' },
    { 'key': 'instituionname', 'show': 'Institution Name' },
    { 'key': 'address', 'show': 'Institution Address' },
    { 'key': 'landmark', 'show': 'Landmark'},
    { 'key': 'email', 'show': 'Email Id' },
    { 'key': 'contact', 'show': 'Contact' },
    { 'key': 'zipcode', 'show': 'Pin Code' },
  ];

  ngOnInit(): void {
    this.token=localStorage.getItem("accesstoken")
    console.log("add branch")
  
    
  }
  


  readURL(input:any) {
    if (input.target.files && input.target.files[0]) {
      const file = input.target.files[0];
      const reader = new FileReader();
      reader.onload = (e:any) => {
        this.imgsrc = reader.result;
      }
      reader.readAsDataURL(file);
    }
  }


 
  
  addbranch(values:any){
    let valid;
    valid=values['form']['status']
    console.log(valid)
    this.branchdata.branchName=values['form']['value']['branchName'];
    this.branchdata.contact=values['form']['value']['contact'];
    this.branchdata.username=values['form']['value']['username'];
    this.branchdata.password=values['form']['value']['password'];
    this.branchdata.city=values['form']['value']['city'];
    this.branchdata.location.baseaddress=values['form']['value']['baseaddress'];
    this.branchdata.location.landmark=values['form']['value']['landmark'];
    this.branchdata.location.pincode=values['form']['value']['pincode'];
    console.log(this.branchdata)
    if (valid=="VALID"){
      this.branchservices.addbranch(this.branchdata,this.token).subscribe((res:any) =>{
       console.log(res);
       if (res['messege']=="Branch created successfully"){
         this.sharedservice.myRouteEmitter.emit('Branch Sections');
         this.sharedservice.refreshData.emit('true');
         values['form'].reset();
         this.onCancelClick();
       }
       else{
         this.messageService.add({ severity: 'error', summary: 'Error', detail: res["messege"] })
       }
     });
   }
   else{
       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' })
   }

  }
  



  onCancelClick(): void {
    this.dialogRef.close();
  }
  

}
