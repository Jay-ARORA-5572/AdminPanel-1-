import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CourseServiceService } from './course-service.service';
import { SharedService } from '../shared.service';
import { MatDialogRef } from '@angular/material/dialog';
import { chapter, RegistrationCourse, vidoeupload } from './addcourse-variable';
import { NgForm } from '@angular/forms';



export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
@Component({
  selector: 'app-addcourse-dialog',
  templateUrl: './addcourse-dialog.component.html',
  styleUrl: './addcourse-dialog.component.css'
})
export class AddcourseDialogComponent {


  constructor(private messageService: MessageService, private courseaddservice: CourseServiceService, private sharedService: SharedService, public dialogRef: MatDialogRef<AddcourseDialogComponent>) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("accesstoken")
  }

  @Output() nextCallback = new EventEmitter<void>();
  


  course: any = {}
  videoicon: any = "";
  imgsrc: any = "";
  token: any = "";
  description: any = '';
  // formData: FormData ;
  validatedata: any;
  myfile: any;
  value: string | undefined;

  registercourse: RegistrationCourse = {
    institutionId: '',
    coursename: '',
    coursesubtitle: '',
    duration: '',
    fee: '',
    description: '',
    file: null,
    instructor: '',
    rating: '',
    country: ''
  }



  // 2. chapter create 
  chapterdata: chapter = {
    courseId: "",
    title: ''
  }

  // 3. video upload 
  vidoeuploadata: vidoeupload = {
    courseId: '',
    chapterId: '',
    title: '',
    file: ""
  }

  // Model properties
  selectedInstitution: any;
  selectedCourseName: any;
  selectedDuration: any;
  selectedCountry: any;
  selectedInstructor: any;
  selectedUsername: any;
  selectedCourseCategory: any;

  // Sample data for dropdowns (replace with your actual data)
  users = [
    { label: 'Institute A', value: 1 },
    { label: 'Institute B', value: 2 },
    // Add more options as needed
  ];

  courses = [
    { label: 'Course 1', value: 1 },
    { label: 'Course 2', value: 2 },
    // Add more options as needed
  ];

  duration = [
    { label: '1 Month', value: '1 month' },
    { label: '6 Months', value: '6 months' },
    // Add more options as needed
  ];

  countries = [
    { label: 'Country A', value: 'Country A' },
    { label: 'Country B', value: 'Country B' },
    // Add more options as needed
  ];

  instructors = [
    { label: 'Instructor A', value: 1 },
    { label: 'Instructor B', value: 2 },
    // Add more options as needed
  ];
  paymentMethods = [
    { label: 'Card', value: 'Card' },
    { label: 'Cash', value: 'Cash' },
    { label: 'Online', value: 'Online' },
  ];

  register(registercourse: NgForm, nextCallback: any) {
    console.log(registercourse)

    if (registercourse.valid) {
      let formData:any = new FormData();
      formData.append('institutionId', registercourse.value.institutionId);
      formData.append('coursename', registercourse.value.coursename);
      formData.append('duration', registercourse.value.duration);
      formData.append('fee', registercourse.value.fee);
      formData.append('coursesubtitle', registercourse.value.coursesubtitle);
      formData.append('instructor', registercourse.value.instructor);
      formData.append('description', registercourse.value.description);
      const fileInput = document.getElementById('file') as HTMLInputElement;
      
      if (fileInput?.files?.length) {
        formData.append('file', fileInput.files[0]);
      }
      // Log form data
        for (let pair of formData.entries()) {
          console.log("hello -->"+pair[0] + ': ' + pair[1]);
        }

        this.courseaddservice.registercourse(formData, this.token).subscribe((res: any) => {
        if (res['success'] == "course created successfully") {
          console.log(res);
          nextCallback.emit();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Course add successfully' })
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res })
        }
      }, (error) => {
        console.log("111. HTTP request error:", error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error["error"]["error"] });
      });
      }
    
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' })
      }

  }

  courseimage(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.imgsrc = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }


  // Create Chapter  -2
  chapterupload(values: any, nextCallback: any) {
    let valid;
    valid = values['form']['status']
    this.chapterdata.courseId = values["form"]["value"]["courseId"]
    this.chapterdata.title = values["form"]["value"]["title"]
    console.log("129. chapter data -------->", this.chapterdata)

    if (valid == "VALID") {
      nextCallback.emit();
      this.courseaddservice.addchapter(this.chapterdata, this.token).subscribe((res: any) => {
        console.log(res);
        if (res['success'] == "Chapter added successfully") {
          nextCallback.emit();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Course add successfully' })
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res })
        }
      }, (error) => {
        console.log("111. HTTP request error:", error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error["error"]["error"] });
      });

    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' })
    }
  }


  // Upload Video -3
  courseuploadvideo(values: any) {
    let valid;
    valid = values['form']['status']

    this.vidoeuploadata.courseId = values["form"]["value"]["courseId"]
    this.vidoeuploadata.chapterId = values["form"]["value"]["chapterId"]
    this.vidoeuploadata.title = values["form"]["value"]["title"]
    console.log("161. video upload data ------->", this.vidoeuploadata)

    if (valid == "VALID") {
      this.courseaddservice.uploadvideo(this.vidoeuploadata, this.token).subscribe((res: any) => {
        console.log(res);
        if (res['success'] == "Video added successfully") {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Course add successfully' })
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res })
        }
      }, (error) => {
        console.log("111. HTTP request error:", error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error["error"]["error"] });
      });
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' })
    }
  }


  uploadvideo(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.videoicon = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }



  cancel() {
    console.log("cancel")
    this.sharedService.myRouteEmitter.emit('Dashboard');
  }

  // Close Dialog box

  onCancelClick(): void {
    this.dialogRef.close();
  }


}
