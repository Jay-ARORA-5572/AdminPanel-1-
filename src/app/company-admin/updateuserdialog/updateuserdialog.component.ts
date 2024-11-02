import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SharedServicesService } from '../shared-services.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Userdata } from '../adduserdialog/useradd-variables';

@Component({
  selector: 'app-updateuserdialog',
  templateUrl: './updateuserdialog.component.html',
  styleUrl: './updateuserdialog.component.css'
})
export class UpdateuserdialogComponent {


  constructor(private messageService:MessageService,private dataService: SharedServicesService,public dialogRef: MatDialogRef<UpdateuserdialogComponent>) {}

  imgsrc: any = "";
  hide = true;
  
  userId:string=''

  uservalue: Userdata = {
    name: "",
    role: "",
    rolekey:'',
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
    },
  };


  ngOnInit(): void {
    
    let data:any='';
    data=this.dataService["sharedData"];
    
    console.log("data is ---",data)
    this.uservalue.name = data["name"];
    this.userId=data["userId"]
    this.uservalue.role = data['role'];
    this.uservalue.aadharnumber =data["aadharnumber"];
    this.uservalue.username = data["username"];
    this.uservalue.password =data['password'];
    this.uservalue.address.city = data["city"];    
    this.uservalue.address.housenumber =data["housenumber"];
    this.uservalue.address.zipcode =data["zipcode"];
    this.uservalue.address.landmark =data["landmark"];
    this.uservalue.address.state =data["state"];
    this.uservalue.contactdetail.emailid=data["emailid"];
    this.uservalue.contactdetail.mobnum=data["mobnum"]    
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


 
  updateuser(values:any){
    let valid;
    valid = values['form']['status']
    console.log(valid)
    this.uservalue.name = values['form']['value']['name'];
    this.uservalue.role = values['form']['value']['role'];
    this.uservalue.aadharnumber = parseInt(values['form']['value']['aadharnumber'], 10);
    this.uservalue.username = values['form']['value']['username'];

    this.uservalue.address.housenumber = values['form']['value']['housenumber'];
    this.uservalue.address.zipcode = parseInt(values['form']['value']['zipcode']);
    this.uservalue.address.landmark = values['form']['value']['landmark'];
    this.uservalue.address.country = "India"
    this.uservalue.address.state = values['form']['value']['state'];
    this.uservalue.address.city = values['form']['value']['city'];

    this.uservalue.contactdetail.mobnum = parseInt(values['form']['value']['mobnum']);
    this.uservalue.contactdetail.emailid = values['form']['value']['emailid'];
    console.log(this.uservalue)

    
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
