import { Component } from '@angular/core';
import { UpdatestudentDialogComponent } from '../updatestudent-dialog/updatestudent-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddstudentComponent } from '../addstudent/addstudent.component';
import { AddviewmorestudentComponent } from '../addviewmorestudent/addviewmorestudent.component';
import { ConfirmationService } from 'primeng/api';
// import * as XLSX from 'xlsx';

interface City {
  name: string,
  icon: string
}

interface ViewOption {
  name: string,
  icon: string
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  constructor(private confirmationService: ConfirmationService, private route: Router, private dialog: MatDialog) { }

  first: number = 0;
  rows: number = 5;
  checkedall: boolean = false;
  checkedone: boolean = false;
  value: any = ""
  showAnotherComponent = false;
  search_bar: any = false;
  mydata = true
  searcharray: any = [];
  totalbranch = 0
  singlecheck: any = [];
  downloadicon = ""
  downloadicon1 = "up"

  cities!: City[];
  selectedCity!: City;

  viewOption!: ViewOption[];
  selectedOption!: ViewOption;
 
  
  // status
  statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Pending', value: 'Pending' },
    { label: 'Suspend', value: 'Suspend' }
  ];


  instructors = [
    {
      avatar: '../assets/playicon1.png',
      name: 'Abu Bin Ishtiyak',
      email: 'info@softnio.com',
      course: 'Front-end Development',
      phone: '+811 847-4958',
      country: 'United States',
      payment: 'Due',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Ashley Lawson',
      email: 'ashley@softnio.com',
      course: 'Responsive Design',
      phone: '+124 394-1787',
      country: 'United Kingdom',
      payment: 'Paid',
      status: 'Inactive'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Joe Larson',
      email: 'larson@example.com',
      course: 'Mobile Application',
      phone: '+168 603-2320',
      country: 'India',
      payment: 'Paid',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Jane Montgomery',
      email: 'jane84@example.com',
      course: 'UI/UX Design with Adobe XD',
      phone: '+439 271-5360',
      country: 'Canada',
      payment: 'Cancelled',
      status: 'Suspended'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Frances Burns',
      email: 'frances@example.com',
      course: 'Application Management',
      phone: '+639 130-3150',
      country: 'Australia',
      payment: 'Paid',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Michael Johnson',
      email: 'michael@example.com',
      course: 'Cloud Computing',
      phone: '+619 847-4958',
      country: 'New Zealand',
      payment: 'Due',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Anna Smith',
      email: 'anna@example.com',
      course: 'Machine Learning',
      phone: '+324 394-1787',
      country: 'Germany',
      payment: 'Paid',
      status: 'Inactive'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'David Wilson',
      email: 'david@example.com',
      course: 'Data Science',
      phone: '+234 603-2320',
      country: 'Nigeria',
      payment: 'Paid',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Emma Williams',
      email: 'emma@example.com',
      course: 'Cyber Security',
      phone: '+539 271-5360',
      country: 'Brazil',
      payment: 'Cancelled',
      status: 'Suspended'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Liam Brown',
      email: 'liam@example.com',
      course: 'Network Administration',
      phone: '+739 130-3150',
      country: 'South Africa',
      payment: 'Paid',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Olivia Davis',
      email: 'olivia@example.com',
      course: 'Blockchain Development',
      phone: '+881 847-4958',
      country: 'Japan',
      payment: 'Due',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Noah Martinez',
      email: 'noah@example.com',
      course: 'Artificial Intelligence',
      phone: '+134 394-1787',
      country: 'Spain',
      payment: 'Paid',
      status: 'Inactive'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Sophia Garcia',
      email: 'sophia@example.com',
      course: 'Robotics',
      phone: '+268 603-2320',
      country: 'Mexico',
      payment: 'Paid',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'James Lee',
      email: 'james@example.com',
      course: 'Quantum Computing',
      phone: '+339 271-5360',
      country: 'China',
      payment: 'Cancelled',
      status: 'Suspended'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Isabella Thomas',
      email: 'isabella@example.com',
      course: 'Augmented Reality',
      phone: '+439 130-3150',
      country: 'France',
      payment: 'Paid',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Mason Jackson',
      email: 'mason@example.com',
      course: 'Virtual Reality',
      phone: '+539 847-4958',
      country: 'Italy',
      payment: 'Due',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Evelyn White',
      email: 'evelyn@example.com',
      course: 'Game Development',
      phone: '+124 394-1787',
      country: 'South Korea',
      payment: 'Paid',
      status: 'Inactive'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Logan Harris',
      email: 'logan@example.com',
      course: 'DevOps Engineering',
      phone: '+234 603-2320',
      country: 'Singapore',
      payment: 'Paid',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Charlotte Clark',
      email: 'charlotte@example.com',
      course: 'Software Testing',
      phone: '+539 271-5360',
      country: 'Russia',
      payment: 'Cancelled',
      status: 'Suspended'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Lucas Lewis',
      email: 'lucas@example.com',
      course: 'Web Development',
      phone: '+739 130-3150',
      country: 'Sweden',
      payment: 'Paid',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Amelia Robinson',
      email: 'amelia@example.com',
      course: 'Mobile Development',
      phone: '+811 847-4958',
      country: 'Norway',
      payment: 'Due',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Benjamin Walker',
      email: 'benjamin@example.com',
      course: 'Embedded Systems',
      phone: '+124 394-1787',
      country: 'Denmark',
      payment: 'Paid',
      status: 'Inactive'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Mia Young',
      email: 'mia@example.com',
      course: 'IoT Development',
      phone: '+168 603-2320',
      country: 'Finland',
      payment: 'Paid',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Henry King',
      email: 'henry@example.com',
      course: 'Big Data Analytics',
      phone: '+439 271-5360',
      country: 'Iceland',
      payment: 'Cancelled',
      status: 'Suspended'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Ella Scott',
      email: 'ella@example.com',
      course: 'E-commerce Development',
      phone: '+639 130-3150',
      country: 'Portugal',
      payment: 'Paid',
      status: 'Active'
    },
    {
      avatar: '../assets/playicon1.png',
      name: 'Alexander Perez',
      email: 'alexander@example.com',
      course: 'Database Administration',
      phone: '+881 847-4958',
      country: 'Poland',
      payment: 'Due',
      status: 'Active'
    }
  ];


  iscolumn: any = [
    { 'key': 'branchId', 'show': 'Course ID ' },
    { 'key': 'branchName', 'show': 'Course Type' },
    { 'key': 'publish', 'show': 'Course Publish Name' },
    { 'key': 'date', 'show': 'Course Publish Date' },
    { 'key': 'duration', 'show': 'Course Duration' },
    { 'key': 'landmark', 'show': 'Institute Name' },
    { 'key': 'location', 'show': 'Location' },
    { 'key': 'pincode', 'show': 'Pin Code' },
    { 'key': 'mobile', 'show': 'Mobile Number' },
  ];

  toggleAnotherComponent() {
    // studentadd      
    // this.route.navigate(["studentadd"])
    this.mydata = false
    this.showAnotherComponent = !this.showAnotherComponent;
  }



  viewfunc(event: any) {
    console.log(event);
    // this.sharedservice.setSharedData(event);
    const dialogRef = this.dialog.open(UpdatestudentDialogComponent, {
      width: "60vw",
      height: "65vh",
    });
  }



  checkbox(event: any) {
    console.log(event);
  }

  // download(data: any) {
  //   const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
  //   ws['!cols'] = [{ width: 25 }, { width: 25 }, { width: 25 }];
  //   Object.keys(ws).forEach((cell) => {
  //     if (cell !== '!ref' && cell !== '!margins' && cell !== '!cols') {
  //       ws[cell].s = { ...ws[cell].s, padding: { top: 5, bottom: 5, left: 5, right: 5 } };
  //     }
  //   });

  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  //   XLSX.writeFile(wb, `Institute.xlsx`);
  //   console.log("download");
  // }



  filterrow() {
    console.log("search function....");
    // this.service.tablefillter(this.searchby).subscribe((res: Response) => {
    //     console.log(res);
    //     this.searcharray=res;
    // this.tabledata=res;
    // });
  }

  resetFilter() {
    let filform: any = document.getElementById('filterForm');
    filform.reset();
  }

  searchbar() {
    this.search_bar = true;
    this.downloadicon = "down"
    this.downloadicon1 = ""
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


  close_search_bar() {
    this.search_bar = false;
    this.downloadicon = ""
  }




  getStatusClass(status: string): string {
    return status;
  }
  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }


  addstudent() {
    const dialogRef = this.dialog.open(AddstudentComponent, {
      width: "40%",
      height: "60%",
    });
  }

  addinfo() {
    const dialogRef = this.dialog.open(AddviewmorestudentComponent, {
      width: "30%",
      height: "auto",
    });
  }

  confirm(event: Event) {
    console
      this.confirmationService.confirm({
        target: event.target as EventTarget
    });
  }

  ngOnInit() {
    this.cities = [
        { icon:'pi pi-envelope', name: 'Send Email to All' },
        { icon:'pi pi-ban', name: 'Suspend Selected' },
        { icon:'pi pi-trash', name: 'Remove Selected' }
    ];


    this.viewOption = [
      { icon:'pi pi-eye', name: 'View Details' },
      { icon:'pi pi-wave-pulse', name: 'Activities' }
    ]
  }

  selectbtn(op:any){
    console.log("select")
    op.hide();
  }

}
