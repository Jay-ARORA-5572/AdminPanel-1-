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
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrl: './enrollment-list.component.css'
})

export class EnrollmentListComponent implements OnInit {
  statusOptions: any[];

  first: number = 0;
  rows: number = 5;
  checkedall: boolean = false;
  checkedone: boolean = false;

  instructors: any[];

  cities!: City[];
  selectedCity!: City;

  viewOption!: ViewOption[];
  selectedOption!: ViewOption;
  
  @ViewChild(ConfirmPopup) confirmPopup!: ConfirmPopup;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.statusOptions = [
      { label: 'Active', value: 'Active' },
      { label: 'Pending', value: 'Pending' },
      { label: 'Suspend', value: 'Suspend' }
    ];
    this.instructors = [
      { image: '../assets/playicon1.png', user: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', enrollDate: '10-03-22', activeCourses: '12 active courses', status: 'Active' },
      { image: '../assets/playicon1.png', user: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', enrollDate: '10-03-22', activeCourses: '24 active courses', status: 'Pending' },
      { image: '../assets/playicon1.png', user: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', enrollDate: '10-03-22', activeCourses: '12 active courses', status: 'Active' },
      { image: '../assets/playicon1.png', user: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', enrollDate: '10-03-22', activeCourses: '24 active courses', status: 'Pending' },
      { image: '../assets/playicon1.png', user: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', enrollDate: '10-03-22', activeCourses: '12 active courses', status: 'Active' },
      { image: '../assets/playicon1.png', user: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', enrollDate: '10-03-22', activeCourses: '24 active courses', status: 'Pending' },
      { image: '../assets/playicon1.png', user: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', enrollDate: '10-03-22', activeCourses: '12 active courses', status: 'Active' },
      { image: '../assets/playicon1.png', user: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', enrollDate: '10-03-22', activeCourses: '24 active courses', status: 'Pending' },
      { image: '../assets/playicon1.png', user: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', enrollDate: '10-03-22', activeCourses: '12 active courses', status: 'Active' },
      { image: '../assets/playicon1.png', user: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', enrollDate: '10-03-22', activeCourses: '24 active courses', status: 'Pending' },
      { image: '../assets/playicon1.png', user: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', enrollDate: '10-03-22', activeCourses: '12 active courses', status: 'Active' },
      { image: '../assets/playicon1.png', user: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', enrollDate: '10-03-22', activeCourses: '24 active courses', status: 'Pending' },
      { image: '../assets/playicon1.png', user: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', enrollDate: '10-03-22', activeCourses: '12 active courses', status: 'Active' },
      { image: '../assets/playicon1.png', user: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', enrollDate: '10-03-22', activeCourses: '24 active courses', status: 'Pending' },
      { image: '../assets/playicon1.png', user: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', enrollDate: '10-03-22', activeCourses: '12 active courses', status: 'Active' },
      { image: '../assets/playicon1.png', user: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', enrollDate: '10-03-22', activeCourses: '24 active courses', status: 'Pending' },
      { image: '../assets/playicon1.png', user: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', enrollDate: '10-03-22', activeCourses: '12 active courses', status: 'Active' },
      { image: '../assets/playicon1.png', user: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', enrollDate: '10-03-22', activeCourses: '24 active courses', status: 'Pending' },
      { image: '../assets/playicon1.png', user: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', enrollDate: '10-03-22', activeCourses: '12 active courses', status: 'Active' },
      { image: '../assets/playicon1.png', user: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', enrollDate: '10-03-22', activeCourses: '24 active courses', status: 'Pending' },
      { image: '../assets/playicon1.png', user: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', enrollDate: '10-03-22', activeCourses: '12 active courses', status: 'Active' },
      { image: '../assets/playicon1.png', user: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', enrollDate: '10-03-22', activeCourses: '24 active courses', status: 'Pending' },
      { image: '../assets/playicon1.png', user: 'Abu Bin Ishtiyak', email: 'info@softnio.com', phone: '+811 758-756433', country: 'United States', enrollDate: '10-03-22', activeCourses: '12 active courses', status: 'Active' },
      { image: '../assets/playicon1.png', user: 'Ashley Lawson', email: 'ashley@softnio.com', phone: '+811 534-98324', country: 'United Kingdom', enrollDate: '10-03-22', activeCourses: '24 active courses', status: 'Pending' },
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