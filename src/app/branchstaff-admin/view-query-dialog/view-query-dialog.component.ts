import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DocumentWalletComponent } from '../document-wallet/document-wallet.component';


@Component({
  selector: 'app-view-query-dialog',
  templateUrl: './view-query-dialog.component.html',
  styleUrl: './view-query-dialog.component.css'
})
export class ViewQueryDialogComponent {




  firstName: string = "Alex";
  lastName: string = "Smith";
  centerPincode: string = "302021";
  centerDistrict: string = "Almora";
  centerState: string = "Uttarakhand";
  centerAddress: string =
    "Plot no. 116, Lane number 4, Rathore nagar, Vaishali nagar, Jaipur";
  centerContact: string = "12345 69870";
  centeremail: string = "example@gmail.com";

  // --------appointment-----------
  appointments = [
    { doctor: 'Sarah Clarke', visitType: 'Chronic care visit', date: '09/02/2020', time: '11:30-12:00 AM', status: 'Confirmed' },
    { doctor: 'Leela Kearney', visitType: 'New symptom visit', date: '09/02/2020', time: '11:30-12:00 AM', status: 'Confirmed' },
    { doctor: 'Neel Galvan', visitType: 'Follow up visit', date: '08/29/2020', time: '11:30-12:00 AM', status: 'Completed' },
    { doctor: 'John Garner', visitType: 'Follow up visit', date: '08/20/2020', time: '10:00-11:30 AM', status: 'Completed' },
    { doctor: 'Maria Kenny', visitType: 'Annual medicare wellness visit', date: '08/21/2020', time: '16:30-17:00 PM', status: 'Canceled' },
    { doctor: 'Jeff Wiggins', visitType: 'Urgent', date: '08/19/2020', time: '11:30-12:00 AM', status: 'Completed' }
  ];


  constructor(private dialog: MatDialog) {}

  viewWallet() {
    this.dialog.closeAll();
    this.dialog.open(DocumentWalletComponent, {
        width: "auto",
        height: "90%",
    });
  }

}
