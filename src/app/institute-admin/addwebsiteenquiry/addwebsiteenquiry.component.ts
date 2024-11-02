import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MatDialogRef } from '@angular/material/dialog';

interface Document {
  name: string
}

@Component({
  selector: 'app-addwebsiteenquiry',
  templateUrl: './addwebsiteenquiry.component.html',
  styleUrl: './addwebsiteenquiry.component.css'
})
export class AddwebsiteenquiryComponent {

  constructor(private messageService: MessageService, public dialogRef: MatDialogRef<AddwebsiteenquiryComponent>) { }

  ngOnInit() {
    this.Documents = [
        { name: '10th Grade Certificate: Marksheet and Passing Certificate' },
        { name: '12th Grade Certificate: Marksheet and Passing Certificate' },
        { name: 'Undergraduate Degree Certificate: B.A., B.Sc., B.Com., etc.' },
        { name: 'Postgraduate Degree Certificate: M.A., M.Sc., M.Com., etc.' },
        { name: 'Diploma Certificate: Technical or vocational diplomas.' },
        { name: 'Transcripts: Detailed records of grades/marks obtained.' },
        { name: 'Migration Certificate: Required for transferring from one institution to another.' },
        { name: 'Aadhaar Card: Unique identification number issued by the Indian government.' },
        { name: 'PAN Card: Permanent Account Number for tax purposes.' },
        { name: 'Voter ID: Identification for voting.' },
        { name: 'Birth Certificate: Proof of age.' },
        { name: 'Caste Certificate: For SC/ST/OBC students, required for reservations.' },
        { name: 'EWS Certificate: Economically Weaker Section certificate for eligibility in certain reservations.' },
        { name: 'Sports Certificate: For achievements in sports, may be required for admissions or scholarships.' },
        { name: 'Passport Size Photograph: Required for various applications and documents.' },
        { name: 'Signature: Digital or physical signature as required on forms.' },
        { name: 'Character Certificate: Issued by educational institutions or authorities.' },
        { name: 'Medical Certificate: For health-related applications or sports.' },
        { name: 'Transfer Certificate: Issued when transferring from one school or college to another.' },
        { name: 'Income Certificate: Proof of income for scholarships or fee waivers.' },
        { name: 'Fee Receipt: Proof of payment for educational institutions.' },
        { name: 'Loan Approval Document: For education loans if applicable.' },
        { name: 'Course Completion Certificate: For any additional courses taken.' },
        { name: 'Community Certificate: Proof of belonging to a particular community for benefits or reservations.' }
    ];
}

  Documents!: Document[];

  selectedDocuments!: Document[];

  courseSelect:any;

  value1: string | undefined;

  value2: string | undefined;

  value3: string | undefined;

  value: string | undefined;

  selectedCategory: any;

  onCancelClick(): void {
    this.dialogRef.close();
  }
 
  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      const fileName = Array.from(files).map(file => file.name).join(', ');
      const fileNameSpan = document.querySelector('.file-name');
      if (fileNameSpan) {
        fileNameSpan.textContent = fileName;
      }
    }
  }

  courses = [
    { label: 'UI/UX Design with Adobe XD', value: 'UI/UX Design with Adobe XD' },
    { label: 'Front-end Development', value: 'Front-end Development' },
    { label: 'Responsive Design', value: 'Responsive Design' },
    { label: 'UI/UX Design with Adobe XD', value: 'UI/UX Design with Adobe XD' },
    { label: 'Front-end Development', value: 'Front-end Development' },
    { label: 'Responsive Design', value: 'Responsive Design' },
    { label: 'UI/UX Design with Adobe XD', value: 'UI/UX Design with Adobe XD' },
    { label: 'Front-end Development', value: 'Front-end Development' },
    { label: 'Responsive Design', value: 'Responsive Design' },
  ];

}
