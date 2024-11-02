import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

interface Option {
  name: string,
  icon: string
}

interface City {
  name: string,
  icon: string
}

@Component({
  selector: 'app-instructor-payment',
  templateUrl: './instructor-payment.component.html',
  styleUrl: './instructor-payment.component.css'
})
export class InstructorPaymentComponent {
  checkedall: any;
  checkedone: any;
  first: number = 0;
  rows: number = 5;

  options!: Option[];
  selectedOption!: Option;

  cities!: City[];
  selectedCity!: City;

  constructor(private confirmationService: ConfirmationService) { }

  completepaymentclient: any[] = [
    { name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', accountNumber: '9834/paypal', amount: 7000, paymentDate: '2021-01-10' },
    { name: 'Alan Butler', email: 'butler@example.com', accountNumber: '7623/paypal', amount: 2000, paymentDate: '2021-01-10' },
    { name: 'Victoria Lynch', email: 'victoria@example.com', accountNumber: '98754/paypal', amount: 2500, paymentDate: '2021-01-10' },
    { name: 'Patrick Newman', email: 'patrick@example.com', accountNumber: '7634/paypal', amount: 5000, paymentDate: '2021-01-12' },
    { name: 'Jane Harris', email: 'harris@example.com', accountNumber: '1245/paypal', amount: 3000, paymentDate: '2021-01-11' },
    { name: 'Emma Walker', email: 'walker@example.com', accountNumber: '6675/paypal', amount: 2100, paymentDate: '2021-01-16' },
    { name: 'Alan Butler', email: 'alan@example.com', accountNumber: '5623/paypal', amount: 1500, paymentDate: '2021-05-10' }
  ];


  pendingpaymentclient: any[] = [
    { name: 'Abu Bin Ishtiyak', email: 'info@softnio.com', accountNumber: '9834/paypal', amount: 7000, paymentDate: '2021-01-10' },
    { name: 'Alan Butler', email: 'butler@example.com', accountNumber: '7623/paypal', amount: 2000, paymentDate: '2021-01-10' },
    { name: 'Victoria Lynch', email: 'victoria@example.com', accountNumber: '98754/paypal', amount: 2500, paymentDate: '2021-01-10' },
    { name: 'Patrick Newman', email: 'patrick@example.com', accountNumber: '7634/paypal', amount: 5000, paymentDate: '2021-01-12' },
    { name: 'Jane Harris', email: 'harris@example.com', accountNumber: '1245/paypal', amount: 3000, paymentDate: '2021-01-11' },
    { name: 'Emma Walker', email: 'walker@example.com', accountNumber: '6675/paypal', amount: 2100, paymentDate: '2021-01-16' },
    { name: 'Alan Butler', email: 'alan@example.com', accountNumber: '5623/paypal', amount: 1500, paymentDate: '2021-05-10' },

    // Adding 20 new objects
    { name: 'John Doe', email: 'john.doe@example.com', accountNumber: '1234/paypal', amount: 4500, paymentDate: '2021-01-15' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', accountNumber: '5678/paypal', amount: 5500, paymentDate: '2021-01-20' },
    // Add more entries similarly
  ];

  completepayment(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  pendingpayment(event: any) {
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


  ngOnInit() {
    this.options = [
      { icon: 'pi pi-ban', name: 'Suspend Selected' },
      { icon: 'pi pi-trash', name: 'Remove Selected' }
    ];
    this.cities = [
      { icon: 'pi pi-eye', name: 'View Details' }
    ]
  }

  selectbtn(op:any){
    console.log("select")
    op.hide();
  }

}
