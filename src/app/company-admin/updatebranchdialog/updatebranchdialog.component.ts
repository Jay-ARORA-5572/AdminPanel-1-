import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { Branch } from '../addbranchdialog/addbranch_variables';
import { SharedServicesService } from '../shared-services.service';
import { BranchupdateservicesnService } from './branchupdateservicesn.service';

@Component({
  selector: 'app-updatebranchdialog',
  templateUrl: './updatebranchdialog.component.html',
  styleUrl: './updatebranchdialog.component.css'
})
export class UpdatebranchdialogComponent {

  constructor(private messageService:MessageService,public dialogRef: MatDialogRef<UpdatebranchdialogComponent>,private branchupdate:BranchupdateservicesnService,private sharedservice:SharedServicesService,private dataService: SharedServicesService) {}

  hide = true;
  imgsrc:any="";
  branchId:any;
  searcharray: any = [];
  token:any="";

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


  ngOnInit(): void {
    this.token=localStorage.getItem("accesstoken"); 
    this.getdata()
    let data:any;
    data=this.dataService["sharedData"];
    console.log("branch dialog")
    console.log(data)
    this.branchdata.branchName=data["branchName"];
    this.branchId=data["branchId"];
    this.branchdata.contact=data["contact"];
    this.branchdata.city=data["city"];
    this.branchdata.username=data["username"];
    this.branchdata.password=data["password"];
    this.branchdata.location.baseaddress=data["baseaddress"];
    this.branchdata.location.landmark=data["landmark"];
    this.branchdata.location.pincode=data["pincode"]
  }

  getdata() {
    this.searcharray = [];

    this.branchupdate.branchdataget(this.token).subscribe((res: any) => {
      console.log(res);
      let data: any = res;
      for (let i of data) {
        let obj: any = {};
        obj["branchId"] = i["branchId"]
        obj['branchName'] = i['branchName']
        obj['contact'] = i['contact']
        obj['city'] = i['city']
        obj['username'] = i['username']
        obj['baseaddress'] = i['location']['baseaddress']
        obj['landmark'] = i['location']['landmark']
        obj['pincode'] = i['location']['pincode']
        this.searcharray.push(obj);
      }
      console.log("call get data");
      console.log(this.searcharray);
      console.log("call get data");

    });
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


 

  updatebranch(values:any){
    let valid;
    valid=values['form']['status']
    let dictxx:any={}
    dictxx["branchId"]=this.branchId;
    dictxx["data"]={}
    dictxx["data"]["branchName"]=values['form']['value']['branchName'], 
    dictxx["data"]["city"]=values['form']['value']['city'];
    dictxx["data"]["contact"]=values['form']['value']['contact'];
    dictxx["data"]["username"]=values["form"]["value"]["username"];
    dictxx["data"]["location"]={}
    dictxx["data"]["location"]["baseaddress"]=values['form']['value']['baseaddress'];
    dictxx["data"]["location"]["landmark"]=values['form']['value']['landmark'];
    dictxx["data"]["location"]["pincode"]=values['form']['value']['pincode'];
    console.log(dictxx);
    if (valid=="VALID"){
      console.log(dictxx);
      this.branchupdate.branchupdate(dictxx,this.token).subscribe((res:any) =>{
        console.log("branch update ---------->",res);
        if (res["message"]=="successfully Update the brnach"){
            values['form'].reset();
            this.sharedservice.myRouteEmitter.emit('Branch Sections');
            this.sharedservice.refreshData.emit('true');
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
  
  onCancelClick(): void {
    this.dialogRef.close();
  }

}
