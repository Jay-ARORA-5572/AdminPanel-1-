import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopup } from 'primeng/confirmpopup';

interface City {
  name: string,
  icon: string
}

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrl: './instructor-details.component.css'
})
export class InstructorDetailsComponent implements OnInit {
  
  username:any = localStorage.getItem("name")

  first: number = 0;
  rows: number = 6;

  rows1: number = 8;

  checkedall: boolean = false;
  checkedone: boolean = false;

  cities!: City[];
  selectedCity!: City;
  
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }



  ngOnInit() {
    this.cities = [
        { icon:'pi pi-envelope', name: 'Send Email to All' },
        { icon:'pi pi-ban', name: 'Suspend Selected' },
        { icon:'pi pi-trash', name: 'Delete All' }
    ];
    this.totalsalechart();
    this.activestudent();
    this.newenrollment();
}

      instructors = [
        { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', coursename: 'web development', rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', coursename: 'web development',  rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', coursename: 'web development', rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', coursename: 'web development',  rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', coursename: 'web development', rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', coursename: 'web development',  rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', coursename: 'web development', rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', coursename: 'web development',  rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', coursename: 'web development', rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', coursename: 'web development',  rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', coursename: 'web development', rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', coursename: 'web development',  rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', coursename: 'web development', rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', coursename: 'web development',  rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', coursename: 'web development', rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', coursename: 'web development',  rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', coursename: 'web development', rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', coursename: 'web development',  rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', coursename: 'web development', rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', coursename: 'web development',  rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', coursename: 'web development', rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', coursename: 'web development',  rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', coursename: 'web development', rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', coursename: 'web development',  rating: '⭐⭐⭐⭐⭐', review:'The instructor was very knowledgable, worked at a good peace.' },
        // Add more instructor objects as needed
      ];
    
  
    getStatusClass(status: string): string {
      return status;
    }
    onPageChange(event: any) {
      console.log(event);
      this.first = event.first;
      this.rows = event.rows;
    }

  salesData:any;
  data:any;
  options:any;

  chartData:any;
  chartOptions:any;

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

  activestudent() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true, // This creates the filled area under the line
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          backgroundColor: 'rgba(53, 162, 235, 0.4)', // Adjust color to match your needs
          tension: 0.4 // This makes the line smooth
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false // Hide the legend
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColor
          },
          grid: {
            display: false // Optional: hide grid lines for a cleaner look
          }
        },
        y: {
          ticks: {
            color: textColor
          },
          grid: {
            color: surfaceBorder
          },
          beginAtZero: true // Ensure y-axis starts from 0
        }
      }
    };
  }

  deleteReview(index: number) {
    this.instructors.splice(index, 1);
  } 

  newenrollment(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true, // Fill the area under the line
          borderColor: '#FF6384', // Change this to your desired line color
          backgroundColor: 'rgba(255, 99, 132, 0.2)', // Change this to your desired fill color
          tension: 0.4 // Smooth line
        }
      ]
    };

    this.chartOptions = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false // Hide the legend
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColor
          },
          grid: {
            display: false // Optional: hide grid lines for a cleaner look
          }
        },
        y: {
          ticks: {
            color: textColor
          },
          grid: {
            color: surfaceBorder
          },
          beginAtZero: true // Ensure y-axis starts from 0
        }
      }
    };
  }

    courses = [
    { name: 'Learn Android Development with project', status: 'Active' },
    { name: 'Learn Android Development with project', status: 'Pending' },
    { name: 'Learn Android Development with project', status: 'Canceled' },
    { name: 'Learn Android Development with project', status: 'Active' },
    { name: 'Learn Android Development with project', status: 'Pending' },
    { name: 'Learn Android Development with project', status: 'Canceled' },
    { name: 'Learn Android Development with project', status: 'Active' },
    { name: 'Learn Android Development with project', status: 'Pending' },
    { name: 'Learn Android Development with project', status: 'Canceled' },
    { name: 'Learn Android Development with project', status: 'Active' },
    { name: 'Learn Android Development with project', status: 'Pending' },
    { name: 'Learn Android Development with project', status: 'Canceled' },
    { name: 'Learn Android Development with project', status: 'Active' },
    { name: 'Learn Android Development with project', status: 'Pending' },
    { name: 'Learn Android Development with project', status: 'Canceled' },
    { name: 'Learn Android Development with project', status: 'Active' },
    { name: 'Learn Android Development with project', status: 'Pending' },
    { name: 'Learn Android Development with project', status: 'Canceled' },
    { name: 'Learn Android Development with project', status: 'Active' },
    { name: 'Learn Android Development with project', status: 'Pending' },
    { name: 'Learn Android Development with project', status: 'Canceled' },
    { name: 'Learn Android Development with project', status: 'Active' },
    { name: 'Learn Android Development with project', status: 'Pending' },
    { name: 'Learn Android Development with project', status: 'Canceled' },
  ];

  adminnote = [
    {note: 'Aproin at metus et dolor tincidunt feugiat eu id quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean sollicitudin non nunc vel pharetra.' },
    {note: 'Aproin at metus et dolor tincidunt feugiat eu id quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean sollicitudin non nunc vel pharetra.' },
  ]

  getBadgeSeverity(status: string) {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Canceled':
        return 'danger';
      default:
        return null;
    }
  }

  deleteCourse1(index: number) {
    this.courses.splice(index, 1);
  } 

  deleteCourse(index: number) {
    this.adminnote.splice(index, 1);
  } 

  confirm(event: Event) {
    console
      this.confirmationService.confirm({
        target: event.target as EventTarget
    });
  }

  selectbtn(op:any){
    console.log("select")
    op.hide();
  }

}
