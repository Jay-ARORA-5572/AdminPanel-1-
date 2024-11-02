import { Component, HostListener } from '@angular/core';
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
  years: any;
  yearsvalue: any;
  showAnotherComponent = false;
  mydata = true
  values: any;
  searcharray: any = []
  totalins: any = 0;


  bardata: any;
  donutdata: any;
  topcatdata: any;
  linedata: any;
  salesData: any;
  weekData: any;
  categories: any;
  options: any;
  bardataoptions: any;
  topcatdataoptions: any;
  donutdataoptions: any;
  activestudentoptions: any;
  activestudent: any;

  basicData: any;
  basicOptions: any;
  search_bar: any = false;
  downloadicon = ""
  downloadicon1 = "up"
  singlecheck: any = [];

  searchby: any = '';

  multiAxisData: any;

  multiAxisOptions: any;

  lineStylesData: any;



  iscolumn: any = [
    { 'key': 'instituionname', 'show': 'Institution Name' },
    { 'key': 'institutionId', 'show': 'Institute Id' },
    { 'key': 'address', 'show': 'Institution Address' },
    { 'key': 'landmark', 'show': 'Landmark' },
    { 'key': 'email', 'show': 'Email Id' },
    { 'key': 'mobile', 'show': 'Mobile Number' },
    { 'key': 'zipcode', 'show': 'Pin Code' },
  ];


  constructor(private messageService: MessageService, private route: Router, private dialog: MatDialog,) {
  }

  instructors = [
    { initials: 'AB', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', rating: '⭐⭐⭐⭐⭐', reviews: '25', color: '#D7BDE2' },
    { initials: 'AL', name: 'Ashley Lawson', email: 'ashley@softnio.com', rating: '⭐⭐⭐⭐', reviews: '22', color: '#A3E4D7' },
    { initials: 'JM', name: 'Jane Montgomery', email: 'jane84@example.com', rating: '⭐⭐⭐⭐', reviews: '19', color: '#F9E79F' },
    { initials: 'LH', name: 'Larry Henry', email: 'larry108@example.com', rating: '⭐⭐⭐⭐', reviews: '24', color: '#AED6F1' }
  ];



  courses = [
    { short: 'UI/UX', title: 'UI/UX Design with Adobe XD', price: '$85.00', sales: '$2,125.00 - 25 Sold', color: '#A3E4D7' },
    { short: 'AD', title: 'Android App Development', price: '$95.00', sales: '$1,710.00 - 10 Sold', color: '#F9E79F' },
    { short: 'WD', title: 'Wordpress Development', price: '$70.00', sales: '$1,050.00 - 15 Sold', color: '#F5B7B1' },
    { short: 'ML', title: 'Machine Learning', price: '$110.00', sales: '$990.00 - 10 Sold', color: '#D7BDE2' },
    { short: 'RD', title: 'Responsive Design', price: '$80.00', sales: '$960.00 - 12 Sold', color: '#AED6F1' }
  ];

  supportRequests = [
    {
      name: 'Vincent Lopez',
      message: 'Thanks for contacting us with your issues...',
      time: '6 min ago',
      avatar: '../../../assets/favicon.png'
    },
    {
      name: 'Daniel Moore',
      message: 'Thanks for contacting us with your issues...',
      time: '2 hours ago',
      avatar: '../../../assets/favicon.png'
    },
    {
      name: 'Larry Henry',
      message: 'Thanks for contacting us with your issues...',
      time: '3 hours ago',
      avatar: '../../../assets/favicon.png'
    }
  ];


  ngOnInit(): void {
    this.totalsalechart();
    this.weekforchart();
    this.barchart();
    this.topcategoies();
    this.donutchart();
    this.linechart();

    // this.getdata();

    this.years = [
      { name: 'Last 30 Days', code: 'last30day' },
      { name: 'Last 6 Month', code: 'last6mon' },
      { name: 'Last 1 Years', code: 'last1years' }
    ];
    this.yearsvalue = this.years[0];

  }

  getdata() {

  }

  toggleAnotherComponent() {
    // studentadd      
    // this.route.navigate(["studentadd"])
    this.mydata = false
    this.showAnotherComponent = !this.showAnotherComponent;

  }



  viewfunc(event: any) {
    console.log(event);
  }

  checkbox(event: any) {
    console.log(event);
  }


  onEnterKeyPressed(event: any) {

  }


  gotofranchise() {
    // this.sharedservice.myRouteEmitter.emit('Franchise');
    // console.log("franchise")
  }

  // Chart code

  totalsalechart() {
    this.salesData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          data: [65, 59, 80, 81, 56, 55, 40, 48, 72, 60, 90, 100]
        }
      ]
    };

  }

  weekforchart() {

    this.weekData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sales',
          backgroundColor: 'rgba(153,102,255,0.2)',
          borderColor: 'rgba(153,102,255,1)',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

  }


  topcategoies() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    // Dynamic labels and data source
    const dynamicLabels = ['Web Development', 'Mobile Application', 'Graphics Design', 'Database', 'Marketing', 'Machine Learning', 'Data Science'];
    const dynamicData = [65, 59, 80, 81, 56, 55, 40];
    const dynamicColors = [
      '#EC407A',
      '#AB47BC',
      '#42A5F5',
      '#7E57C2',
      '#66BB6A',
      '#FFCA28',
      '#26A69A'
    ];

    this.topcatdata = {
      labels: dynamicLabels, // Set dynamic labels here
      datasets: [
        {
          data: dynamicData, // Set dynamic data here
          backgroundColor: dynamicColors, // Set dynamic colors here
          // Remove the general label as it won't be used
          barThickness: 15,
        }
      ]
    };

    this.topcatdataoptions = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          display: true,
          position: 'right',
          labels: {
            color: textColorSecondary,
            generateLabels: function (chart: { data: { labels: any[]; datasets: { backgroundColor: { [x: string]: any; }; }[]; }; }) {
              return chart.data.labels.map(function (label, index) {
                return {
                  text: label,
                  fillStyle: chart.data.datasets[0].backgroundColor[index],
                  hidden: false,
                  index: index
                };
              });
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            backdropColor: textColor,
            font: {
              weight: 200
            }
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


  barchart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.bardata = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: 0.4,
          backgroundColor: [
            '#EC407A',
            '#AB47BC',
            '#42A5F5',
            '#7E57C2',
            '#66BB6A',
            '#FFCA28',
            '#26A69A'
          ],
        },
      ]
    };

    this.bardataoptions = {
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
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          type: 'linear',
          ticks: {
            min: 0,
            max: 100,
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
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

    // Dynamic labels and data source
    const dynamicLabels = ['Web Development', 'Mobile Application', 'Graphics Design', 'Database', 'Marketing', 'Machine Learning', 'Data Science'];
    const dynamicData = [65, 59, 80, 81, 56, 55, 40];
    const dynamicColors = [
      '#EC407A',
      '#AB47BC',
      '#42A5F5',
      '#7E57C2',
      '#66BB6A',
      '#FFCA28',
      '#26A69A'
    ];

    this.activestudent = {
      labels: dynamicLabels, // Set dynamic labels here
      datasets: [
        {
          data: dynamicData, // Set dynamic data here
          backgroundColor: dynamicColors, // Set dynamic colors here
          barThickness: 20,
        }
      ]
    };

    this.activestudentoptions = {
      // indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          display: true,
          position: 'right',
          labels: {
            color: textColorSecondary,
            generateLabels: function (chart: { data: { labels: any[]; datasets: { backgroundColor: { [x: string]: any; }; }[]; }; }) {
              return chart.data.labels.map(function (label, index) {
                return {
                  text: label,
                  fillStyle: chart.data.datasets[0].backgroundColor[index],
                  hidden: false,
                  index: index
                };
              });
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            backdropColor: textColor,
            font: {
              weight: 200
            }
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
  donutchart1() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.donutdata = {
      labels: ['Organic Search', 'Referrals', 'Social Media', 'Others'],
      datasets: [
        {
          data: [4305, 482, 859, 138],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726",
            "#FF6384"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D",
            "#FF6384"
          ]
        }
      ]
    };

    this.donutdataoptions = {
      cutout: '40%',
      maintainAspectRatio: false, // Adjust this value to change the chart size
      layout: {
        padding: {
          // left: 20,
          // right: 20,
          // top: 20,
          // bottom: 20
        }
      },
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: textColor,
            generateLabels: function (chart: { data: { labels: any[]; datasets: { backgroundColor: { [x: string]: any; }; }[]; }; }) {
              return chart.data.labels.map(function (label, index) {
                return {
                  text: label,
                  fillStyle: chart.data.datasets[0].backgroundColor[index],
                  hidden: false,
                  index: index
                };
              });
            }
          }
        }
      }
    };
  }


  donutchart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.donutdata = {
      labels: ['Organic Search', 'Referrals', 'Social Media', 'Others'],
      datasets: [
        {
          data: [4305, 482, 859, 138],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726",
            "#FF6384"
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            "#FFB74D",
            "#FF6384"
          ]
        }
      ]
    };

    const total = this.donutdata.datasets[0].data.reduce((acc: any, value: any) => acc + value, 0);

    this.donutdataoptions = {
      cutout: '40%',
      maintainAspectRatio: false,
      layout: {
        padding: {}
      },
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: textColor,
            generateLabels: function (chart: {
              data: {
                labels: any[]; datasets: {
                  data: any; backgroundColor: { [x: string]: any; };
                }[];
              };
            }) {
              return chart.data.labels.map(function (label, index) {
                const value = chart.data.datasets[0].data[index];
                const percentage = ((value / total) * 100).toFixed(2);
                return {
                  text: `${label} = ${value} (${percentage}%)`,
                  fillStyle: chart.data.datasets[0].backgroundColor[index],
                  hidden: false,
                  index: index,
                  padding: 50 

                };
              });
            }
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
