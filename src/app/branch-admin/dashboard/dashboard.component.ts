import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { DashboardServiceService } from '../../company-admin/dashboard/dashboard-service.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ViewleadsComponent } from '../viewleads/viewleads.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private messageService: MessageService, private route: Router, private dialog: MatDialog, private institutedata: DashboardServiceService) {

    this.timeRanges = [
      { label: '1W', icon: 'pi pi-clock' },
      { label: '1M', icon: 'pi pi-calendar' },
      { label: '6M', icon: 'pi pi-calendar-plus' },
      { label: '1Y', icon: 'pi pi-calendar-times' }
    ];

    // Set default selected range
    this.selectedRange = this.timeRanges[3]; // Select "1Y" by default
  }

  ngOnInit(): void {
    this.token = localStorage.getItem("accesstoken");
    // this.getdata();
    this.initializeChart();
    this.donutchart();
    // this.sharedservice.refreshData.subscribe((data: string) => {
    //   console.log('Received event:', data);
    //   this.getdata();
    // });
  }

  value: any = "";
  value1: any = "";
  value2: string | undefined;
  cities: any;
  selectedCityCode: any;
  showAnotherComponent = false;
  mydata = true
  values: any;
  searcharray: any = []
  totalins: any = 0;

  data: any;
  options: any;
  basicData: any;
  basicOptions: any;
  search_bar: any = false;
  downloadicon = ""
  downloadicon1 = "up"
  singlecheck: any = [];
  searchby: any = '';
  token: any = "";

  chartData: any;
  chartOptions: any;

  donutdata: any;
  donutdataoptions: any;
  publishedCount = 1624;
  privateCount = 1267;
  closedCount = 1153;
  onHoldCount = 1153;

  rows = 10;
  first: number = 0;

  rows1 = 3;

  timeRanges: MenuItem[];
  selectedRange: MenuItem;

  iscolumn: any = [
    { 'key': 'instituionname', 'show': 'Branch Id' },
    { 'key': 'institutionId', 'show': 'B' },
    { 'key': 'address', 'show': 'Institution Address' },
    { 'key': 'landmark', 'show': 'Landmark' },
    { 'key': 'email', 'show': 'Email Id' },
    { 'key': 'mobile', 'show': 'Mobile Number' },
    { 'key': 'zipcode', 'show': 'Pin Code' },
  ];

  events = [
    {
      date: '02',
      day: 'Mon',
      title: 'You have an announcement - Ipsum Est Diam Eirmod',
      time: '10:00AM',
      type: 'Announcement',
      typeColor: 'p-tag p-tag-rounded p-tag-info'
    },
    {
      date: '15',
      day: 'Sun',
      title: 'National holiday - Vero Jayanti',
      time: '',
      type: 'Holiday',
      typeColor: 'p-tag p-tag-rounded p-tag-warning'
    },
    {
      date: '23',
      day: 'Mon',
      title: 'John pup birthday - Team Member',
      time: '09:00AM',
      type: 'Birthday',
      typeColor: 'p-tag p-tag-rounded p-tag-success'
    },
    {
      date: '23',
      day: 'Mon',
      title: 'Amet sed no dolor kasd - Et Dolores Tempor Erat',
      time: '04:00PM',
      type: 'Announcement',
      typeColor: 'p-tag p-tag-rounded p-tag-info'
    },
    {
      date: '31',
      day: 'Tue',
      title: 'National Holiday - Dolore Ipsum',
      time: '',
      type: 'Holiday',
      typeColor: 'p-tag p-tag-rounded p-tag-warning'
    }
  ];

  clients = [
    { name: 'Diana Aise', email: 'diana.1116@demo.com', status: 'Active', role: 'C.E.O', avatar: '../../../assets/favicon.png' },
    { name: 'Rose Mary', email: 'rose756@demo.com', status: 'Active', role: 'C.E.O', avatar: '../../../assets/favicon.png' },
    { name: 'Gretchen Iox', email: 'gretchen.1.25@demo.com', status: 'Active', role: 'Manager', avatar: '../../../assets/favicon.png' },
    { name: 'Gray Noal', email: 'gray12gray@demo.com', status: 'Active', role: 'Manager', avatar: '../../../assets/favicon.png' },
    { name: 'Isa Bella', email: 'isa158@demo.com', status: 'Active', role: 'C.E.O', avatar: '../../../assets/favicon.png' }
  ];

  statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' }
  ];

  billOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' }
  ];

  
  // test

  bills = [
    {
      invoiceId: '#INV111611',
      client: { name: 'Rena Mark', email: 'renamark123@demo',avatar: '../../../assets/favicon.png' },
      dueDate: new Date('2023-05-14'),
      status: 'Paid',
      amount: 9523
    },
    {
      invoiceId: '#INV111611',
      client: { name: 'Xong Yun', email: 'xongyun2134@gmail.com', avatar: '../../../assets/favicon.png' },
      dueDate: new Date('2023-05-14'),
      status: 'Pending',
      amount: 8243
    },
    {
      invoiceId: '#INV111611',
      client: { name: 'Rena Mark', email: 'renamark123@demo', avatar: '../../../assets/favicon.png' },
      dueDate: new Date('2023-05-14'),
      status: 'Paid',
      amount: 9523
    },
    {
      invoiceId: '#INV111611',
      client: { name: 'Xong Yun', email: 'xongyun2134@gmail.com', avatar: '../../../assets/favicon.png'},
      dueDate: new Date('2023-05-14'),
      status: 'Pending',
      amount: 8243
    },
    {
      invoiceId: '#INV111611',
      client: { name: 'Rena Mark', email: 'renamark123@demo',avatar: '../../../assets/favicon.png'},
      dueDate: new Date('2023-05-14'),
      status: 'Paid',
      amount: 9523
    },
    {
      invoiceId: '#INV111611',
      client: { name: 'Xong Yun', email: 'xongyun2134@gmail.com', avatar: '../../../assets/favicon.png'},
      dueDate: new Date('2023-05-14'),
      status: 'Pending',
      amount: 8243
    },
    // Add more data as needed
  ];

  viewfunc(event: any) {
    console.log(event);
  }

  checkbox(event: any) {
    console.log(event);
  }


  onEnterKeyPressed(event: any) {
    let obj: any = {};
    obj['institutionId'] = event.target.value;
    this.searcharray = []
    this.institutedata.datafindbyid(obj, this.token).subscribe((res: any) => {
      console.log("find by id")
      console.log(res)
      if (res["error"] != "Institution Not Found") {
        let value = []
        let obj1: any = {}
        obj1["address"] = res["address"]
        obj1["contact"] = res["contact"]
        obj1["instituionname"] = res["instituionname"]
        obj1["institutionId"] = res["institutionId"]
        value.push(obj1);

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
        this.getdata()
      }
    })
  }

  getStatusSeverity(status: string): any {
    switch (status) {
      case 'Paid':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Overdue':
        return 'danger';
      default:
        return null;
    }
  }

  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  getdata() {
    this.searcharray = [];
    this.searchby = ''
    this.institutedata.datagetallinstitute(this.token).subscribe((res: any) => {
      // console.log(res);
      let data: any = res;
      // this.totalins=0;

      this.totalins = 0
      for (let i of data) {
        let obj: any = {};
        this.totalins += 1
        obj['instituionname'] = i['instituionname']
        obj['address'] = i['address']['baseaddress']
        obj['landmark'] = i['address']['landmark']
        obj['zipcode'] = i['address']['zipcode']
        obj['mobile'] = i['contact']['mobnum']
        obj['email'] = i['contact']['emailid']
        obj["institutionId"] = i["institutionId"]
        this.searcharray.push(obj);
      }
      // console.log(this.searcharray);

    });
  }

  toggleAnotherComponent() {
    // studentadd      
    // this.route.navigate(["studentadd"])
    this.mydata = false
    this.showAnotherComponent = !this.showAnotherComponent;

  }
  
  // Chart code

  initializeChart() {
    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Category A',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Category B',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        }
      }
    };
  }

  donutchart() {
    this.donutdata = {
      labels: ['Published', 'Private', 'Closed', 'On Hold'],
      datasets: [
        {
          data: [this.publishedCount, this.privateCount, this.closedCount, this.onHoldCount],
          backgroundColor: ['#7e57c2', '#b39ddb', '#ce93d8', '#5c6bc0'],
          hoverBackgroundColor: ['#7e57c2', '#b39ddb', '#ce93d8', '#5c6bc0']
        }
      ]
    };

    this.donutdataoptions = {
      responsive: true,
      cutout: '40%',
      plugins: {
        legend: {
          display: false
        }
      }
    };
  }

  // Chart code


  searching() {
    let obj: any = {};
    obj['institutionId'] = this.searchby;
    this.searcharray = [];

    this.institutedata.datafindbyid(obj, this.token).subscribe((res: any) => {
      if (res["error"] !== "Institution Not Found") {
        let value = [];
        let obj1: any = {};
        obj1["address"] = res["address"];
        obj1["contact"] = res["contact"];
        obj1["instituionname"] = res["instituionname"];
        obj1["institutionId"] = res["institutionId"];
        value.push(obj1);

        for (let i of value) {
          let data: any = {};
          data['instituionname'] = i["instituionname"];
          data["address"] = i['address']['baseaddress'];
          data['landmark'] = i['address']['landmark'];
          data['zipcode'] = i['address']['zipcode'];
          data['mobile'] = i['contact']['mobnum'];
          data['email'] = i['contact']['emailid'];
          data['institutionId'] = i["institutionId"];
          this.searcharray.push(data);
        }
        let filform: any = document.getElementById('filterForm');
        filform.reset();
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Institution Not Found' });
      }
    });
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

  viewLeads() {
    const dialogRef = this.dialog.open(ViewleadsComponent, {
      width: "1000%",
      height: "auto",
    });
  }

}
