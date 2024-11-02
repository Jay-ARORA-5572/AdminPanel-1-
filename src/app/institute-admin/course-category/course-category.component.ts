import { Component } from '@angular/core';
import { AddcoursecategoryComponent } from '../addcoursecategory/addcoursecategory.component';
import { MessageService } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategorylistserviceService } from './categorylistservice.service';

interface Course {
  id: string;
  title: string;
  description: string;
  tags: string[];
  iconColor: string;
  iconText: string;
}
@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrl: './course-category.component.css'
})
export class CourseCategoryComponent {

  categories: any = []

  constructor(private route: Router, private dialog: MatDialog, private messageService: MessageService, private listcategory: CategorylistserviceService) { }

  token: any;

  ngOnInit(): void {
    this.token = localStorage.getItem("accesstoken")
    this.listofcategory();
  }


  listofcategory() {
    let institutionid = "66a4dd2110fd3e344773cd3b"

    this.listcategory.listcategorylist(institutionid, this.token).subscribe((res: any) => {

      this.categories=res["data"];
      
    });
  }

  






  selectedFilter: any;
  menuItems = [
    { label: 'Option 1', icon: 'pi pi-fw pi-calendar' },
    { label: 'Option 2', icon: 'pi pi-fw pi-refresh' },
  ];

  courses: any = [
    {
      id: 'graphics-design',
      title: 'Graphics Design',
      description: 'Website Design & Develop the website with web applications',
      tags: ['Photoshop', 'Adobe Illustrator', 'Logo Design', 'Drawing', 'Figma'],
      iconColor: 'blue',
      iconText: 'GD'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Website Design & Develop the website with web applications',
      tags: ['Responsive Design', 'Wordpress Customization', 'Theme Development', 'Bootstrap', 'HTML & CSS Grid'],
      iconColor: 'yellow',
      iconText: 'WD'
    },
    {
      id: 'mobile-application',
      title: 'Mobile Application',
      description: 'Website Design & Develop the website with web applications',
      tags: ['Mobile App Design', 'User Interface', 'Design Thinking', 'Prototyping'],
      iconColor: 'grey',
      iconText: 'MA'
    },
    // Repeat for other courses...
  ];

  // categories = [
  //   {
  //     iconClass: 'gd-icon',
  //     iconText: 'GD',
  //     title: 'Graphics Design',
  //     description: 'Website Design & Develop the website with web applications',
  //     tags: ['Photoshop', 'Adobe Illustrator', 'Logo Design', 'Drawing', 'Figma']
  //   },
  //   {
  //     iconClass: 'wd-icon',
  //     iconText: 'WD',
  //     title: 'Web Development',
  //     description: 'Website Design & Develop the website with web applications',
  //     tags: ['Responsive Design', 'Wordpress Customization', 'Theme Development', 'Bootstrap', 'HTML & CSS Grid']
  //   },
  //   {
  //     iconClass: 'ma-icon',
  //     iconText: 'MA',
  //     title: 'Mobile Application',
  //     description: 'Website Design & Develop the website with web applications',
  //     tags: ['Mobile App Design', 'User Interface', 'Design Thinking', 'Prototyping']
  //   },
  // ];

  filterOptions = [
    { "label": "Web Development", "value": "webdevelopment" },
    { "label": "Mobile Apps", "value": " mobileapp" },
    { "label": "Graphic Design", "value": "graphics" },
    { "label": "Data Science ", "value": "datascience" },
    { "label": "Machine Learning", "value": "machinelearning" },
    { "label": "Cybersecurity", "value": "cybersecurity" },
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
    { "label": "Augmented and Virtual Reality", "value": "arvr" },
    { "label": "Automation", "value": "automation" },
    { "label": "Database Management", "value": "database" }
  ]

  onFilterChange(event: any) {
    console.log('Selected filter:', event.value);
    // Handle the selection logic here
  }

  getTagClass(tag: string): string {
    switch (tag) {
      case 'Photoshop': return 'violet-tag';
      case 'Adobe Illustrator': return 'red-tag';
      case 'Logo Design': return 'pink-tag';
      case 'Drawing': return 'yellow-tag';
      case 'Figma': return 'grey-tag';
      case 'Responsive Design': return 'violet-tag';
      case 'Wordpress Customization': return 'red-tag';
      case 'Theme Development': return 'pink-tag';
      case 'Bootstrap': return 'yellow-tag';
      case 'HTML & CSS Grid': return 'grey-tag';
      case 'Mobile App Design': return 'violet-tag';
      case 'User Interface': return 'red-tag';
      case 'Design Thinking': return 'pink-tag';
      case 'Prototyping': return 'yellow-tag';
      default: return 'grey-tag';
    }
  }



  addCategory() {
    const dialogRef = this.dialog.open(AddcoursecategoryComponent, {
      width: "30%",
      height: "auto",
    });
  }

}
