import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AddinstituteServicesService } from './addinstitute-services.service';
import { SharedServicesService } from '../shared-services.service';
import { Institution } from './addinstitute-varibale';

@Component({
  selector: 'app-addinstitutedialog',
  templateUrl: './addinstitutedialog.component.html',
  styleUrl: './addinstitutedialog.component.css'
})
export class AddinstitutedialogComponent {



  constructor(private messageService:MessageService,public dialogRef: MatDialogRef<AddinstitutedialogComponent>, private instituteaddservice:AddinstituteServicesService,private sharedservice:SharedServicesService) { }

  imgsrc:any="";
  token:any="";

  institutionData: Institution = {
    institutionname: '',
    // icon:'',
      location: {
        baseAddress: '',
        landmark: '',
        zipcode: ''
      },
      contact: {
        mobnum: 0,
        emailid: ''
      }    
  };

  ngOnInit(): void {
    this.token=localStorage.getItem("accesstoken");
    console.log("add user api called ")
    // console.log((this.token))
  
  }
  


  onCancelClick(): void {
    this.dialogRef.close();
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


  addinstitutes(values:any){
    let valid;
    valid=values['form']['status']
    console.log(valid)
    this.institutionData.location.baseAddress=values['form']['value']['baseAddress'];
    this.institutionData.location.landmark=values['form']['value']['landmark'];
    this.institutionData.contact.mobnum=Number(values['form']['value']['mobnum']);
    this.institutionData.contact.emailid=values['form']['value']['emailid'];
    this.institutionData.institutionname=values['form']['value']['institutionname'];
    this.institutionData.location.zipcode=values['form']['value']['zipcode'];
    // this.institutionData.icon=this.imgsrc;
    // console.log(this.institutionData);
    if (valid=="VALID"){
       this.instituteaddservice.institutedata(this.institutionData,this.token).subscribe((res:any) =>{
        console.log(res);
        if (res['message']=="Successfully Created Institute"){
          this.sharedservice.myRouteEmitter.emit('Institute Sections');
          this.sharedservice.refreshData.emit('true');
          values['form'].reset();
          this.onCancelClick();
        }
        else{
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res })
        }
      });
    }

    else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' })
    }
  }  
}
