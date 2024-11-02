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
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.css'
})
export class FaqPageComponent implements OnInit {
  country: any;
  state: any;

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

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {

    this.instructors = [
      { phone: '1', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '2', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '1', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '2', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '1', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '2', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '1', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '2', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '1', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '2', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '1', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '2', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '1', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '2', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '1', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '2', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '1', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '2', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '1', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '2', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '1', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '2', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '1', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
      { phone: '2', user: 'Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.', country: 'How Much do You Know About Are you in digital marketing or looking to get into it? Take this assessment quiz to learn what you know and where you may need to improve.?' },
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

