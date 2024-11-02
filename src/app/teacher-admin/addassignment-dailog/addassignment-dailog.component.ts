import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { assignmentVariables } from "./addassignment-variable";
import { MessageService } from "primeng/api";
import { Subject } from "rxjs";
import { FormControl, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-addassignment-dailog',
  templateUrl: './addassignment-dailog.component.html',
  styleUrl: './addassignment-dailog.component.css',
  styles: [
    `
      .p-stepper {
        flex-basis: 50rem;
      }
    `,
  ],
})
export class AddassignmentDailogComponent {
  confirmassignment() {
    throw new Error('Method not implemented.');
    }
      @Output() nextCallback = new EventEmitter<void>();
      @Output() prevCallback = new EventEmitter<void>();
    
      // assignment data for form submission
      assignmentedata = {
        totalMarks: 0,
        passingPercentage: 0,
        examDate: null as Date | null,
        examTime: "",
        examName: "",
      };
    
      // Selected course, subject, and tags
      selectedCourse: string = '';
      selectedSubject: string = '';
      selectedTags: string[] = [];
    
      // Course and subject options
      courses: string[] = [
        "B.Tech Specialization in Health Informatics",
        "B.Tech Specialization in Health Informatics",
        "B.Tech Specialization in Health Informatics",
        "B.Tech Specialization in Health Informatics",
        "B.Tech Specialization in Health Informatics",
        "B.Tech Specialization in Health Informatics",
        "B.Tech Specialization in Health Informatics",
      ];
    
      subjects: string[] = [
        "Health Informatics",
        "Networking",
        "Health Informatics",
        "Networking",
        "Health Informatics",
        "Networking",
      ];
    
      // Available tags
      tags: string[] = ["Mathematics", "Physics", "Chemistry", "Biology"];
    
      activeIndex: number = 0; // For stepper index control
      formGroup!: FormGroup;
    
      // State options for form controls
      stateOptions: any[] = [
        { label: "Off", value: "off" },
        { label: "On", value: "on" },
      ];
    
      // assignment rules and time per question
      rules: string = "";
      timePerQuestion: number | null = null;
    
      constructor(private dialogs: MatDialog, private messageService: MessageService) {}
    
      ngOnInit() {
        this.formGroup = new FormGroup({
          value: new FormControl("on"),
        });
      }
    
      // Select course and subject
      onCourseSelect(course: string) {
        this.selectedCourse = course;
      }
    
      onSelectSubject(subject: string) {
        this.selectedSubject = subject;
      }
    
      // Tag selection logic
      onSelectTags(tag: string, isChecked: boolean) {
        if (isChecked) {
          this.selectedTags.push(tag);
        } else {
          this.selectedTags = this.selectedTags.filter((t) => t !== tag);
        }
      }
    
      // Submit the form data
      onSubmit(): void {
        console.log("Form submitted with following data:");
        console.log(this.assignmentedata);
        this.activeIndex++;
      }
    
      examspecification(form: NgForm) {
        if (form.valid) {
          console.log("assignment data:", this.assignmentedata);
          this.messageService.add({
            severity: "success",
            summary: "Success",
            detail: "assignment data submitted successfully",
          });
          this.nextCallback.emit();
        } else {
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: "All fields are required",
          });
        }
      }
    
      // Move between steps
      prevStep() {
        this.prevCallback.emit();
      }
    
      nextStep() {
        this.nextCallback.emit();
      }
    
      // Close the dialog
      closeDialog(): void {
        this.dialogs.closeAll();
      }
    
      // Back button logic
      onBack(): void {
        console.log("Back button clicked");
      }
    
      // Input data for assignment preview (demo data)
      @Input() courseName: string = "B.Tech Spcl. in Health Informatics";
      @Input() subject: string = "Networking";
      @Input() numberOfQuestions: number = 50;
      @Input() passingPercentage: number = 60;
      @Input() assignmentDate: string = "12-01-2023";
    
      // Example batches for display
      // batches: Batch[] = [
      //   { name: "3CO - JVY" },
      //   { name: "3CO - JVY" },
      // ];
    
      // Rules for the assignment
      rule: string[] = [
        "You must use a functioning webcam and microphone",
        "No cell phones or other secondary devices in the room or test area",
      ];
}
