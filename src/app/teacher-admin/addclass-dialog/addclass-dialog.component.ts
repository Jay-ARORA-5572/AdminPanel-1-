import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedServicesService } from '../shared-services.service';
import { UseraddservicesService } from './addclassservices.service';
import { ClassData, Subject, BATCH_OPTIONS, SUBJECT_OPTIONS, COURSE_OPTIONS } from './addclass-variable';
import { UploadEvent } from 'primeng/fileupload';

@Component({
  selector: 'app-addclass-dialog',
  templateUrl: './addclass-dialog.component.html',
  styleUrls: ['./addclass-dialog.component.css']
})
export class AddclassDialogComponent implements OnInit {

  token: string | null = null;
  selectedFileName: string = '';
  imgsrc: string | ArrayBuffer | null = null;
  classData: ClassData = {}; 
  characterCount: number = 0;
  dropdowndata: Subject[] = [];
  showdropdownsub: boolean = false;

  // Use constants for dropdown options
  batches = BATCH_OPTIONS;
  subjects = SUBJECT_OPTIONS;
  course = COURSE_OPTIONS;
  selectedTopic: any = null;
  selectedBatch: any = null;
  selectedSubject: any = null;
  selectedCourse: any = null;
  batchTouched: boolean = false;
  batchInvalid: boolean = false;
  subjectTouched: boolean = false;
  subjectInvalid: boolean = false;
  courseTouched: boolean = false;
  courseInvalid: boolean = false;
courses: any[]|undefined;

  constructor(
    private messageService: MessageService,
    public dialogRef: MatDialogRef<AddclassDialogComponent>,
    private useradd: UseraddservicesService,
    private sharedservice: SharedServicesService
  ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem("accesstoken");
    console.log("Add class dialog initialized with token:", this.token);
  }

 
  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      const fileName = Array.from(files).map(file => file.name).join(', ');
      const fileNameSpan = document.querySelector('.file-name');
      if (fileNameSpan) {
        fileNameSpan.textContent = fileName;
      }
    }
  }
 

  onSubmit(addClassForm: NgForm): void {
    if (addClassForm.valid) {
      this.addClass(addClassForm);
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill out all required fields' });
      this.validateForm(addClassForm);
      
    }
  }

  validateForm(form: NgForm): void {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if (control instanceof NgForm) {
        Object.keys(control.controls).forEach(innerField => {
          const innerControl = control.controls[innerField];
          innerControl.markAsTouched();
          innerControl.updateValueAndValidity();
        });
      } else {
        control.markAsTouched();
        control.updateValueAndValidity();
      }
    });
  }

  addClass(form: NgForm): void {
    this.classData = {
      ...this.classData,
      classname: form.value.topic,
      classdescription: form.value.classdescription,
      subject: this.selectedSubject,
      batch: this.selectedBatch,
      classDate: form.value.classDate,
      classTime: form.value.classTime
    };

    this.token = localStorage.getItem("accesstoken");

    if (!this.token) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No access token found' });
      return;
    }

    console.log("Sending Data to Server:", this.classData);

    this.useradd.newclassadd(this.classData, this.token).subscribe(
      (res: any) => {
        console.log("Response from server:", res);
        if (res.message === "Successfully Created the Class") {
          console.log("Class added successfully");
          this.sharedservice.myRouteEmitter.emit('Add Class');
          this.sharedservice.refreshData.emit('true');
          form.reset();
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Class added successfully' });
          this.closeDialog();
        } else {
          console.log("Unexpected response message:", res.message);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res.error || 'Unexpected error' });
        }
      },
      (error: any) => {
        console.log("HTTP request error:", error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error?.error || 'An error occurred' });
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  updateCharacterCount(value: string): void {
    this.characterCount = value.length;
  }

  onBatchChange(event: any): void {
    this.batchTouched = true;
    this.batchInvalid = !this.selectedBatch;
  }

  onSubjectChange(event: any): void {
    this.subjectTouched = true;
    this.subjectInvalid = !this.selectedSubject;
    
    if (this.selectedSubject === "subject1") {
      this.getallsubjectdata();
      this.showdropdownsub = true;
    } else {
      this.showdropdownsub = false;
    }
  }

  onCourseChange(event: any): void {
    this.courseTouched = true;
    this.courseInvalid = !this.selectedCourse;
  }

  getallsubjectdata(): void {
    if (this.token) {
      this.useradd.datagetallsubject(this.token).subscribe((res: any) => {
        this.dropdowndata = res.map((i: any) => ({
          subjectId: i.subjectId,
          subjectname: i.subjectname
        }));
      }, (error: any) => {
        console.log("Error fetching subjects:", error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load subjects' });
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No access token found' });
    }
  }
}
