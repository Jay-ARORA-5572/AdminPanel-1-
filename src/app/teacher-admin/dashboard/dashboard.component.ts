import { Component } from '@angular/core';


interface Task {
  title: string;
  assigned: Date;
  due: Date;
  status: string;
}
interface Batch {
  name: string;
  subjects: number;
  students: number;
  quizzes: number;
  exams: number;
  assignments: number;
  endDate: Date;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  //  -----------live classes contant-------------
  classes = [
    {
      title: 'How to Make an Array and its Types in C++',
      batch: '3MY - JVY',
      time: '12:40 PM, 03 Jan 2023',
      status: 'Ongoing',
      classType: 'ongoing'
    },
    {
      title: 'How to Make an Array and its Types in C++',
      batch: '3MY - JVY',
      time: '01:40 PM, 03 Jan 2023',
      status: 'Starting in 60 Minutes',
      classType: 'upcoming'
    },
    {
      title: 'How to Make an Array and its Types in C++',
      batch: '3MY - JVY',
      time: '01:40 PM, 03 Jan 2023',
      status: 'Not Started',
      classType: 'not-started'
    },
    {
      title: 'How to Make an Array and its Types in C++',
      batch: '3MY - JVY',
      time: '12:40 PM, 03 Jan 2023',
      status: 'Ongoing',
      classType: 'ongoing'
    }
    
  ];

  /* ------------------navbar------------------ */

  activeIndex: number = 0;


  // -------------------------task contant---------------
  tasks: Task[] = [
    {
      title: 'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming',
      assigned: new Date('2023-01-03T12:40:00'),
      due: new Date('2023-01-03T15:40:00'),
      status: 'Not Started'
    },
    {
      title: 'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming',
      assigned: new Date('2023-01-03T12:40:00'),
      due: new Date('2023-01-03T15:40:00'),
      status: 'Ongoing'
    },
    {
      title: 'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming',
      assigned: new Date('2023-01-03T12:40:00'),
      due: new Date('2023-01-03T15:40:00'),
      status: 'Completed'
    },
    {
      title: 'Add a Quiz for Students of 3CO - JVY on the subject Fundamentals of Programming',
      assigned: new Date('2023-01-03T12:40:00'),
      due: new Date('2023-01-03T15:40:00'),
      status: 'Missed'
    }
  ];

  viewDetails(task: Task) {
    alert(`Viewing details for: ${task.title}`);
  }


  // -----------batches contant--------------
  batches: Batch[] = [
    {
      name: '3CO - JVY',
      subjects: 25,
      students: 2560,
      quizzes: 35,
      exams: 25,
      assignments: 85,
      endDate: new Date('2027-01-02')
    },
    {
      name: '3CO - JVY',
      subjects: 25,
      students: 2560,
      quizzes: 35,
      exams: 25,
      assignments: 85,
      endDate: new Date('2027-01-02')
    },
    {
      name: '3CO - JVY',
      subjects: 25,
      students: 2560,
      quizzes: 35,
      exams: 25,
      assignments: 85,
      endDate: new Date('2027-01-02')
    },
    {
      name: '3CO - JVY',
      subjects: 25,
      students: 2560,
      quizzes: 35,
      exams: 25,
      assignments: 85,
      endDate: new Date('2027-01-02')
    },
    // Add more batch objects as needed
  ];




}
