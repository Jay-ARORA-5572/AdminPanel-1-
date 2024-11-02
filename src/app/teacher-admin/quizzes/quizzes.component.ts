import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddquizDialogComponent } from '../addquiz-dialog/addquiz-dialog.component';
import { QuizzesQuestionBankViewDetailsDialogComponent } from '../quizzes-question-bank-view-details-dialog/quizzes-question-bank-view-details-dialog.component';
import { QuizHistoryViewDetailsDialogComponent } from '../quiz-history-view-details-dialog/quiz-history-view-details-dialog.component';



@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css'
})
export class QuizzesComponent {


  constructor(private dialog: MatDialog) { }

  quizzes = [
    {
      title: 'Articulate structure of C++ and Java in Semester 1',
      course: 'B.Tech Specialization in Health Informatics',
      subject: 'Network Engineering',
      date: '3-01-2023',
      time: '12:30 AM - 01:40 PM',
      questions: 50,
      passingPercentage: 70
    },
    {
      title: 'Articulate structure of C++ and Java in Semester 1',
      course: 'B.Tech Specialization in Health Informatics',
      subject: 'Data Analysis',
      date: '10-01-2023',
      time: '10:00 AM - 11:30 AM',
      questions: 40,
      passingPercentage: 65
    }
    // Add more quizzes here as needed
  ];
  


  // Define your questionbank data
  questionbank = {
    title: 'Mathematics',
    course: 'B.Tech Specialization in Health Informatics',
    subject: 'Network Engineering',
    questions: 1654,
  };
  // Define your history data
  history ={
    title: 'Articulate structure of C++ and Java in Semester 1',
    course: 'B.Tech Specialization in Health Informatics',
    subject: 'Network Engineering',
    date: '3-01-2023',
    time: '12:30 AM - 01:40 PM',
    questions: 50,
    passingPercentage: 70
  };

  //navbar data
  activeTab: string = 'scheduled'; // Default tab
 
  

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  viewDetails(): void{

  }

  questionbankViewDetails(): void {
    const dialogRef = this.dialog.open(QuizzesQuestionBankViewDetailsDialogComponent, {
      width: "55%",
      height: "90%",
    });
    
    // You can navigate to another page or open a modal with more details
  }

  historyViewDetails(): void {
    const dialogRef = this.dialog.open(QuizHistoryViewDetailsDialogComponent, {
      width: "55%",
      height: "90%",
    });
    
    // You can navigate to another page or open a modal with more details
  }

  addQuiz(): void {
    const dialogRef = this.dialog.open(AddquizDialogComponent, {
      width: "97%",
      height: "97%",
    });
    // You can navigate to a form to add a new quiz
  }

  
  

}
