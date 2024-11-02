import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddjobsComponent } from '../addjobs/addjobs.component';

@Component({
  selector: 'app-postjobs',
  templateUrl: './postjobs.component.html',
  styleUrl: './postjobs.component.css'
})
export class PostjobsComponent {

  constructor(private dialog: MatDialog) { }

  addJobs() {
    const dialogRef = this.dialog.open(AddjobsComponent, {
      width: "40%",
      height: "auto",
    });
  }

}
