import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddclassDialogComponent } from '../addclass-dialog/addclass-dialog.component';
import { LiveclassDialogComponent } from '../liveclass-dialog/liveclass-dialog.component';


@Component({
  selector: 'app-live-class',
  templateUrl: './live-class.component.html',
  styleUrl: './live-class.component.css'
})
export class LiveClassComponent {

isAddClassDialogOpen: boolean =   false;

  selectedTab: string = 'scheduled';

  // Sample data for scheduled classes
  classes = [
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3CO - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'Ongoing' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'Starting in 60 Minutes' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'Starting in 60 Minutes' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'Starting in 60 Minutes' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'Not Started' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'Not Started' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'Not Started' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'Not Started' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'Not Started' }

  ];

  // Initially empty array for history classes
  historyClasses = [
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3CO - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'completed' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'completed' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'completed' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'completed' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'completed' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'completed' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'completed' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'completed' },
    { title: "How to Make an Array and it's Types in C++", batch: 'Batch 3MY - JYY', time: '01:40 PM', date: '03 Jan 2023', status: 'Not Started' }


  ];
activeIndex: any;


  // Method to switch tabs
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  
 
  constructor(private dialog: MatDialog) {}

  toggleAddClass(): void {
    const dialogRef = this.dialog.open(AddclassDialogComponent,{
      width: "35%",
      height: "auto",
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        // handle the result here (e.g., add the class to the list)
      }
    });
  }
  viewDetails(): void {
   const dialogRef = this.dialog.open(LiveclassDialogComponent, {
          width: "65%",
          height: "auto",
   });
   
    }
  
}
