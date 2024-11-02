import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedServicesService } from '../shared-services.service';
import { AddjobpostDialogComponent } from '../addjobpost-dialog/addjobpost-dialog.component';
import { UpdatejobpostdialogComponent } from '../updatejobpostdialog/updatejobpostdialog.component';
import * as XLSX from 'xlsx';
import { JobposterservicesService } from './jobposterservices.service';

@Component({
  selector: 'app-jobposter',
  templateUrl: './jobposter.component.html',
  styleUrl: './jobposter.component.css'
})
export class JobposterComponent {

  value:any=""
  showAnotherComponent = false;
  mydata=true;
  singlecheck: any = [];
  search_bar: any = false;
  downloadicon = "";
  downloadicon1 = "up";
  searchby="";
  token:any="";
  searcharray:any=[]
  jobshow=false
  jobVisibility = {};

  jobslist={
    "Private Jobs":["Contract","Full Time","Internship","Part Time","Remote","Training"],
    "Goverment Jobs":["SSC","PSU","Seceretary","Defence Jobs","Indian Bank SO","RPF Costable exam","Stenographer","RRB","IPS Officer","Banks Jobs","Divisional Commissioner"]
  }

  privatejob:any;
  govtjobs:any;
  constructor(private route:Router,private dialog: MatDialog,private sharedservice: SharedServicesService,private jobsposter:JobposterservicesService){

// Initialize all categories to be hidden initially
  
  }
  ngOnInit(): void {
    this.token=localStorage.getItem("accesstoken"); 
    this.getdata()
    this.privatejob=this.jobslist['Private Jobs'];
    this.govtjobs=this.jobslist["Goverment Jobs"]

  }
  
    toggleAnotherComponent(){
      // studentadd      
      // this.route.navigate(["studentadd"])
      this.mydata=false
      this.showAnotherComponent = !this.showAnotherComponent;
      
    }

    getdata() {
      console.log("call get data");
      this.searcharray = [];
      this.searchby=""
      this.jobsposter.getalljobs(this.token).subscribe((res: any) => {
        // console.log("API res --",res);
        let data: any = res;
        for (let i of data) {
          let obj: any = {};
          obj['department'] = i['department']
          obj['govtjobtittle'] = i['govtjobtittle']
          obj['govtjobid'] = i['govtjobid']
          obj['age_limit'] = i["minage"] + "-" +i["maxage"]
          obj['qualification'] = i["educationalqualifications"]
          obj['male'] = i['malevency']
          obj['female'] = i['femalevency']
          obj['fee'] = i['registrationfee']
          obj['totalvacancy'] = i['totalvency']
          obj['lastdate'] = i['lastdate']
          obj["city"] = i["location"]["city"]
          obj["state"] = i["location"]["state"]
          this.searcharray.push(obj);
        }
        console.log(this.searcharray);
      });
  
    }

    viewfunc(event: any) {
      console.log("View Function Called");
      console.log(event);
      this.sharedservice.setSharedData(event);
      const dialogRef = this.dialog.open(UpdatejobpostdialogComponent, {
        width: "58vw",
        height: "55vh",
        // data:event
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog was closed with result:', result);
        // Here you can use the 'result' from the dialog if needed
      });
  
    }
  
    checkbox(event:any){
      console.log(event);
    }

    addjobposter() {
      const dialogRef = this.dialog.open(AddjobpostDialogComponent, {
        width: "70vw",
        height: "80vh",
        // data:{
        //   "Manual_journal":JSON.parse(this.logindata)
        // } 
      });
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
    // let obj: any = {};
    // obj['institutionId'] = this.searchby;
    // this.searcharray = []
    // this.institutegetdataservice.institutedataget(obj).subscribe((res: any) => {
    //   console.log(res)
    //   if (res["error"] != "Institution Not Found") {
    //     let value = []
    //     let obj: any = {}
    //     obj["address"] = res["address"]
    //     obj["contact"] = res["contact"]
    //     obj["instituionname"] = res["instituionname"]
    //     obj["institutionId"] = res["institutionId"]
    //     value.push(obj);

    //     for (let i of value) {
    //       console.log("landmark :-", i)
    //       let data: any = {}
    //       data['instituionname'] = i["instituionname"]
    //       data["address"] = i['address']['baseaddress']
    //       data['landmark'] = i['address']['landmark']
    //       data['zipcode'] = i['address']['zipcode']
    //       data['mobile'] = i['contact']['mobnum']
    //       data['email'] = i['contact']['emailid']
    //       data['institutionId'] = i["institutionId"]
    //       this.searcharray.push(data);
    //     }
    //     let filform: any = document.getElementById('filterForm');
    //     filform.reset();
    //   }
    //   else {
    //     this.getdata();
    //   }
    // })
  
  }


  resetFilter() {
    // this.getdata();
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



  // Singal Checkedbox
  // singlechecked(event:any){
  //     console.log(event)
    // if(event.target.checked==true){
    //   this.checked_data.push(data);
    // }
    // if(event.target.checked==false){
    //   const index: number = this.checked_data.indexOf(data.id);
    //   this.checked_data.splice(index, 1);
    //   let check:any=document.getElementById('allcheck');
    //   check.checked=false;
    // }
    // this.selectedRow.emit(this.checked_data);
  // }

 

  show(category: string): void {
    console.log(category)
    // Toggle the visibility state for the given category
    // this.jobVisibility[category] = !this.jobVisibility[category];
  }

  singlechecked(jobType: string): void {
    console.log(`${jobType} checkbox clicked`);
  }

  jobposterlist=[
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Social Media Expert",
        "location": "Gurgaon",
        "category": "Marketing & Communication",
        "date": "June 8, 2022",
        "jobstype": "Full time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Social Media Expert",
        "location": "Gurgaon",
        "category": "Marketing & Communication",
        "date": "June 8, 2022",
        "jobstype": "Part Time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Social Media Expert",
        "location": "Gurgaon",
        "category": "Marketing & Communication",
        "date": "June 8, 2022",
        "jobstype": "Govt type"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Social Media Specialist",
        "location": "Mumbai",
        "category": "Marketing & Communication",
        "date": "July 10, 2022",
        "jobstype": "Full time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Content Writer",
        "location": "Bangalore",
        "category": "Content Creation",
        "date": "August 15, 2022",
        "jobstype": "Part Time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "SEO Analyst",
        "location": "Hyderabad",
        "category": "Marketing & Communication",
        "date": "September 1, 2022",
        "jobstype": "Full time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Digital Marketing Manager",
        "location": "Delhi",
        "category": "Marketing & Communication",
        "date": "October 12, 2022",
        "jobstype": "Full time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Graphic Designer",
        "location": "Chennai",
        "category": "Design",
        "date": "November 25, 2022",
        "jobstype": "Part Time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "PR Specialist",
        "location": "Pune",
        "category": "Public Relations",
        "date": "December 5, 2022",
        "jobstype": "Full time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Marketing Coordinator",
        "location": "Ahmedabad",
        "category": "Marketing & Communication",
        "date": "January 15, 2023",
        "jobstype": "Full time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "UX/UI Designer",
        "location": "Kolkata",
        "category": "Design",
        "date": "February 20, 2023",
        "jobstype": "Part Time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Marketing Intern",
        "location": "Gurgaon",
        "category": "Marketing & Communication",
        "date": "March 8, 2023",
        "jobstype": "Internship"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Social Media Manager",
        "location": "Gurgaon",
        "category": "Marketing & Communication",
        "date": "April 18, 2023",
        "jobstype": "Full time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Content Strategist",
        "location": "Gurgaon",
        "category": "Content Creation",
        "date": "May 25, 2023",
        "jobstype": "Part Time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Email Marketing Specialist",
        "location": "Gurgaon",
        "category": "Marketing & Communication",
        "date": "June 8, 2023",
        "jobstype": "Full time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Brand Manager",
        "location": "Gurgaon",
        "category": "Marketing & Communication",
        "date": "July 10, 2023",
        "jobstype": "Full time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Marketing Analyst",
        "location": "Gurgaon",
        "category": "Marketing & Communication",
        "date": "August 15, 2023",
        "jobstype": "Part Time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Social Media Consultant",
        "location": "Gurgaon",
        "category": "Marketing & Communication",
        "date": "September 1, 2023",
        "jobstype": "Contract"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Community Manager",
        "location": "Gurgaon",
        "category": "Marketing & Communication",
        "date": "October 12, 2023",
        "jobstype": "Full time"
    },
    {
        "icon": "../../../assets/adminsidebaricon/totaljobpost.png",
        "title": "Social Media Assistant",
        "location": "Gurgaon",
        "category": "Marketing & Communication",
        "date": "November 25, 2023",
        "jobstype": "Part Time"
    }
]


}
