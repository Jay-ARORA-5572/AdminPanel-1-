import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopup } from 'primeng/confirmpopup';
import { MatDialog } from '@angular/material/dialog';
import { AddpostalpackagesComponent } from '../addpostalpackages/addpostalpackages.component';

interface City {
  name: string,
  icon: string
}

interface ViewOption {
  name: string,
  icon: string
}

@Component({
  selector: 'app-postal-service',
  templateUrl: './postal-service.component.html',
  styleUrl: './postal-service.component.css'
})
export class PostalServiceComponent implements OnInit {

  country: any;
  state: any;

constructor(private confirmationService: ConfirmationService, private dialog: MatDialog , private messageService: MessageService) {
  this.statusOptions = [
    { label: 'Online', value: 'Online' },
    { label: 'Offline', value: 'Offline' },
  ];
  this.instructors = [
    { phone: '1', user: 'Web Development', country: 'Poonam', activeCourses: '2023-02-07 16:27:15' },
    { phone: '2', user: 'Digital Marketing', country: 'Poonam', activeCourses: '2023-02-07 16:49:26' },
    { phone: '1', user: 'Web Development', country: 'Poonam', activeCourses: '2023-02-07 16:27:15' },
    { phone: '2', user: 'Digital Marketing', country: 'Poonam', activeCourses: '2023-02-07 16:49:26' },
    { phone: '1', user: 'Web Development', country: 'Poonam', activeCourses: '2023-02-07 16:27:15' },
    { phone: '2', user: 'Digital Marketing', country: 'Poonam', activeCourses: '2023-02-07 16:49:26' },
    { phone: '1', user: 'Web Development', country: 'Poonam', activeCourses: '2023-02-07 16:27:15' },
    { phone: '2', user: 'Digital Marketing', country: 'Poonam', activeCourses: '2023-02-07 16:49:26' },
    { phone: '1', user: 'Web Development', country: 'Poonam', activeCourses: '2023-02-07 16:27:15' },
    { phone: '2', user: 'Digital Marketing', country: 'Poonam', activeCourses: '2023-02-07 16:49:26' },
    { phone: '1', user: 'Web Development', country: 'Poonam', activeCourses: '2023-02-07 16:27:15' },
    { phone: '2', user: 'Digital Marketing', country: 'Poonam', activeCourses: '2023-02-07 16:49:26' },
    { phone: '1', user: 'Web Development', country: 'Poonam', activeCourses: '2023-02-07 16:27:15' },
    { phone: '2', user: 'Digital Marketing', country: 'Poonam', activeCourses: '2023-02-07 16:49:26' },
    { phone: '1', user: 'Web Development', country: 'Poonam', activeCourses: '2023-02-07 16:27:15' },
    { phone: '2', user: 'Digital Marketing', country: 'Poonam', activeCourses: '2023-02-07 16:49:26' },
    { phone: '1', user: 'Web Development', country: 'Poonam', activeCourses: '2023-02-07 16:27:15' },
    { phone: '2', user: 'Digital Marketing', country: 'Poonam', activeCourses: '2023-02-07 16:49:26' },
    { phone: '1', user: 'Web Development', country: 'Poonam', activeCourses: '2023-02-07 16:27:15' },
    { phone: '2', user: 'Digital Marketing', country: 'Poonam', activeCourses: '2023-02-07 16:49:26' },
    { phone: '1', user: 'Web Development', country: 'Poonam', activeCourses: '2023-02-07 16:27:15' },
    { phone: '2', user: 'Digital Marketing', country: 'Poonam', activeCourses: '2023-02-07 16:49:26' },
    { phone: '1', user: 'Web Development', country: 'Poonam', activeCourses: '2023-02-07 16:27:15' },
    { phone: '2', user: 'Digital Marketing', country: 'Poonam', activeCourses: '2023-02-07 16:49:26' },
    // Add more instructor objects as needed
  ];
}

ngOnInit() {
  this.cities = [
      { icon:'pi pi-envelope', name: 'Send Email to All' },
      { icon:'pi pi-ban', name: 'Suspend Selected' },
      { icon:'pi pi-trash', name: 'Remove Selected' }
  ];

  this.viewOption = [
    { icon:'pi pi-eye', name: 'View Details' },
    { icon:'pi pi-wave-pulse', name: 'Activities' }
  ]
}

statusOptions: any[];

first: number = 0;
rows: number = 2;
checkedall: boolean = false;
checkedone: boolean = false;

instructors: any[];

cities!: City[];
selectedCity!: City;

viewOption!: ViewOption[];
selectedOption!: ViewOption;

@ViewChild(ConfirmPopup) confirmPopup!: ConfirmPopup;



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

enrollStudent() {
  // Add logic to enroll the student
}

getStatusClass(status: string): string {
  return status;
}

onPageChange(event: any) {
  console.log(event);
  this.first = event.first;
  this.rows = event.rows;
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

addnew() {
  const dialogRef = this.dialog.open(AddpostalpackagesComponent, {
    width: "60%",
    // height: "75%",
    height: "auto",
  });
}

}
