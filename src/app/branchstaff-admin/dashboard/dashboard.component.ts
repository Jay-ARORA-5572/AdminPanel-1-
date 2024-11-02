import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
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

  iscolumn: any = [
    { 'key': 'instituionname', 'show': 'Institution Name' },
    { 'key': 'institutionId', 'show': 'Institute Id' },
    { 'key': 'address', 'show': 'Institution Address' },
    { 'key': 'landmark', 'show': 'Landmark' },
    { 'key': 'email', 'show': 'Email Id' },
    { 'key': 'mobile', 'show': 'Mobile Number' },
    { 'key': 'zipcode', 'show': 'Pin Code' },
  ];





  constructor(private messageService: MessageService, private route: Router, private dialog: MatDialog) { }


  ngOnInit(): void {
    this.getdata();
    this.basichart();
    this. linechart();

    // this.sharedservice.refreshData.subscribe((data: string) => {
    //   console.log('Received event:', data);
    //   this.getdata();
    // });
  }

  getdata() {
    this.searcharray = [];
    this.searchby = ''
    // this.institutedata.datagetallinstitute().subscribe((res: any) => {
    //   // console.log(res);
    //   let data: any = res;
    //   // this.totalins=0;

    //   this.totalins = 0
    //   for (let i of data) {
    //     let obj: any = {};
    //     this.totalins += 1
    //     obj['instituionname'] = i['instituionname']
    //     obj['address'] = i['address']['baseaddress']
    //     obj['landmark'] = i['address']['landmark']
    //     obj['zipcode'] = i['address']['zipcode']
    //     obj['mobile'] = i['contact']['mobnum']
    //     obj['email'] = i['contact']['emailid']
    //     obj["institutionId"] = i["institutionId"]
    //     this.searcharray.push(obj);
    //   }
    //   // console.log(this.searcharray);

    // });
  }

  toggleAnotherComponent() {
    // studentadd      
    // this.route.navigate(["studentadd"])
    this.mydata = false
    this.showAnotherComponent = !this.showAnotherComponent;

  }

  // instituteddetails() {
  //   const dialogRef = this.dialog.open(UpdateinstitutedialogComponent, {
  //     width: "60%",
  //     height: "70%",
  //   });

  // }

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
    // this.institutedata.datafindbyid(obj).subscribe((res: any) => {
    //   console.log("find by id")
    //   console.log(res)
    //   if (res["error"] != "Institution Not Found") {
    //     let value = []
    //     let obj1: any = {}
    //     obj1["address"] = res["address"]
    //     obj1["contact"] = res["contact"]
    //     obj1["instituionname"] = res["instituionname"]
    //     obj1["institutionId"] = res["institutionId"]
    //     value.push(obj1);

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
    //     this.getdata()
    //   }
    // })
  }


  // gotofranchise() {
  //   this.sharedservice.myRouteEmitter.emit('Franchise');
  //   // console.log("franchise")
  // }

  basichart(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Sales',
                data: [540, 325, 702, 620],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };

    this.basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
}


  linechart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };
  }




  // Chart code


  searching() {
    let obj: any = {};
    obj['institutionId'] = this.searchby;
    this.searcharray = [];

    // this.institutedata.datafindbyid(obj).subscribe((res: any) => {
    //   if (res["error"] !== "Institution Not Found") {
    //     let value = [];
    //     let obj1: any = {};
    //     obj1["address"] = res["address"];
    //     obj1["contact"] = res["contact"];
    //     obj1["instituionname"] = res["instituionname"];
    //     obj1["institutionId"] = res["institutionId"];
    //     value.push(obj1);

    //     for (let i of value) {
    //       let data: any = {};
    //       data['instituionname'] = i["instituionname"];
    //       data["address"] = i['address']['baseaddress'];
    //       data['landmark'] = i['address']['landmark'];
    //       data['zipcode'] = i['address']['zipcode'];
    //       data['mobile'] = i['contact']['mobnum'];
    //       data['email'] = i['contact']['emailid'];
    //       data['institutionId'] = i["institutionId"];
    //       this.searcharray.push(data);
    //     }
    //     let filform: any = document.getElementById('filterForm');
    //     filform.reset();
    //   } else {
    //     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Institution Not Found' });
    //   }
    // });
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
