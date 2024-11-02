import { Component } from '@angular/core';


interface Document {
  key: string;
  label: string;
  icon: string; // Use icon name from Angular Material
}

interface DocumentCategory {
  name: string;
  documents: Document[];
}

const documentCategories: DocumentCategory[] = [
  {
    name: "Study Documents",
    documents: [
      { key: "tenthGrade", label: "10th Grade Certificate", icon: "school" },
      { key: "twelfthGrade", label: "12th Grade Certificate", icon: "school" },
      { key: "undergraduate", label: "Undergraduate Certificate", icon: "file_upload" },
      { key: "postgraduate", label: "Postgraduate Certificate", icon: "file_upload" },
      { key: "diploma", label: "Diploma Certificate", icon: "file_upload" },
      { key: "certificateCourses", label: "Certificate Courses", icon: "file_upload" },
      { key: "transcripts", label: "Transcripts", icon: "file_upload" },
      { key: "migrationCertificate", label: "Migration Certificate", icon: "file_upload" },
    ],
  },
  {
    name: "Identification Documents",
    documents: [
      { key: "aadhaarCard", label: "Aadhaar Card", icon: "file_upload" },
      { key: "panCard", label: "PAN Card", icon: "file_upload" },
      { key: "voterID", label: "Voter ID", icon: "file_upload" },
      { key: "birthCertificate", label: "Birth Certificate", icon: "file_upload" },
      { key: "ewsCertificate", label: "EWS Certificate", icon: "file_upload" },
      { key: "sportsCertificate", label: "Sports Certificate", icon: "file_upload" },
      { key: "casteCertificate", label: "Caste Certificate", icon: "file_upload" },
    ],
  },
  {
    name: "Financial Documents",
    documents: [
      { key: "incomeCertificate", label: "Income Certificate", icon: "file_upload" },
      { key: "feeReceipt", label: "Fee Receipt", icon: "file_upload" },
      { key: "loanApproval", label: "Loan Approval Document", icon: "file_upload" },
    ],
  },
  {
    name: "Other Necessary Documents",
    documents: [
      { key: "passportSizePhoto", label: "Passport Size Photograph", icon: "file_upload" },
      { key: "signature", label: "Signature", icon: "file_upload" },
      { key: "characterCertificate", label: "Character Certificate", icon: "file_upload" },
      { key: "medicalCertificate", label: "Medical Certificate", icon: "file_upload" },
      { key: "transferCertificate", label: "Transfer Certificate", icon: "file_upload" },
    ],
  },
  {
    name: "Other Documents",
    documents: [
      { key: "communityCertificate", label: "Community Certificate", icon: "file_upload" },
      { key: "courseCompletionCertificate", label: "Course Completion Certificate", icon: "file_upload" },
    ],
  },
];
@Component({
  selector: 'app-document-wallet',
  templateUrl: './document-wallet.component.html',
  styleUrl: './document-wallet.component.css'
})
export class DocumentWalletComponent {

  documents: { [key: string]: File | null } = {};
  isLocked: boolean = false;
  documentCategories = documentCategories;

  constructor() {
    this.initializeDocuments();
  }

  initializeDocuments() {
    documentCategories.forEach(category => {
      category.documents.forEach(doc => {
        this.documents[doc.key] = null;
      });
    });
  }

  handleFileChange(event: Event, key: string) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files ? fileInput.files[0] : null;
    this.documents[key] = file;
  }

  handlePreview(key: string) {
    const file = this.documents[key];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    }
  }

  toggleLock() {
    this.isLocked = !this.isLocked;
  }

  calculateProgress(category: DocumentCategory) {
    const totalDocuments = category.documents.length;
    const uploadedDocuments = category.documents.filter(doc => this.documents[doc.key]).length;
    return (uploadedDocuments / totalDocuments) * 100;
  }
}
