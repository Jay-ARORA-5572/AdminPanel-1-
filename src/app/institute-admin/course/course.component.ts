import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddcourseDialogComponent } from '../addcourse-dialog/addcourse-dialog.component';
import { UpdatecourseDialogComponent } from '../updatecourse-dialog/updatecourse-dialog.component';
import * as XLSX from 'xlsx';
import { MessageService,ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})

export class CourseComponent {
drawer: any;


  constructor(private route: Router, private dialog: MatDialog,private messageService: MessageService,private confirmationService: ConfirmationService,) { }

  value: any = ""
  showAnotherComponent = false;
  search_bar: any = false;
  mydata = true
  searcharray: any = [];
  totalbranch = 0
  singlecheck: any = [];
  downloadicon = ""
  downloadicon1 = "up";
  courseData:any;
  

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


  addCourse() {
    const dialogRef = this.dialog.open(AddcourseDialogComponent, {
      width: "65vw",
      height: "80vh",
    });
  }


  viewfunc(event: any) {
    console.log(event);
    // this.sharedservice.setSharedData(event);
    const dialogRef = this.dialog.open(UpdatecourseDialogComponent, {
      width: "60vw",
      height: "65vh",
    });
  }




  checkbox(event: any) {
    console.log(event);
  }

  download(data: any) {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    ws['!cols'] = [{ width: 25 }, { width: 25 }, { width: 25 }];
    Object.keys(ws).forEach((cell) => {
      if (cell !== '!ref' && cell !== '!margins' && cell !== '!cols') {
        ws[cell].s = { ...ws[cell].s, padding: { top: 5, bottom: 5, left: 5, right: 5 } };
      }
    });

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, `Institute.xlsx`);
    console.log("download");
  }

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


  courseDetails(togg:any, data: any) {
    togg.toggle();
    this.courseData = data;
  }

  updatecourse(){  

    const dialogRef = this.dialog.open(UpdatecourseDialogComponent, {
      width: "60vw",
      height: "65vh",
    });
    console.log("Update course function called ")
  }


  conform() {
    console.log("confirm call-------");
    this.confirmationService.confirm({
        header: 'Confirmation',
        message: 'Please confirm to proceed moving forward.',
        acceptIcon: 'pi pi-check mr-2',
        rejectIcon: 'pi pi-times mr-2',
        rejectButtonStyleClass: 'p-button-sm',
        acceptButtonStyleClass: 'p-button-outlined p-button-sm',
        accept: () => {
            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
}



  //   var modal = document.getElementById('id01');

  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //     if (event.target == modal) {
  //         modal.style.display = "none";
  //     }
  // }

  data = [
    {
      "courseicon": "course.png",
      "coursetitle": " Java Full Stack",
      "desc": "Maddie is a front end web developer in New York. She has worked in the field for 10  years now.  Check out her projects in the links below. She is available for hire as well.",
    },
    {
      "courseicon": "test.png",
      "coursetitle": "Advanced Web Development",
      "desc": "Jake is a seasoned full-stack developer based in San Francisco. With 15 years of experience, he specializes in building scalable web applications. Explore his portfolio and contact him for collaboration."
    },
    {
      "courseicon": "image 4.png",
      "coursetitle": "Mobile App Development",
      "desc": "Sarah is an app developer located in Los Angeles. She has been creating mobile apps for various platforms for over 8 years. Browse through her app projects below and reach out for any inquiries."
    },
    {
      "courseicon": "image 7.png",
      "coursetitle": "Data Science Bootcamp",
      "desc": "Alex is a data scientist with expertise in machine learning and statistical analysis. Based in Chicago, he has been working in the field for 7 years. Explore his data science projects and consider him for your data-driven projects."
    },
    {
      "courseicon": "playicon2.png",
      "coursetitle": "UX/UI Design Masterclass",
      "desc": "Emily is a talented UX/UI designer from Seattle. With 12 years of experience, she specializes in creating intuitive and visually appealing user interfaces. Take a look at her design portfolio and connect with her for design collaborations."
    },
    {
      "courseicon": "image 7.png",
      "coursetitle": "Cybersecurity Essentials",
      "desc": "Michael is a cybersecurity expert based in Washington D.C. He has been working in the field for over a decade, securing networks and systems for various organizations. Explore his cybersecurity projects and reach out for consultations."
    },
    {
      "courseicon": "image 4.png",
      "coursetitle": "Cloud Computing Fundamentals",
      "desc": "Sophia is a cloud computing specialist located in Houston. With 9 years of experience, she helps businesses migrate to the cloud and optimize their infrastructure. Discover her cloud projects and consult her for cloud solutions."
    },
    {
      "courseicon": "test.png",
      "coursetitle": "Digital Marketing Strategy",
      "desc": "Daniel is a digital marketing strategist based in Miami. With a background in SEO, PPC, and social media marketing, he helps businesses increase their online presence and revenue. Explore his marketing campaigns and connect with him for marketing advice."
    },
    {
      "courseicon": "image 7.png",
      "coursetitle": "Blockchain Development",
      "desc": "Olivia is a blockchain developer from Boston. With 5 years of experience in blockchain technology, she specializes in developing decentralized applications (dApps). Check out her blockchain projects and collaborate with her on innovative blockchain solutions."
    },
    {
      "courseicon": "test.png",
      "coursetitle": "Blockchain Development",
      "desc": "Olivia is a blockchain developer from Boston. With 5 years of experience in blockchain technology, she specializes in developing decentralized applications (dApps). Check out her blockchain projects and collaborate with her on innovative blockchain solutions."
    },
    {
      "courseicon": "course.png",
      "coursetitle": "Blockchain Development",
      "desc": "Olivia is a blockchain developer from Boston. With 5 years of experience in blockchain technology, she specializes in developing decentralized applications (dApps). Check out her blockchain projects and collaborate with her on innovative blockchain solutions."
    },
    {
      "courseicon": "image 4.png",
      "coursetitle": "Blockchain Development",
      "desc": "Olivia is a blockchain developer from Boston. With 5 years of experience in blockchain technology, she specializes in developing decentralized applications (dApps). Check out her blockchain projects and collaborate with her on innovative blockchain solutions."
    },

  ]

}