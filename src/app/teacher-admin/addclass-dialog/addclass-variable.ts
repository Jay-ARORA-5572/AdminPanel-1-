// Define the structure for ClassData
export interface ClassData {
  classname?: string;
  classdescription?: string;
  subject?: any; // Adjust type as necessary
  batch?: any;   // Adjust type as necessary
  classDate?: string;
  classTime?: string;
  material?: string | ArrayBuffer | null;
}

// Define the structure for Subject
export interface Subject {
  subjectId: string;
  subjectname: string;
}

// Define options for Batches
export const BATCH_OPTIONS = [
  { label: 'Batch 1', value: 'batch1' },
  { label: 'Batch 2', value: 'batch2' },
  { label: 'Batch 3', value: 'batch3' },
  { label: 'Batch 4', value: 'batch4' },
  { label: 'Batch 5', value: 'batch5' },
  // Add more options as needed
];

// Define options for Subjects
export const SUBJECT_OPTIONS = [
  { label: 'Subject 1', value: 'subject1' },
  { label: 'Subject 2', value: 'subject2' },
  { label: 'Subject 3', value: 'subject3' },
  { label: 'Subject 4', value: 'subject4' },
  { label: 'Subject 5', value: 'subject5' },
  // Add more options as needed
];

// Define options for Courses (if applicable)
export const COURSE_OPTIONS = [
  { label: 'Course 1', value: 'course1' },
  { label: 'Course 2', value: 'course2' },
  { label: 'Course 3', value: 'course3' },
  { label: 'Course 4', value: 'course4' },
  { label: 'Course 5', value: 'course5' },
  // Add more options as needed
];
