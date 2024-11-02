import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-viewinstitute',
  templateUrl: './viewinstitute.component.html',
  styleUrl: './viewinstitute.component.css'
})
export class ViewinstituteComponent {

  timeRanges: MenuItem[];
  selectedRange: MenuItem;

  chartData: any;
  chartOptions: any;

  donutdata: any;
  donutdataoptions: any;
  publishedCount = 1624;
  privateCount = 1267;
  closedCount = 1153;
  onHoldCount = 1153;

  constructor() {
    this.timeRanges = [
      { label: '1W', icon: 'pi pi-clock' },
      { label: '1M', icon: 'pi pi-calendar' },
      { label: '6M', icon: 'pi pi-calendar-plus' },
      { label: '1Y', icon: 'pi pi-calendar-times' }
    ];

    // Set default selected range
    this.selectedRange = this.timeRanges[3]; // Select "1Y" by default
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
  
}
