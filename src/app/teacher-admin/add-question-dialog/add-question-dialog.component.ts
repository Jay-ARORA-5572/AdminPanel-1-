import { ChangeDetectorRef, Component,Output, Input,EventEmitter, } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-add-question-dialog',
  templateUrl: './add-question-dialog.component.html',
  styleUrls: ['./add-question-dialog.component.css']
})
export class AddQuestionDialogComponent {
  @Output() nextCallback = new EventEmitter<void>();
  @Output() prevCallback = new EventEmitter<void>();
  // Define your question structure
  questions: { text: string; options: { text: string }[] }[] = [{ text: '', options: [{ text: '' }] }];

  showFirstScreen = true;
  showSecondScreen = false;
  showThirdScreen = false;

  totalQuestions = 5689;
  uniqueQuestions = 4852;
  repeatedQuestions = 2785;

  questions2 = [
    {
      id: 1,
      text: 'Who was elected as the prime minister of Britain in November 2022?',
      options: [
        { text: 'Rishi Sunak', isCorrect: true },
        { text: 'Bill Harry', isCorrect: false },
        { text: 'Prince Charles', isCorrect: false },
        { text: 'Lady Diana', isCorrect: false },
      ],
      hasImage: false
    },
    {
      id: 2,
      text: 'Who was elected as the prime minister of Britain in November 2022?',
      options: [
        { text: 'Rishi Sunak', isCorrect: true },
        { text: 'Bill Harry', isCorrect: false },
        { text: 'Prince Charles', isCorrect: false },
        { text: 'Lady Diana', isCorrect: false },
      ],
      hasImage: true,
      imageUrl: 'assets/question-image.jpg'
    }
  ];

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef, private confirmationService: ConfirmationService, private messageService: MessageService,public dialogRef: MatDialogRef<AddQuestionDialogComponent>) { }



  ngOnInit(): void {
    this.datachart();
 
  }

  // Cancel and close dialog
  onCancelClick(): void {
    this.dialogRef.close();
  }

  // Add new option to a specific question
  onAddOption(qIndex: number) {
    this.questions[qIndex].options.push({ text: '' });
  }

  // Remove an option from a question
  onRemoveOption(qIndex: number, optionIndex: number) {
    if (this.questions[qIndex].options.length > 1) {
      this.questions[qIndex].options.splice(optionIndex, 1);
    }
  }

  // Add image to a question (logic to be added)
  onAddImageToQuestion(qIndex: number) {
    console.log(`Add image to question ${qIndex + 1}`);
  }

  // Add image to an option (logic to be added)
  onAddImageToOption(qIndex: number, optionIndex: number) {
    console.log(`Add image to option ${optionIndex + 1} of question ${qIndex + 1}`);
  }

  // Delete a question
  onDeleteQuestion(qIndex: number) {
    if (this.questions.length > 1) {
      this.questions.splice(qIndex, 1);
    }
  }

  // Add a new question
  onAddQuestion() {
    this.questions.push({ text: '', options: [{ text: '' }] });
  }

  
  
  // Proceed to next steps
  onProceed() {
    console.log('Proceeding with questions:', this.questions);
    this.settimer();
  }

  // prevStep() {
  //   this.prevCallback.emit();
  //   this.settimer();
  // }

  // Timer for switching between screens
  settimer() {
    // Show first screen for 3 seconds
    setTimeout(() => {
      this.showFirstScreen = false;
      this.showSecondScreen = true;
    }, 4000);

    // Show second screen for 3 more seconds
    setTimeout(() => {
      this.showSecondScreen = false;
      this.showThirdScreen = true;
    }, 7000);
  }

  // Preview questions logic
  previewQuestions() {
    console.log("Preview Questions clicked!");
  }

  // Edit a preview question
  previeweditQuestion(index: number) {
    console.log('Edit question at index', index);
  }

 

  // Chart logic
  data: any;
  options: any;

  datachart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Unique', 'Repeated'],
      datasets: [
        {
          data: [30, 70],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500')
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400')
          ]
        }
      ]
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
  }

// Delete all questions
onDeleteAllQuestions(event: Event) {
  this.confirm2(event); // Trigger custom confirm popup
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
        this.questions = [{ text: '', options: [{ text: '' }] }];
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'All questions deleted' });
      },
      reject: () => {
        // If user cancels the deletion
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Deletion cancelled' });
      }
    });
  }



  
   // Delete a preview question
   previewdeleteQuestion(index: number) {
    console.log('Delete button clicked, index:', index);
    this.questions2.splice(index, 1);  // Removes the question from the array
    this.cdr.detectChanges();  // Ensure UI is updated
  }
  confirmDelete(event: Event, index: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to delete this question?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
  
      accept: () => {
        // Logic to delete the specific question
        this.previewdeleteQuestion(index);  // Deletes the question at the specified index
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Question deleted' });
      },
      reject: () => {
        // If user cancels the deletion
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Deletion cancelled' });
      }
    });
  }
  
  
  
}
