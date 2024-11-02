import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-viewdetailsschedule-dialog',
  templateUrl: './viewdetailsschedule-dialog.component.html',
  styleUrls: ['./viewdetailsschedule-dialog.component.css']  // Corrected to styleUrls
})
export class ViewdetailsscheduleDialogComponent {
   // Define component properties
    taskStatus: string = 'not started';
  taskStatusOptions: any[] = [
    { label: 'Not Started', value: 'not-started' },
    { label: 'In Progress', value: 'in-progress' },
    { label: 'Completed', value: 'completed' }
  ];
   dueDate: string = '12:00 PM | 12 Sep 2023';  // This would typically come from an API or form input
   taskTitle: string = 'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming';
   assignedBy: string = 'Harsh Kadyan';
   description: string = `
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi esse sequi nostrum. Non earum nulla velit ullam obcaecati laboriosam omnis nam temporibus, neque aut quidem, exercitationem mollitia. Sit, non nemo!
Possimus, consectetur iste dolore, veniam quidem rem omnis eaque eum corporis, fuga dolor. Sunt, deserunt quibusdam. Dicta ea possimus sed voluptatum, dignissimos et. Omnis, reiciendis perspiciatis maiores aut alias quae?
Dignissimos cum aut vitae aperiam magni consequuntur eveniet, asperiores quisquam minima voluptatum minus molestias nisi reiciendis dolorem molestiae autem cupiditate atque veritatis perferendis tempora? Nulla itaque qui quasi repellendus ratione.
Pariatur in fuga ipsam dignissimos eaque incidunt, suscipit quibusdam iste aperiam expedita repellat delectus libero, voluptatibus cumque quia, asperiores cum laborum id obcaecati ducimus! Eveniet vero eum amet inventore dolor?
Ipsum ad, numquam quia nobis sequi illo error corporis! Possimus delectus, laudantium qui similique nihil dolore accusamus nisi, aspernatur adipisci blanditiis libero reprehenderit? Quod alias quibusdam saepe odit nam delectus.
Adipisci consequatur labore, sed tenetur aperiam praesentium maxime possimus similique corporis sapiente. Dignissimos dicta distinctio mollitia ipsam. Maiores nulla est, minus, non, numquam molestias sunt eius voluptatibus pariatur impedit temporibus.
Quisquam cum, asperiores error at distinctio totam perspiciatis unde sit, aliquid nobis qui molestiae doloribus cumque voluptates tempora a autem modi vero? Eos, repellendus! Placeat adipisci aliquid vero illum quidem.
Unde quasi assumenda eius fuga saepe iusto itaque molestiae, sit nisi vel fugit necessitatibus architecto perspiciatis libero illo dicta ipsum rerum aut sequi ullam? Provident commodi ab labore doloremque sequi.
     `;
 
   // List of attachments (mock data for now)
   attachments: string[] = [
     'New Assignment .pdf', 'New Assignment .pdf', 'New Assignment .pdf', 
     'New Assignment .pdf', 'New Assignment .pdf', 'New Assignment .pdf',
     'New Assignment .pdf', 'New Assignment .pdf', 'New Assignment .pdf',
     'New Assignment .pdf', 'New Assignment .pdf', 'New Assignment .pdf',
     'New Assignment .pdf', 'New Assignment .pdf', 'New Assignment .pdf',
     'New Assignment .pdf', 'New Assignment .pdf', 'New Assignment .pdf'   
   ];
   constructor(
    private dialogs: MatDialog
  ) {}
 
   
  closeDialog(): void {
    this.dialogs.closeAll(); // This will close all open dialogs
  }
 
   saveTask() {
     // Handle saving task details logic
     console.log('Task saved with status:', this.taskStatus);
   }
 }


