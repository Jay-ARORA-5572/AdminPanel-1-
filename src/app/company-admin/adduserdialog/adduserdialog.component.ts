import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { Userdata } from './useradd-variables';
import { SharedServicesService } from '../shared-services.service';
import { UseraddservicesService } from './useraddservices.service';
;

@Component({
  selector: 'app-adduserdialog',
  templateUrl: './adduserdialog.component.html',
  styleUrl: './adduserdialog.component.css'
})
export class AdduserdialogComponent {

  constructor(private messageService: MessageService, public dialogRef: MatDialogRef<AdduserdialogComponent>, private useradd: UseraddservicesService, private sharedservice:SharedServicesService) { }

  imgsrc: any = "";
  hide = true;
  token:any=""

  uservalue: Userdata = {
    name: "",
    role: "",
    rolekey:"",
    aadharnumber: 0,
    username: "",
    password: "",
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

  selectedRole: any;
  dropdowndata:any=[]
  showdropdownins=false
  showdropdownbra=false
  Id:any;



  ngOnInit(): void {
    this.token=localStorage.getItem("accesstoken");
    console.log("add user api called ")
    // console.log((this.token))
  }
  

  readURL(input: any) {
    if (input.target.files && input.target.files[0]) {
      const file = input.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imgsrc = reader.result;
      }
      reader.readAsDataURL(file);
    }
  }


  adduser(values: any) {
    console.log(values['form']['value'])
    let valid;
    valid = values['form']['status']
    console.log(valid)
    this.uservalue.name = values['form']['value']['name'];
    this.uservalue.role = values['form']['value']['role'];
    this.uservalue.aadharnumber = parseInt(values['form']['value']['aadharnumber'], 10);
    this.uservalue.username = values['form']['value']['username'];
    this.uservalue.password = values['form']['value']['password'];

    this.uservalue.address.housenumber = values['form']['value']['housenumber'];
    this.uservalue.address.zipcode = parseInt(values['form']['value']['zipcode']);
    this.uservalue.address.landmark = values['form']['value']['landmark'];
    // this.uservalue.address.country=values['form']['value']['country'];
    this.uservalue.address.country = "India"
    this.uservalue.address.state = values['form']['value']['state'];
    this.uservalue.address.city = values['form']['value']['city'];

    this.uservalue.contactdetail.mobnum = parseInt(values['form']['value']['mobnum']);
    this.uservalue.contactdetail.emailid = values['form']['value']['emailid'];
    this.uservalue.rolekey = this.Id;
    

    console.log(this.uservalue)
    this.token=localStorage.getItem("accesstoken");

    if (valid == "VALID") {
      this.useradd.newuseradd(this.uservalue,this.token).subscribe((res: any) => {
        console.log("Response from server:----", res);
        if (res['message'] == "Successfully Create the User") {
          this.sharedservice.myRouteEmitter.emit('Add User'); 
          this.sharedservice.refreshData.emit('true');
          values['form'].reset();
          this.onCancelClick();
        } else {
          console.log("Error adding user:", res["error"]);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res["error"] });
        }
      }, 
      (error) => {
        console.log("HTTP request error:", error["error"]);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error["error"]["error"]});
      });
    } 
    
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' });
    }


  }

  onCancelClick(): void {
    this.dialogRef.close();
  }


  onRoleChange(){
    console.log(this.selectedRole)
    if (this.selectedRole=="institute"){
      this.getallinstitutedata();
      this.showdropdownins=true
      this.showdropdownbra=false
    }
    else if (this.selectedRole=="branch"){
      this.getallbranchdata();
      this.showdropdownins=false
      this.showdropdownbra=true
    }
    else{
      this.showdropdownins=false
      this.showdropdownbra=false
    }
  }

  getallinstitutedata(){
    this.useradd.datagetallinstitute(this.token).subscribe((res:any)=>{
      console.log(res)
      this.dropdowndata=[]
      let data: any = res;
      for (let i of data) {
        let obj: any = {};
        obj["institutionId"] = i["institutionId"]
        obj['instituionname'] = i['instituionname']
        this.dropdowndata.push(obj);
      }
    });
  }

  getallbranchdata(){
    this.useradd.branchdataget(this.token).subscribe((res:any)=>{
      console.log(res)
      this.dropdowndata=[]
      let data: any = res;
      for (let i of data) {
        let obj: any = {};
        obj["branchId"] = i["branchId"]
        obj['branchName'] = i['branchName']
        this.dropdowndata.push(obj);
      }
    });
  }




  onInstitutionChange(event: any){
    this.Id= event.value;
  }

  onBranchhange(event: any){
    this.Id= event.value;
  }



}

