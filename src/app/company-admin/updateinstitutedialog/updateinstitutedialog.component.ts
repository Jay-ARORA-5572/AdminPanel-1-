import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { SharedServicesService } from '../shared-services.service';
import { UpdateinstituteServiceService } from './updateinstitute-service.service';
import { Institution } from '../addinstitutedialog/addinstitute-varibale';
// import { MessageService } from 'primeng/api/messageservice';

@Component({
  selector: 'app-updateinstitutedialog',
  templateUrl: './updateinstitutedialog.component.html',
  styleUrl: './updateinstitutedialog.component.css'
})
export class UpdateinstitutedialogComponent {

  constructor(private messageService:MessageService,public dialogRef: MatDialogRef<UpdateinstitutedialogComponent>,private dataService: SharedServicesService,private updatadata:UpdateinstituteServiceService) {}
  
  dialogData:any;
  imgsrc:any=""
  institutionId:any;
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
    let data:any;
    data=this.dataService["sharedData"]
    this.institutionId=data["institutionId"];
    this.institutionData.institutionname=data["institutionname"];
    this.institutionData.location.baseAddress=data["address"];
    this.institutionData.location.landmark=data["landmark"];
    this.institutionData.location.zipcode=data["zipcode"]; 
    this.institutionData.contact.emailid=data["email"]; 
    this.institutionData.contact.mobnum=data["mobile"];  
  }


  onCancelClick(): void {
    // console.log(this.dialogRef);
    this.dialogRef.close();
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

  updateinstitute(values:any){
    let valid;
    valid=values['form']['status']
    let dictxx:any={}
    dictxx["institutionId"]=this.institutionId
    dictxx["data"]={}
    dictxx["institutionname"]=values['form']['value']['institutionname'],   
    dictxx["data"]["location"]={}
    //  dictxx["data"]["location"]["baseAddress"]=values['form']['value']['baseAddress'];
     dictxx["data"]["location"]["landmark"]=values['form']['value']['landmark'];
     dictxx["data"]["location"]["landmark"]=values['form']['value']['landmark'];
     dictxx["data"]["location"]["zipcode"]=values['form']['value']['zipcode'];
     dictxx["data"]["contact"]={}
     dictxx["data"]["contact"]["mobnum"]=values['form']['value']['mobnum']
     dictxx["data"]["contact"]["emailid"]=values['form']['value']['emailid']

    // this.institutionData.icon=this.imgsrc;
    console.log(dictxx);
    if (valid=="VALID"){
      this.updatadata.institutedataupadate(dictxx,this.token).subscribe((res:any) =>{
        console.log(res);
        if (res["message"]=="Successfully updated the Institute"){
          values['form'].reset();
          // this.dataService.myRouteEmitter.emit('Institute Sections');
          this.dataService.refreshData.emit('true');
          this.onCancelClick();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: res["message"]})
        }
        else{
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res})
        }
      });
   
    }
    else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' })
    }
  }


}
