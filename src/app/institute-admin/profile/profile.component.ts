import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopup } from 'primeng/confirmpopup';

interface City {
  name: string,
  icon: string
}

interface ViewOption {
  name: string,
  icon: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  checked: boolean = false;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.statusOptions = [
      { label: 'Online', value: 'Online' },
      { label: 'Offline', value: 'Offline' },
    ];
    this.instructors = [
      { phone: '1', user: '+811 758-756433', country: '$28000', activeCourses: '12 active courses', status: 'Online' },
      { phone: '2', user: '+811 534-98324', country: '$20000', activeCourses: '24 active courses', status: 'Offline' },
      { phone: '1', user: '+811 758-756433', country: '$25800', activeCourses: '12 active courses', status: 'Online' },
      { phone: '2', user: '+811 534-98324', country: '$20000', activeCourses: '24 active courses', status: 'Offline' },
      { phone: '1', user: '+811 758-756433', country: '$25800', activeCourses: '12 active courses', status: 'Online' },
      { phone: '2', user: '+811 534-98324', country: '$20000', activeCourses: '24 active courses', status: 'Offline' },
      { phone: '1', user: '+811 758-756433', country: '$25800', activeCourses: '12 active courses', status: 'Online' },
      { phone: '2', user: '+811 534-98324', country: '$20000', activeCourses: '24 active courses', status: 'Offline' },
      { phone: '1', user: '+811 758-756433', country: '$25800', activeCourses: '12 active courses', status: 'Online' },
      { phone: '2', user: '+811 534-98324', country: '$20000', activeCourses: '24 active courses', status: 'Offline' },
      { phone: '1', user: '+811 758-756433', country: '$25800', activeCourses: '12 active courses', status: 'Online' },
      { phone: '2', user: '+811 534-98324', country: '$20000', activeCourses: '24 active courses', status: 'Offline' },
      { phone: '1', user: '+811 758-756433', country: '$25800', activeCourses: '12 active courses', status: 'Online' },
      { phone: '2', user: '+811 534-98324', country: '$20000', activeCourses: '24 active courses', status: 'Offline' },
      { phone: '1', user: '+811 758-756433', country: '$25800', activeCourses: '12 active courses', status: 'Online' },
      { phone: '2', user: '+811 534-98324', country: '$20000', activeCourses: '24 active courses', status: 'Offline' },
      { phone: '1', user: '+811 758-756433', country: '$25800', activeCourses: '12 active courses', status: 'Online' },
      { phone: '2', user: '+811 534-98324', country: '$20000', activeCourses: '24 active courses', status: 'Offline' },
      { phone: '1', user: '+811 758-756433', country: '$25800', activeCourses: '12 active courses', status: 'Online' },
      { phone: '2', user: '+811 534-98324', country: '$20000', activeCourses: '24 active courses', status: 'Offline' },
      { phone: '1', user: '+811 758-756433', country: '$25800', activeCourses: '12 active courses', status: 'Online' },
      { phone: '2', user: '+811 534-98324', country: '$20000', activeCourses: '24 active courses', status: 'Offline' },
      { phone: '1', user: '+811 758-756433', country: '$25800', activeCourses: '12 active courses', status: 'Online' },
      { phone: '2', user: '+811 534-98324', country: '$20000', activeCourses: '24 active courses', status: 'Offline' },
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

  country: any;
  state: any;

  statusOptions: any[];

  first: number = 0;
  rows: number = 4;
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


}