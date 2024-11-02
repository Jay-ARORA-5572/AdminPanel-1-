import { Component } from '@angular/core';
import { AllinstitutenameComponent } from '../allinstitutename/allinstitutename.component';
import { MatDialog } from '@angular/material/dialog';
import { Top5institutenameComponent } from '../top5institutename/top5institutename.component';
import { TopstudentslistComponent } from '../topstudentslist/topstudentslist.component';
import { PendingpaymentsComponent } from '../pendingpayments/pendingpayments.component';

interface City {
  name: string,
}

@Component({
  selector: 'app-addmanageinstitute',
  templateUrl: './addmanageinstitute.component.html',
  styleUrl: './addmanageinstitute.component.css'
})
export class AddmanageinstituteComponent {

  constructor(private dialog: MatDialog) { }

  visible: boolean = false;
  selectedFilter: any;

  first: number = 0;
  rows: number = 5;
  // instructors: any[];

  cities!: City[];
  selectedCity!: City;

  ngOnInit() {
    this.cities = [
        { name: 'xcgddfgzsdfasd Institute' },
        { name: 'ABC Institute' },
        { name: 'ABC Institute' },
        { name: 'ABC Institute' },
        { name: 'ABC Institute' }
    ];
}

  instructors = [
    { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    { image: '../assets/playicon1.png', name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', description: 'Lorem ipsum dolor sit amet.', activeCourses: '12 active courses', status: 'Active' },
    { image: '../assets/playicon1.png', name: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', description: 'Lorem ipsum dolor sit amet.', activeCourses: '24 active courses', status: 'Pending' },
    // Add more instructor objects as needed
  ];

  filterOptions = [
    { "label": "Web Development", "value": "webdevelopment" },
    { "label": "Mobile Apps", "value": " mobileapp" },
    { "label": "Graphic Design", "value": "graphics" },
    { "label": "Data Science ", "value": "datascience" },
    { "label": "Machine Learning", "value": "machinelearning" },
    { "label": "Cybersecurity", "value":"cybersecurity" },
    { "label": "Cloud Computing", "value": "cloudcomputing" },
    { "label": "Blockchain Development", "value": "blockchain" },
    { "label": "Artificial Intelligence", "value": "ai" },
    { "label": "DevOps", "value": "devops" },
    { "label": "UI/UX Design", "value": "uiuxdesign " },
    { "label": "Software Testing", "value": "softwaretesting" },
    { "label": "Networking", "value": "networking" },
    { "label": "Big Data", "value": "bigdata" },
    { "label": "Internet of Things (IoT) ", "value": "iot" },
    { "label": "Game Development", "value": "gameDevelopment" },
    { "label": "Robotics", "value": "robotics" },
    { "label": "Augmented and Virtual Reality", "value": "arvr"},
    { "label": "Automation", "value": "automation" },
    { "label": "Database Management", "value": "database" }
]

  members = [
  { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
  { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
  { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
];

showDialog() {
  this.visible = true;
}

showDialog0() {
  this.visible = true;
}

showDialog1() {
  this.visible = true;
}

showDialog2() {
  this.visible = true;
}

  onFilterChange(event: any) {
    console.log('Selected filter:', event.value);
    // Handle the selection logic here
  }

  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  viewallinstitute() {
    console.log('View Details clicked');
    const dialogRef = this.dialog.open(AllinstitutenameComponent, {
      width: "44%",
      height: "auto",
    });
  }

  viewtop5institute() {
    console.log('View Details clicked');
    const dialogRef = this.dialog.open(Top5institutenameComponent, {
      width: "44%",
      height: "auto",
    });
  }

  viewtop10students() {
    console.log('View Details clicked');
    const dialogRef = this.dialog.open(TopstudentslistComponent, {
      width: "44%",
      height: "auto",
    });
  }

  viewpendingpayments() {
    console.log('View Details clicked');
    const dialogRef = this.dialog.open(PendingpaymentsComponent, {
      width: "44%",
      height: "auto",
    });
  }

  EditCourse() {
    console.log('View Details clicked');
    // const dialogRef = this.dialog.open(CourseEditComponent, {
    //   width: "35%",
    //   height: "auto",
    // });
  }

  DeleteCourse() {
    console.log('Activities clicked');
  }

}
