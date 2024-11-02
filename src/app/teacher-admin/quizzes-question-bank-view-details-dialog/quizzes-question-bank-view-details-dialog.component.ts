import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogRef } from "@angular/material/dialog";
import { MessageService } from "primeng/api";
import { AddQuestionDialogComponent } from "../add-question-dialog/add-question-dialog.component";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "app-quizzes-question-bank-view-details-dialog",
  templateUrl: "./quizzes-question-bank-view-details-dialog.component.html",
  styleUrl: "./quizzes-question-bank-view-details-dialog.component.css",
})
export class QuizzesQuestionBankViewDetailsDialogComponent {
  // Array of questions with options and correct answers
  questions = [
    {
      text: "Which of the following is not a networking protocol?",
      options: [
        { text: "a. ICP", isCorrect: false },
        { text: "b. DCP", isCorrect: false },
        { text: "c. BCP", isCorrect: true },
        { text: "d. CCP", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is not a programming language?",
      options: [
        { text: "a. Python", isCorrect: false },
        { text: "b. JavaScript", isCorrect: false },
        { text: "c. HTML", isCorrect: true },
        { text: "d. C++", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is not a programming language?",
      options: [
        { text: "a. Python", isCorrect: false },
        { text: "b. JavaScript", isCorrect: false },
        { text: "c. HTML", isCorrect: true },
        { text: "d. C++", isCorrect: false },
      ],
    },
    // You can add more questions as needed
  ];

  // Array to store selected answers for each question
  selectedAnswers: string[] = [];

  // Store whether each answer was correct or wrong
  answerStatus: boolean[] = [];

  constructor(
    public dialog: MatDialog,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public dialogRef: MatDialogRef<QuizzesQuestionBankViewDetailsDialogComponent>
  ) {}
  // Method to handle option selection and store the selected answer
  selectOption(
    questionIndex: number,
    selectedOption: string,
    isCorrect: boolean
  ): void {
    this.selectedAnswers[questionIndex] = selectedOption;
    this.answerStatus[questionIndex] = isCorrect; // Store if the answer is correct or wrong

    if (isCorrect) {
      console.log(
        "Correct answer selected for question " + (questionIndex + 1)
      );
    } else {
      console.log(
        "Incorrect answer selected for question " + (questionIndex + 1)
      );
    }
  }

  // Method to edit a question (You can implement a dialog to edit the question)
  editQuestion(questionIndex: number): void {
    const selectedQuestion = this.questions[questionIndex];
    console.log("Edit question:", selectedQuestion);
  }

  // Method to delete a question
  deleteQuestion(questionIndex: number): void {
    this.questions.splice(questionIndex, 1);
    console.log("Question " + (questionIndex + 1) + " deleted");
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  addQuestion(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(AddQuestionDialogComponent, {
      width: "55%",
      height: "90%",
    });
  }

  confirm2(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to delete all questions?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
  
      accept: () => {
        // Logic to delete all questions
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'All questions deleted' });
      },
      reject: () => {
        // If user cancels the deletion
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Deletion cancelled' });
      }
    });
  }
}
