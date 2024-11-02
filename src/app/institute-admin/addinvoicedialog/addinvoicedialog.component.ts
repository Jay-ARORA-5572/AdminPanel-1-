import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { InvoiceListComponent } from '../invoice-list/invoice-list.component';

@Component({
  selector: 'app-addinvoicedialog',
  templateUrl: './addinvoicedialog.component.html',
  styleUrl: './addinvoicedialog.component.css'
})
export class AddinvoicedialogComponent {

constructor(public dialogRef: MatDialogRef<InvoiceListComponent>) { }

}
