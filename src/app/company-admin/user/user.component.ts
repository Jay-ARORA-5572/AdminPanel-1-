import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UseraddServiceService } from './useradd-service.service';
import { SharedServicesService } from '../shared-services.service';
import { AdduserdialogComponent } from '../adduserdialog/adduserdialog.component';
import { UpdateuserdialogComponent } from '../updateuserdialog/updateuserdialog.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  value: any = ""
  showAnotherComponent = false;
  mydata = true;

  searcharray: any = []
  search_bar: any = false;
  singlecheck: any = [];

  searchby: any = '';
  token:any='';
  activeuser=0;

  
  iscolumn: any = [
    { 'key': 'userId', 'show': 'userId' },
    { 'key': 'username', 'show': 'User Name'},
    { 'key': 'emailid', 'show': 'Email Id' },
    { 'key': 'aadharnumber', 'show': 'Id Proof' },
    { 'key': 'role', 'show': 'Role' }, 
    { 'key': 'mobnum', 'show': 'Mobile No.'},
    { 'key': 'city', 'show': 'City' },
  ];


  constructor(private route: Router, private dialog: MatDialog,private userdetagetservices:UseraddServiceService,private sharedservice: SharedServicesService) { }
  ngOnInit(): void {
    // this.donut();
    // this.barchart();
    this.getdata();
    this.sharedservice.refreshData.subscribe((data: string) => {
      console.log('Received event:', data);
      this.getdata();
    });
  }
  

  

  getdata() {
    this.token = localStorage.getItem('accesstoken');
    this.userdetagetservices.userdataget(this.token).subscribe((res: any) => {
      console.log("56.----->",res)
      let data: any = res;
      for (let i of data) {
        this.activeuser+=1
        let obj: any = {};
        obj['name']=i['firstname']
        obj["userId"] = i["userId"]
        obj['username'] = i['username']
        obj['aadharnumber'] = i['aadharnumber']
        obj['role'] = i['role']
        obj['emailid'] = i['contactdetail']['emailid']
        obj['mobnum'] =i["contactdetail"]['mobnum']
        obj['city'] = i['address']['city']
        obj['housenumber']=i["address"]["housenumber"]
        obj['state']=i["address"]["state"]
        obj['zipcode']=i["address"]["zipcode"]
        obj['landmark']=i["address"]["landmark"]
        this.searcharray.push(obj);
      } 

    });
  }



  toggleAnotherComponent() {
    // studentadd      
    // this.route.navigate(["studentadd"])
    this.mydata = false
    this.showAnotherComponent = !this.showAnotherComponent;

  }



  adduser() {
    const dialogRef = this.dialog.open(AdduserdialogComponent, {
      width: "65%",
      height:"80%",
    });
  }



  viewfunc(event: any) {
    this.sharedservice.setSharedData(event);
    const dialogRef = this.dialog.open(UpdateuserdialogComponent, {
      width: "63vw",
      height: "70vh",
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed with result:', result);
      // Here you can use the 'result' from the dialog if needed
    });

  }

  checkbox(event: any) {
    console.log(event);
  }

  onEnterKeyPressed(value: any) {
  }

  searching() { }


  resetFilter() {
    // this.getdata();
    let filform: any = document.getElementById('filterForm');
    filform.reset();
  }

  searchbar() {
    this.search_bar = true;

  }

  close_search_bar() {
    this.search_bar = false;
  }

  deletedata() {
    let check: any = document.getElementById('allcheck');
    check.checked = false;
    // this.service.Deleterecord(this.singlecheck).subscribe((res: Response) => {
    //   console.log("-------"+res)
    //   let finalresponse:any = res;
    //   if(finalresponse == "Deleted Successfully"){
    //     this.getdata();
    //     this.singlecheck=[];
    //     this.openSnackBar(finalresponse,"green_snackbar");
    //     }
    //     else{
    //     this.openSnackBar(finalresponse,"red_snackbar");
    //     }
    //  });
  }


  download(data: any) {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    ws['!cols'] = [{ width: 25 }, { width: 25 }, { width: 25 }];
    Object.keys(ws).forEach((cell) => {
      if (cell !== '!ref' && cell !== '!margins' && cell !== '!cols') {
        ws[cell].s = { ...ws[cell].s, padding: { top: 5, bottom: 5, left: 5, right: 5 } };
      }
    });

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `Institute.xlsx`);
    console.log("download");
  }


}
