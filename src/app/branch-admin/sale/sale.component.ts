import { Component } from '@angular/core';

interface Order {
  id: string;
  customerName: string;
  customerImage: string;
  quantity: number;
  price: number;
  status: string;
  date: string;
}

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent {

  tasks: any[];

  first: number = 0;
  rows: number = 5;
  checkedall: boolean = false;
  checkedone: boolean = false;

  constructor() {
    this.tasks = [
      {
        details: 'Design task page for new template',
        assignedDate: '12.43pm',
        target: 'Today',
        status: 'Complete',
        completed: false
      },
      {
        details: 'Solve UI issues in new template',
        assignedDate: '11.25am',
        target: 'Tomorrow',
        status: 'Pending',
        completed: true
      },
      {
        details: 'prepare pre requisites',
        assignedDate: '9.56am',
        target: 'Today',
        status: 'Cancelled',
        completed: false
      },
      {
        details: 'Change total syles od the dashboard',
        assignedDate: '12.15am',
        target: 'Today',
        status: 'Cancelled',
        completed: false
      },
      {
        details: 'Update color theme',
        assignedDate: '4.20pm',
        target: 'Today',
        status: 'Cancelled',
        completed: true
      },
      {
        details: 'New dashboard design update',
        assignedDate: '8.29am',
        target: 'Today',
        status: 'Cancelled',
        completed: false
      },
      
    ];
  }

  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  moredata(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  studentPayments = [
    { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, status: 'Cancelled' },
    { studentId: '#326T4M9', date: '21 Jan 2019, 6:12am', amount: 200, status: 'Complete' },
    { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, status: 'Cancelled' }, { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, status: 'Cancelled' }, { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, status: 'Cancelled' }, { studentId: '#746F5K2', date: '2nd March 2021, 10:45pm', amount: 2300, status: 'Complete' },
    { studentId: '#546H74W', date: '12 Jan 2020, 10:45pm', amount: 120, status: 'Pending' },
    { studentId: '#87X6444', date: '26 Dec 2019, 12:15pm', amount: 560, status: 'Complete' },
    { studentId: '#986G531', date: '21 Jan 2019, 6:12am', amount: 3654, status: 'Cancelled' },
];

  stats = [
    {
      title: 'Sales Statistics',
      value: "153",
      subtitle: 'THIS MONTH',
      percentage: 42,
      icon: 'pi pi-calendar'
    },
    {
      title: 'Total Revenue',
      value: '$4,32,474',
      subtitle: 'THIS MONTH',
      percentage: -12,
      icon: 'pi pi-clock'
    },
    {
      title: 'Page Views',
      value: "27146",
      subtitle: 'THIS MONTH',
      percentage: 27,
      icon: 'pi pi-file'
    },
    {
      title: 'Profit By Sale',
      value: '$563',
      subtitle: 'THIS MONTH',
      percentage: 32.5,
      icon: 'pi pi-dollar'
    }
  ];

  transactions = [
    { name: 'Shopping', date: new Date('2022-03-12'), amount: -256.99, icon: 'shopping-cart' },
    { name: 'Stock Market', date: new Date('2022-03-10'), amount: 18567.00, icon: 'chart-line' },
    { name: 'Restaurant', date: new Date('2022-03-15'), amount: -85.75, icon: 'utensils' },
    { name: 'Salary', date: new Date('2022-03-01'), amount: 5000.00, icon: 'money-bill' },
    { name: 'Electric Bill', date: new Date('2022-03-05'), amount: -120.50, icon: 'bolt' },
    { name: 'Rent', date: new Date('2022-03-02'), amount: -1200.00, icon: 'home' },
    { name: 'Freelance Work', date: new Date('2022-03-08'), amount: 1500.00, icon: 'laptop' },
    { name: 'Groceries', date: new Date('2022-03-11'), amount: -200.34, icon: 'shopping-bag' },
    { name: 'Car Maintenance', date: new Date('2022-03-18'), amount: -450.00, icon: 'car' },
    { name: 'Gym Membership', date: new Date('2022-03-20'), amount: -75.00, icon: 'dumbbell' },
    { name: 'Bonus', date: new Date('2022-03-22'), amount: 1200.00, icon: 'gift' },
    { name: 'Online Course', date: new Date('2022-03-25'), amount: -100.00, icon: 'book' },
    { name: 'Travel', date: new Date('2022-03-28'), amount: -600.00, icon: 'plane' },
    { name: 'Concert Tickets', date: new Date('2022-03-30'), amount: -150.00, icon: 'music' },
    { name: 'Investment', date: new Date('2022-04-01'), amount: 3000.00, icon: 'chart-bar' },
    { name: 'Donation', date: new Date('2022-04-05'), amount: -200.00, icon: 'heart' },
    { name: 'Pet Supplies', date: new Date('2022-04-08'), amount: -50.75, icon: 'paw' },
    { name: 'Internet Bill', date: new Date('2022-04-10'), amount: -60.00, icon: 'wifi' },
    { name: 'Shopping', date: new Date('2022-04-12'), amount: -300.50, icon: 'shopping-cart' },
    { name: 'Tax Refund', date: new Date('2022-04-15'), amount: 1000.00, icon: 'file-invoice-dollar' },
  ];

  activities = [
    { content: '<strong>#Anita</strong> Lorem ipsum dolor, sit amet consectetur adipisicing.', time: '12 mins ago', color: '#ff4d4f' },
    { content: 'New Product reviewed. <strong>#FX-321</strong>', time: '28 mins ago', color: '#52c41a' },
    { content: '<strong>#Anita</strong> Lorem ipsum dolor, sit amet consectetur adipisicing.', time: '12 mins ago', color: '#ff4d4f' },
    { content: 'New Product reviewed. <strong>#FX-321</strong>', time: '28 mins ago', color: '#52c41a' },
    { content: '<strong>#Anita</strong> Lorem ipsum dolor, sit amet consectetur adipisicing.', time: '12 mins ago', color: '#ff4d4f' },
    { content: 'New Product reviewed. <strong>#FX-321</strong>', time: '28 mins ago', color: '#52c41a' },
    { content: '<strong>#Anita</strong> Lorem ipsum dolor, sit amet consectetur adipisicing.', time: '12 mins ago', color: '#ff4d4f' },
    { content: 'New Product reviewed. <strong>#FX-321</strong>', time: '28 mins ago', color: '#52c41a' },
    { content: '<strong>#Anita</strong> Lorem ipsum dolor, sit amet consectetur adipisicing.', time: '12 mins ago', color: '#ff4d4f' },
    { content: 'New Product reviewed. <strong>#FX-321</strong>', time: '28 mins ago', color: '#52c41a' },
    { content: '<strong>#Anita</strong> Lorem ipsum dolor, sit amet consectetur adipisicing.', time: '12 mins ago', color: '#ff4d4f' },
    { content: 'New Product reviewed. <strong>#FX-321</strong>', time: '28 mins ago', color: '#52c41a' },
    { content: '<strong>#Anita</strong> Lorem ipsum dolor, sit amet consectetur adipisicing.', time: '12 mins ago', color: '#ff4d4f' },
    { content: 'New Product reviewed. <strong>#FX-321</strong>', time: '28 mins ago', color: '#52c41a' },
    { content: '<strong>#Anita</strong> Lorem ipsum dolor, sit amet consectetur adipisicing.', time: '12 mins ago', color: '#ff4d4f' },
    { content: 'New Product reviewed. <strong>#FX-321</strong>', time: '28 mins ago', color: '#52c41a' },
    { content: '<strong>#Zlatan</strong> shared a page. <br><a href="#">https://themeforest.net/user/spruko/portfolio</a>', time: '37 mins ago', color: '#ff4d4f' },
    { content: '<strong>#Hussain</strong> shared a file. <br><span class="activity-tag">PPT</span> Project_discussion', time: '1 day ago', color: '#52c41a' },
    { content: '<strong>#Emiley</strong> Lorem ipsum dolor, sit amet consectetur adipisicing.', time: '14 Mar 2022', color: '#ff4d4f' }
  ];

  countries = [
    { name: 'Delhi', visitors: 3201, color: '#8e44ad' },
    { name: 'Agra', visitors: 2345, color: '#1abc9c' },
    { name: 'Bihar', visitors: 106, color: '#e74c3c' },
    { name: 'Jharkhand', visitors: 2857, color: '#f39c12' },
    { name: 'Uttrakhand', visitors: 169, color: '#e67e22' },
    { name: 'Telegana', visitors: 1950, color: '#16a085' },
    { name: 'Assam', visitors: 224, color: '#2ecc71' },
    { name: 'Madhya Pradesh', visitors: 147, color: '#fd79a8' },
    { name: 'Uttar Pradesh', visitors: 182, color: '#2d3436' }
  ];


  chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: '#42A5F5',
        data: [100, 200, 150, 300, 200, 300, 350, 250, 200, 300, 400, 350]
      },
      // add more datasets...
    ]
  };

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  // orders = [
  //   { id: '#1537890', customerName: 'Simon Cowall', customerImage: '../assets/playicon1.png1.png', quantity: 1, price: 4320.29, status: 'Shipped', date: '2022-11-25' },
  //   { id: '#1539078', customerName: 'Meisha Kerr', customerImage: '../assets/playicon1.png', quantity: 1, price: 6745.99, status: 'Cancelled', date: '2022-11-29' },
  //   { id: '#1539832', customerName: 'Jessica', customerImage: '../assets/playicon1.png', quantity: 2, price: 1176.89, status: 'Under Process', date: '2022-12-04' },
  //   { id: '#1539832', customerName: 'Amanda B', customerImage: '../assets/playicon1.png', quantity: 1, price: 1899.99, status: 'Shipped', date: '2022-12-10' },
  //   { id: '#1538267', customerName: 'Jason Stathman', customerImage: '../assets/playicon1.png', quantity: 1, price: 1867.29, status: 'Pending', date: '2022-12-18' },
  //   { id: '#1537890', customerName: 'Khabib Hussain', customerImage: '../assets/playicon1.png', quantity: 1, price: 2439.99, status: 'Success', date: '2022-12-24' }
  // ];

 
  customers = [
    { name: 'Samantha Melon', userId: '#1234', time: '11:43am', date: null, imgSrc: '../assets/playicon1.png' },
    { name: 'Allie Grater', userId: '#3432', time: '12:35pm', date: null, imgSrc: '../assets/playicon1.png' },
    { name: 'Gabe Lackmen', userId: '#2312', time: 'Yesterday', date: null, imgSrc: '../assets/playicon1.png' },
    { name: 'Manuel Labor', userId: '#4231', time: null, date: '24 Mar 2022', imgSrc: '../assets/playicon1.png' },
    { name: 'Hercules Bing', userId: '#1754', time: null, date: '18 Mar 2022', imgSrc: '../assets/playicon1.png' },
    { name: 'Manuel Labor', userId: '#1345', time: null, date: '15 Mar 2022', imgSrc: '../assets/playicon1.png' },
    { name: 'Samantha Melon', userId: '#1234', time: '11:43am', date: null, imgSrc: '../assets/playicon1.png' },
    { name: 'Allie Grater', userId: '#3432', time: '12:35pm', date: null, imgSrc: '../assets/playicon1.png' },
    { name: 'Gabe Lackmen', userId: '#2312', time: 'Yesterday', date: null, imgSrc: '../assets/playicon1.png' },
    { name: 'Manuel Labor', userId: '#4231', time: null, date: '24 Mar 2022', imgSrc: '../assets/playicon1.png' },
    { name: 'Hercules Bing', userId: '#1754', time: null, date: '18 Mar 2022', imgSrc: '../assets/playicon1.png' },
    { name: 'Manuel Labor', userId: '#1345', time: null, date: '15 Mar 2022', imgSrc: '../assets/playicon1.png' },
  ];
  invoices = [
    { status: 'Processing', statusClass: 'processing', info: 'Invoice #A12-005 _ $1,938', date: 'Nov 24, 2022' },
    { status: 'Sent', statusClass: 'sent', info: 'Invoice #A12-006 _ $1,098', date: 'Nov 28, 2022' },
    { status: 'Pending', statusClass: 'pending', info: 'Invoice #A12-007 _ $1,098', date: 'Dec 20, 2022' },
    { status: 'Processing', statusClass: 'processing', info: 'Invoice #A12-008 _ $4,362', date: 'Dec 16, 2022' },
    { status: 'Sent', statusClass: 'sent', info: 'Invoice #A12-009 _ $2,389', date: 'Dec 10, 2022' },
    { status: 'Sent', statusClass: 'sent', info: 'Invoice #A12-002 _ $4,390', date: 'Nov 30, 2022' },
    { status: 'Processing', statusClass: 'processing', info: 'Invoice #A12-005 _ $1,938', date: 'Nov 24, 2022' },
    { status: 'Sent', statusClass: 'sent', info: 'Invoice #A12-006 _ $1,098', date: 'Nov 28, 2022' },
  ];
  categories = [
    { name: 'Clothing', value: '$123.45M' },
    { name: 'Electronics', value: '$765.89K' },
    { name: 'Grocery', value: '$289.00M' },
    { name: 'Mobiles', value: '$662.97K' },
    { name: 'Kitchen Appliances', value: '$1.2B' },
    { name: 'Automobiles', value: '$109.23K' }
  ];
  orders: Order[] = [
    { id: '#1537890', customerName: 'Simon Cowall', customerImage: '../assets/playicon1.png', quantity: 1, price: 4320.29, status: 'Shipped', date: '2022-11-25' },
    { id: '#1539078', customerName: 'Meisha Kerr', customerImage: '../assets/playicon1.png', quantity: 1, price: 6745.99, status: 'Cancelled', date: '2022-11-29' },
    { id: '#1539832', customerName: 'Jessica', customerImage: '../assets/playicon1.png', quantity: 2, price: 1176.89, status: 'Under Process', date: '2022-12-04' },
    { id: '#1539832', customerName: 'Amanda B', customerImage: '../assets/playicon1.png', quantity: 1, price: 1899.99, status: 'Shipped', date: '2022-12-10' },
    { id: '#1538267', customerName: 'Jason Stathman', customerImage: '../assets/playicon1.png', quantity: 1, price: 1867.29, status: 'Shipped', date: '2022-12-18' },
    { id: '#1537890', customerName: 'Khabib Hussain', customerImage: '../assets/playicon1.png', quantity: 1, price: 2439.99, status: 'Shipped', date: '2022-12-24' }
  ];


  data: any;
  options: any;
  circledata: any;
  circleoptions: any;

  ngOnInit() {
    this.chartbar();
    this.chartcircle();
  }

  chartbar() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: documentStyle.getPropertyValue('--blue-400'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
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
            color: textColorSecondary,
            font: {
              weight: 500
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

  chartcircle() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.circledata = {
      labels: [],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400')
          ]
        }
      ]
    };

    this.circleoptions = {
      cutout: '50%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }
}

