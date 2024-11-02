import { Component } from '@angular/core';

@Component({
  selector: 'app-invoicepayment-details',
  templateUrl: './invoicepayment-details.component.html',
  styleUrl: './invoicepayment-details.component.css'
})
export class InvoicepaymentDetailsComponent {

  // invoice = {
  //   id: '66K5W3',
  //   date: '26 Jan, 2020',
  //   customer: {
  //     name: 'Gregory Anderson',
  //     address: 'House #65, 4328 Marion Street, Newbury, VT 05051',
  //     phone: '+012 8764 556'
  //   }
  // };

  // invoiceItems = [
  //   { id: '24108054', description: 'Dashlite – Conceptual App Dashboard – Regular License', price: 40.00, qty: 5, amount: 200.00 },
  //   { id: '24108054', description: '6 months premium support', price: 25.00, qty: 1, amount: 25.00 },
  //   { id: '23604094', description: 'Invest Management Dashboard – Regular License', price: 131.25, qty: 1, amount: 131.25 },
  //   { id: '23604094', description: '6 months premium support', price: 78.75, qty: 1, amount: 78.75 }
  // ];

  invoice = {
    id: '66K5W3',
    date: '26 Jan, 2020',
    customer: {
      name: 'Gregory Anderson',
      address: 'House #65, 4328 Marion Street, Newbury, VT 05051',
      phone: '+012 8764 556'
    },
    items: [
      { id: '24108054', description: 'Dashlite - Conceptual App Dashboard - Regular License', price: 40.00, qty: 5 },
      { id: '24108054', description: '6 months premium support', price: 25.00, qty: 1 },
      { id: '23604094', description: 'Invest Management Dashboard - Regular License', price: 131.25, qty: 1 },
      { id: '23604094', description: '6 months premium support', price: 78.75, qty: 1 }
    ],
    subtotal: 435.00,
    processingFee: 10.00,
    tax: 43.50,
    get grandTotal() {
      return this.subtotal + this.processingFee + this.tax;
    }
  };
}
