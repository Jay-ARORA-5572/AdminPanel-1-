import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstituteserviceService } from './instituteservice.service';
import { SharedServicesService } from '../shared-services.service';
import { AddinstitutedialogComponent } from '../addinstitutedialog/addinstitutedialog.component';
import { UpdateinstitutedialogComponent } from '../updateinstitutedialog/updateinstitutedialog.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrl: './institute.component.css'
})
export class InstituteComponent {
  constructor(private dialog: MatDialog, private institutegetdataservice: InstituteserviceService, private sharedservice: SharedServicesService) { }

  mobnum: any;
  value: any = ""
  showAnotherComponent = false;
  mydata = true;
  search_bar: any = false;
  downloadicon = ""
  downloadicon1 = "up"
  singlecheck: any = [];
  searchby=""
  searcharray: any = [];
  token:any="";
  
  iscolumn: any = [
    { 'key': 'institutionId', 'show': 'ID' },
    { 'key': 'institutionname', 'show': 'Institution Name' },
    { 'key': 'landmark', 'show': 'Institution Address' },
    { 'key': 'landmark', 'show': 'Landmark' },
    { 'key': 'email', 'show': 'Email Id' },
    { 'key': 'mobile', 'show': 'Mobile Number' },
    { 'key': 'zipcode', 'show': 'Pin Code' },
  ];  




  ngOnInit(): void {
    // this.donut();
    // this.barchart();
    this.token=localStorage.getItem("accesstoken");    
    this.getdata();
    this.sharedservice.refreshData.subscribe((data: string) => {
      console.log('Received event:', data);
      this.getdata();
    });
  }

  getdata() {
    console.log("call get data");
    this.searcharray = [];
    this.searchby=""
    this.institutegetdataservice.institutegetdata(this.token).subscribe((res: any) => {
      console.log("API res --",res);
      let data: any = res;
      for (let i of data) {
        let obj: any = {};
        obj['institutionname'] = i['instituionname']
        obj['location'] = i['location']['baseAddress']
        obj['landmark'] = i['location']['landmark']
        obj['zipcode'] = i['location']['zipcode']
        obj['mobile'] = i['contact']['mobnum']
        obj['email'] = i['contact']['emailid']
        obj["institutionId"] = i["institutionId"]
        this.searcharray.push(obj);
      }
      console.log(this.searcharray);
    });

  }

  toggleAnotherComponent() {
    // studentadd      
    // this.route.navigate(["studentadd"])
    this.mydata = false
    this.showAnotherComponent = !this.showAnotherComponent;

  }


  addInstitute() {
    const dialogRef = this.dialog.open(AddinstitutedialogComponent, {
      width: "60%",
      height: "50%",
      // data:{
      //   "Manual_journal":JSON.parse(this.logindata)
      // } 
    });
  }

  viewfunc(event: any) {
    console.log("View Function Called");
    console.log(event);
    this.sharedservice.setSharedData(event);
    const dialogRef = this.dialog.open(UpdateinstitutedialogComponent, {
      width: "60%",
      height: "50%",  
      // data:event
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed with result:', result);
      // Here you can use the 'result' from the dialog if needed
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

  searching(){
    let obj: any = {};
    obj['institutionId'] = this.searchby;
    this.searcharray = []
    this.institutegetdataservice.institutedataget(obj,this.token).subscribe((res: any) => {
      console.log(res)
      if (res["error"] != "Institution Not Found") {
        let value = []
        let obj: any = {}
        obj["address"] = res["address"]
        obj["contact"] = res["contact"]
        obj["instituionname"] = res["instituionname"]
        obj["institutionId"] = res["institutionId"]
        value.push(obj);

        for (let i of value) {
          console.log("landmark :-", i)
          let data: any = {}
          data['instituionname'] = i["instituionname"]
          data["address"] = i['address']['baseaddress']
          data['landmark'] = i['address']['landmark']
          data['zipcode'] = i['address']['zipcode']
          data['mobile'] = i['contact']['mobnum']
          data['email'] = i['contact']['emailid']
          data['institutionId'] = i["institutionId"]
          this.searcharray.push(data);
        }
        let filform: any = document.getElementById('filterForm');
        filform.reset();
      }
      else {
        this.getdata();
      }
    })
  
  }


  resetFilter() {
    this.getdata();
    let filform: any = document.getElementById('filterForm');
    filform.reset();
  }

  searchbar() {
    this.search_bar = true;
    this.downloadicon = "down"
    this.downloadicon1 = ""
  }

  close_search_bar() {
    this.search_bar = false;
    this.downloadicon = ""
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


}
