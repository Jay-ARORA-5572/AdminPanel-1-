import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { QuizresultdetailsDialogComponent } from "../quizresultdetails-dialog/quizresultdetails-dialog.component";
import { ExamresultdetailsDialogComponent } from "../examresultdetails-dialog/examresultdetails-dialog.component";
import { AssignmentresultdetailsDialogComponent } from "../assignmentresultdetails-dialog/assignmentresultdetails-dialog.component";

// --------------status card interface------------
interface StatusCard {
  title: string;
  total: number;
  attended?: number;
  missed?: number;
  attempted?: number;
  unattempted?: number;
  passed?: number;
  failed?: number;
}
// ----------quiz interface------------
interface Quiz {
  title: string;
  subject: string;
  date: string;
  time: string;
  passingPercentage: number;
  scoredPercentage: number;
  status: string;
  scoreColor: string;
}
interface Exam {
  title: string;
  subject: string;
  date: string;
  time: string;
  passingPercentage: number;
  scoredPercentage: number;
  status: string;
  scoreColor: string;
}
interface Assignment {
  title: string;
  subject: string;
  date: string;
  time: string;
  passingPercentage: number;
  scoredPercentage: number;
  status: string;
  scoreColor: string;
}
@Component({
  selector: "app-student-profile",
  templateUrl: "./student-profile.component.html",
  styleUrl: "./student-profile.component.css",
})
export class StudentProfileComponent {
  activeIndex: number = 0;

  // -------------header--------------------
  studentName: string = "Karan Khati";
  studentID: string = "TIPSG5682";
  gender: string = "Male";
  attendancePercentage: number = 85;
  totalClassesAttended: number = 85;
  totalClasses: number = 100;

  get attendanceRatio() {
    return `${this.totalClassesAttended}/${this.totalClasses}`;
  }

  // --------------------- General content----------------
  courseName: string = "B.Tech Specialization in Health Informatics";
  studentFullName: string = "Karan Khati";
  motherName: string = "";
  fatherName: string = "";
  courseStartDate: string = "17 Jan 2023";
  courseEndDate: string = "17 Jan 2025";

  centerPincode: string = "302021";
  centerDistrict: string = "Almora";
  centerState: string = "Uttarakhand";
  centerAddress: string =
    "Plot no. 116, Lane number 4, Rathore nagar, Vaishali nagar, Jaipur";
  centerContact: string = "12345 69870";
  centeremail: string = "example@gmail.com";

  //  ---------------------------status card--------------------------------
  statusCards: StatusCard[] = [
    {
      title: "Attendance",
      total: 145,
      attended: 120,
      missed: 25,
    },
    {
      title: "Quiz",
      total: 245,
      attempted: 120,
      unattempted: 125,
      passed: 25,
      failed: 25,
    },
    {
      title: "Exams",
      total: 245,
      attempted: 120,
      unattempted: 125,
      passed: 25,
      failed: 25,
    },
    {
      title: "Assignment",
      total: 245,
      attempted: 120,
      unattempted: 125,
      passed: 25,
      failed: 25,
    },
  ];

  // ----------button----------
  constructor(private dialog: MatDialog) {}

  viewDetails(card: StatusCard) {
    // this.dialog.open(QuizresultdetailsDialogComponent, {
    //   data: {
    //     title: quizdetails.title
    //   }
    // });
  }

  // ------------------------------ quiz content--------------------------

  totalQuizzes = 245;
  attempted = 120;
  unattempted = 125;
  passed = 25;
  failed = 25;

  quizzes: Quiz[] = [
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
      status: "Failed",
      scoreColor: "red",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 75,
      status: "Passed",
      scoreColor: "green",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 0,
      status: "Missed",
      scoreColor: "gray",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
      status: "Failed",
      scoreColor: "red",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
      status: "Passed",
      scoreColor: "green",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
      status: "Failed",
      scoreColor: "red",
    },

    // More quizzes here...
  ];

  quizviewDetails(quiz: Quiz) {
    // Open the quizresultdetails-dialog component and pass the quiz data
    this.dialog.open(QuizresultdetailsDialogComponent, {
      data: {
        quiz: quiz,
        width: "90%",
        height: "90%",
      },
    });
  }

  // -----------------------------------Exam Section----------------------------------

  totalexams = 245;
  examAttempet = 120;
  examUnattempe = 125;
  examPassed = 25;
  examFailed = 25;

  exams: Exam[] = [
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
      status: "Failed",
      scoreColor: "red",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 75,
      status: "Passed",
      scoreColor: "green",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 0,
      status: "Missed",
      scoreColor: "gray",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
      status: "Failed",
      scoreColor: "red",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
      status: "Passed",
      scoreColor: "green",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
      status: "Failed",
      scoreColor: "red",
    },
  ];

  examviewDetails(exam: Exam) {
    // Open the quizresultdetails-dialog component and pass the quiz data
    this.dialog.open(ExamresultdetailsDialogComponent, {
      data: {
        exam: exam,
        width: "90%",
        height: "90%",
      },
    });
  }

  // -----------------------------------Assignment Section----------------------------------

  totalAssignments = 245;
  assignmentAttempted = 120;
  assignmentUnattempted = 125;
  assignmentPassed = 25;
  assignmentFailed = 25;

  assignments: Assignment[] = [
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
      status: "Failed",
      scoreColor: "red",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 75,
      status: "Passed",
      scoreColor: "green",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 0,
      status: "Missed",
      scoreColor: "gray",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
      status: "Failed",
      scoreColor: "red",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
      status: "Passed",
      scoreColor: "green",
    },
    {
      title: "Articulate structure of C++ and Java in Semester 1",
      subject: "Network Engineering",
      date: "3-01-2023",
      time: "12:30 AM - 01:40 PM",
      passingPercentage: 70,
      scoredPercentage: 65,
      status: "Failed",
      scoreColor: "red",
    },
  ];

  assignmentviewDetails(assignment: Assignment) {
    // Open the quizresultdetails-dialog component and pass the quiz data
    this.dialog.open(AssignmentresultdetailsDialogComponent, {
      data: {
        assignment: assignment,
        width: "90%",
        height: "90%",
      },
    });
  }
  // -----------------------------------Classes Section----------------------------------

  totalClass = 245;
  present = 225;
  absent = 25;

  classes = [
    {
      title: "How to Make an Array and its Types in C++",
      batch: "3MY - JVY",
      time: "12:40 PM",
      date: "03 Jan 2023",
      status: "Absent",
      classType: "absent",
    },
    {
      title: "How to Make an Array and its Types in C++",
      batch: "3MY - JVY",
      time: "01:40 PM",
      date: "03 Jan 2023",
      status: "Present",
      classType: "present",
    },
    {
      title: "How to Make an Array and its Types in C++",
      batch: "3MY - JVY",
      time: "01:40 PM",
      date: "03 Jan 2023",
      status: "Absent",
      classType: "absent",
    },
    {
      title: "How to Make an Array and its Types in C++",
      batch: "3MY - JVY",
      time: "12:40 PM",
      date: "03 Jan 2023",
      status: "Present",
      classType: "present",
    },
    {
      title: "How to Make an Array and its Types in C++",
      batch: "3MY - JVY",
      time: "12:40 PM",
      date: "03 Jan 2023",
      status: "Present",
      classType: "present",
    },
    {
      title: "How to Make an Array and its Types in C++",
      batch: "3MY - JVY",
      time: "12:40 PM",
      date: "03 Jan 2023",
      status: "Present",
      classType: "present",
    },
    {
      title: "How to Make an Array and its Types in C++",
      batch: "3MY - JVY",
      time: "12:40 PM",
      date: "03 Jan 2023",
      status: "Present",
      classType: "present",
    },
    {
      title: "How to Make an Array and its Types in C++",
      batch: "3MY - JVY",
      time: "12:40 PM",
      date: "03 Jan 2023",
      status: "Present",
      classType: "present",
    },
  ];
}
