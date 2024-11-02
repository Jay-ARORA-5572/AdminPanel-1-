import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedServicesService } from '../shared-services.service';
import { BranchdataserviceService } from './branchdataservice.service';
import { AddbranchdialogComponent } from '../addbranchdialog/addbranchdialog.component';
import { UpdatebranchdialogComponent } from '../updatebranchdialog/updatebranchdialog.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrl: './branch.component.css'
})
export class BranchComponent {
  constructor(private route: Router, private dialog: MatDialog,private sharedservice: SharedServicesService,private branchdataget : BranchdataserviceService) { }

  value: any = ""
  showAnotherComponent = false;
  search_bar:any=false;
  mydata = true
  searcharray: any = [];
  totalbranch=0
  singlecheck:any=[];
  downloadicon=""
  downloadicon1="up"
  token:any="";

  iscolumn: any = [
    { 'key': 'branchId', 'show': 'Branch Id ' },
    { 'key': 'branchName', 'show': 'Branch Name' },
    { 'key': 'username', 'show': 'User Name' },
    { 'key': 'baseaddress', 'show': 'Branch Address' },
    { 'key': 'landmark', 'show': 'Landmark'},
    { 'key': 'pincode', 'show': 'Pin Code'},
    { 'key': 'contact', 'show': 'Contact' },
  ];


  ngOnInit(): void {
    this.token=localStorage.getItem("accesstoken")
    this.getdata();
    this.sharedservice.refreshData.subscribe((data: string) => {
      this.getdata();
    });

  }
  


  getdata() {
    this.searcharray = [];
    this.branchdataget.branchdataget(this.token).subscribe((res: any) => {
      console.log(res);
      let data: any = res;
      this.totalbranch=0
      for (let i of data) {
        let obj: any = {};
        this.totalbranch+=1
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
    });
  }


  toggleAnotherComponent() {
    // studentadd      
    // this.route.navigate(["studentadd"])
    this.mydata = false
    this.showAnotherComponent = !this.showAnotherComponent;

  }


  addBranch() {
    const dialogRef = this.dialog.open(AddbranchdialogComponent, {
      width: "60%",
      height: "55%",
    });
  }


  viewfunc(event: any) {
    this.sharedservice.setSharedData(event);
    const dialogRef = this.dialog.open(UpdatebranchdialogComponent, {
      width: "60%",
      height: "55%",
    }); 
  }



  checkbox(event: any) {
    console.log(event);
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

  filterrow(){
    console.log("search function....");
  // this.service.tablefillter(this.searchby).subscribe((res: Response) => {
  //     console.log(res);
  //     this.searcharray=res;
      // this.tabledata=res;
    // });
  }

  searching(){
    console.log("search function....");
  }

  resetFilter(){
    this.getdata();
    let filform:any=document.getElementById('filterForm');
    filform.reset();
  }

  searchbar(){
    this.search_bar=true;
    this.downloadicon="down"
    this.downloadicon1=""
  }

  deletedata(){
    let check:any=document.getElementById('allcheck');
    check.checked=false;
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

    
  close_search_bar(){
    this.search_bar=false;
    this.downloadicon=""
  }
  


}
