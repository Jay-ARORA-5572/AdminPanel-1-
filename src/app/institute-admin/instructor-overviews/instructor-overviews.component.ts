import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-instructor-overviews',
  templateUrl: './instructor-overviews.component.html',
  styleUrl: './instructor-overviews.component.css'
})
export class InstructorOverviewsComponent {
  constructor(private messageService: MessageService, private route: Router, private dialog: MatDialog,) {}

  salesData:any;
  data:any;
  options:any;



  chartData:any;
  chartOptions:any;

  ngOnInit() {
    this.totalsalechart();
    this.activestudent();
    this.newenrollment();
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


}
