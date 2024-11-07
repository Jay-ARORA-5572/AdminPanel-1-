import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route: Router, private sharedservice: SharedService) { }

  Role: any = "Dashboard";
  myroute: string = '';
  username: any;

  dash: any = [];
  coursesubmenu: boolean = false;

  dashinstructor: any = [];
  instructorsubmenu: boolean = false;


  arr: any = [
    { "logo": "Dashboard.png", "name": "Dashboard" },  // 0 
    { "logo": "coursecom4.png", "name": "Course", "sub":'',"show":false }, // 1
    { "logo": "staffmanagement.png", "name": "Instructor",  "sub":'',"show":false },  //2
    { "logo": "Subadmin.png", "name": "Manage Institute","sub":'',"show":false},  // 3
    { "logo": "quiz.png", "name": "Enrolment","sub":'',"show":false},  //4 
    { "logo": "Payment.png", "name": "Invoice","sub":'',"show":false },//5
    { "logo": "staffmanagement.png", "name": "Admin Profile" },//6
    { "logo": "Subadmin.png", "name": "Center Setup", },  // 7
    { "logo": "Subadmin.png", "name": "Website Manage","sub":'',"show":false },  // 8
    { "logo": "Subadmin.png", "name": "Front Office","sub":'',"show":false },  // 9
    { "logo": "Subadmin.png", "name": "Student Information","sub":'',"show":false },  // 10
    { "logo": "Subadmin.png", "name": "Fee Collection", },  // 11
    { "logo": "Subadmin.png", "name": "Attendance", },  // 12
    { "logo": "Subadmin.png", "name": "Examinations", },  // 13
    { "logo": "Subadmin.png", "name": "Human Resource","sub":'',"show":false },  // 14
    { "logo": "Subadmin.png", "name": "Income","sub":'',"show":false },  // 15
    { "logo": "Subadmin.png", "name": "Expenses","sub":'',"show":false },  // 16
    { "logo": "Subadmin.png", "name": "Communicate","sub":'',"show":false },  // 17
    { "logo": "Subadmin.png", "name": "Download Center","sub":'',"show":false },  // 18
    { "logo": "Subadmin.png", "name": "System Settings","sub":'',"show":false },  // 19
    { "logo": "setting.png", "name": "Settings" },
    { "logo": "logout.png", "name": "Logout" },
    
  

    // { "logo": "course.png", "name": "Add Course" },
    // { "logo": "test.png", "name": "Create Test" },
    // { "logo": "certificate.png", "name": "Certificate" },
    // { "logo": "about.png", "name": "About us" },
    // {"logo":"live4.png","name":"Live Class"},
    // {"logo":"quiz.png","name":"Quiz"},
    // {"logo":"coursecom4.png","name":"Completion"},
    // {"logo":"record.png","name":"Recorded Courses"},
    // {"logo":"pervious.png","name":"Perview Year Test"},

  ];

  ngOnInit(): void {
    localStorage.setItem("select_sidebar", this.Role);
    let role: any = localStorage.getItem("select_sidebar");
    this.username = localStorage.getItem("name")
    this.RoleChange(role);

    this.sharedservice.myRouteEmitter.subscribe((data: string) => {
      console.log('Received event:', data);
      // Handle the emitted event 
      this.RoleChange(data);
      this.myroute = data;

    });

  }



  RoleChange(item: any) {
    localStorage.setItem("select_sidebar", this.Role);
    this.Role = item;
    console.log("Role change --->", this.Role)
    console.log("route name --->", item)

    if (this.Role == "Dashboard") { this.myroute = 'Dashboard'; }

    else if (this.Role == "Course") {
      if (!this.arr[1]['sub'].length) {
        this.arr[1]['show']  = true;
        this.arr[1]['sub'] = [
          { "logo": "allcourses.png", "name": "Course Categories" },
          { "logo": "course.png", "name": "Course List" },
          { "logo": "course.png", "name": "Course Video" }
        ];
      }
      else {
        this.arr[1]['show']  = false;
        this.arr[1]['sub'] = [];
      }
      // this.myroute='AddCourse';
    }
    else if (this.Role == "Course Categories") { this.myroute = 'coursecategory'; }
    else if (this.Role == "Course List") { this.myroute = 'courselist'; }
    else if (this.Role == "Course Video") { this.myroute = 'coursevideo'; }



    else if (this.Role == "Manage Institute") {

      if (!this.arr[3]['sub'].length) {
        this.arr[3]['show'] = true;
        this.arr[3]['sub']= [
          // { "logo": "coursecom4.png", "name": "Instructor Overviews" },
          { "logo": "institute.png", "name": "Live class" },
          {"logo":"staffmanagement.png", "name": "My Profile" },
          {"logo":"help.png","name":"Schedule"},
          {"logo":"setting.png","name":"Quizzes"},
          {"logo":"help.png","name":"Exams"},
          {"logo":"help.png","name":"Assignment"},
          {"logo":"help.png","name":"Batches"},
          {"logo":"help.png","name":"Doubts"},
          {"logo":"staffmanagement.png", "name": "Student Profile" }

        ];
      }
      else {
        this.arr[3]['show'] = false;
        this.arr[3]['sub'] = [];
      }
      // this.myroute = 'manageinstitute'; 
    }

    else if (this.Role == "Live class") { this.myroute = 'liveclass'; }
    else if (this.Role == "My Profile") { this.myroute = 'profile'; }
    else if (this.Role == "Schedule") { this.myroute = 'schedule'; }
    else if (this.Role == "Quizzes") { this.myroute = 'quizzes'; }
    else if (this.Role == "Exams") { this.myroute = 'exams'; }
    else if (this.Role == "Assignment") { this.myroute = 'assignment'; }
    else if (this.Role == "Batches") { this.myroute = 'batches'; }
    else if (this.Role == "Doubts") { this.myroute = 'doubts'; }
    else if (this.Role == "Student Profile") { this.myroute = 'student-profile'; }


    else if (this.Role == "Instructor") {
      if (!this.arr[2]['sub'].length) {
        this.arr[2]['show'] = true;
        this.arr[2]['sub']= [
          // { "logo": "coursecom4.png", "name": "Instructor Overviews" },
          { "logo": "institute.png", "name": "Instructor Overviews" },
          { "logo": "staffmanagement.png", "name": "Instructor List" },
          { "logo": "staffmanagement.png", "name": "Instructor Details" },
          { "logo": "Payment.png", "name": "Instructor Payment" },
        ];
      }
      else {
        this.arr[2]['show'] = false;
        this.arr[2]['sub'] = [];
      }
      // this.myroute='instructoroverviews';
    }

    else if (this.Role == "Instructor Overviews") { this.myroute = 'instructoroverviews'; }
    else if (this.Role == "Instructor List") { this.myroute = 'instructorlist'; }
    else if (this.Role == "Instructor Details") { this.myroute = 'instructordetails'; }
    else if (this.Role == "Instructor Payment") { this.myroute = 'instructorpayment'; }

    else if (this.Role == "Enrolment") { 
      if (!this.arr[4]['sub'].length) {
        this.arr[4]['show'] = true;
        this.arr[4]['sub']= [
          { "logo": "Subadmin.png", "name": "Enroll List" },  
          { "logo": "Subadmin.png", "name": "Enroll Student" },
        ];
      }
      else {
        this.arr[4]['show'] = false;
        this.arr[4]['sub'] = [];
      }
      // this.myroute = 'enroll_list';     
    }

    else if (this.Role == "Enroll List") { this.myroute = 'enroll_list'; }
    else if (this.Role == "Enroll Student") { this.myroute = 'studentenroll'; }

    else if (this.Role == "Admin Profile") { this.myroute = 'adminprofile'; }


    else if (this.Role == "Invoice") { 

      if (!this.arr[5]['sub'].length) {
        this.arr[5]['show'] = true;
        this.arr[5]['sub']= [
          { "logo": "test.png", "name": "Invoice List" },
          { "logo": "Payment.png", "name": "Invoice History"},
        ];
      }
      else {
        this.arr[5]['show'] = false;
        this.arr[5]['sub'] = [];
      }
    
    }

    else if (this.Role == "Invoice List") { this.myroute = 'invoicelist'; }
    else if (this.Role == "Invoice History") { this.myroute = 'invoicehistroy'; }

    // else if (this.Role == "Add Course") { this.myroute = 'AddCourse'; }
    // else if (this.Role == "Create Test") { this.myroute = 'Test'; }
    // else if (this.Role == "Certificate") { this.myroute = 'certificate'; }

    else if (this.Role == "Student") { this.myroute = 'student'; }

    else if (this.Role == "Center Setup") { this.myroute = 'CenterSetup'; }

    else if (this.Role == "Website Manage") { 
      if (!this.arr[8]['sub'].length) {
        this.arr[8]['show'] = true;
        this.arr[8]['sub']= [
          { "logo": "Subadmin.png", "name": "Home Page" },  
          { "logo": "Subadmin.png", "name": "Course Page" },
          { "logo": "Subadmin.png", "name": "About Us Page" },
          { "logo": "Subadmin.png", "name": "Educators Page" },
          { "logo": "Subadmin.png", "name": "Faq Page" },
          { "logo": "Subadmin.png", "name": "Blogs" },
          { "logo": "Subadmin.png", "name": "Website Inquiry" },
          { "logo": "Subadmin.png", "name": "Newsletter" },
          { "logo": "Subadmin.png", "name": "Colors" },
          { "logo": "Subadmin.png", "name": "My Website" },
        ];
      }
      else {
        this.arr[8]['show'] = false;
        this.arr[8]['sub'] = [];
      }
    }

    else if (this.Role == "Home Page") { this.myroute = 'HomePage'; }
    else if (this.Role == "Course Page") { this.myroute = 'CoursePage'; }
    else if (this.Role == "About Us Page") { this.myroute = 'AboutUsPage'; }
    else if (this.Role == "Educators Page") { this.myroute = 'EducatorsPage'; }
    else if (this.Role == "Faq Page") { this.myroute = 'FaqPage'; }
    else if (this.Role == "Blogs") { this.myroute = 'Blogs'; }
    else if (this.Role == "Website Inquiry") { this.myroute = 'WebsiteInquiry'; }
    else if (this.Role == "Newsletter") { this.myroute = 'Newsletter'; }
    else if (this.Role == "Colors") { this.myroute = 'Colors'; }
    else if (this.Role == "My Website") { this.myroute = 'MyWebsite'; }

    else if (this.Role == "Front Office") { 
      if (!this.arr[9]['sub'].length) {
        this.arr[9]['show'] = true;
        this.arr[9]['sub']= [
          { "logo": "Subadmin.png", "name": "Admission Enquiry" },  
          { "logo": "Subadmin.png", "name": "Visitor Books" },
          { "logo": "Subadmin.png", "name": "Phone Call Logs" },
          { "logo": "Subadmin.png", "name": "Complains" },
          { "logo": "Subadmin.png", "name": "Postal Service" },
          { "logo": "Subadmin.png", "name": "Front Office Setup" },
        ];
      }
      else {
        this.arr[9]['show'] = false;
        this.arr[9]['sub'] = [];
      }
    }

    else if (this.Role == "Admission Enquiry") { this.myroute = 'AdmissionEnquiry'; }
    else if (this.Role == "Visitor Books") { this.myroute = 'VisitorBooks'; }
    else if (this.Role == "Phone Call Logs") { this.myroute = 'PhoneCallLogs'; }
    else if (this.Role == "Complains") { this.myroute = 'Complains'; }
    else if (this.Role == "Postal Service") { this.myroute = 'PostalService'; }
    else if (this.Role == "Front Office Setup") { this.myroute = 'FrontOfficeSetup'; }

    else if (this.Role == "Student Information") { 

      if (!this.arr[10]['sub'].length) {
        this.arr[10]['show'] = true;
        this.arr[10]['sub']= [
          { "logo": "test.png", "name": "Student Admission" },
          { "logo": "Payment.png", "name": "Student ID Cards"},
          { "logo": "test.png", "name": "Setup Info" },
          { "logo": "test.png", "name": "Upgraded Student" },
          { "logo": "test.png", "name": "Student Login" },
          { "logo": "test.png", "name": "Trash" },
        ];
      }
      else {
        this.arr[10]['show'] = false;
        this.arr[10]['sub'] = [];
      }
    
    }

    else if (this.Role == "Student Admission") { this.myroute = 'StudentAdmission'; }
    else if (this.Role == "Student ID Cards") { this.myroute = 'StudentIDCards'; }
    else if (this.Role == "Setup Info") { this.myroute = 'SetupInfo.'; }
    else if (this.Role == "Upgraded Student") { this.myroute = 'UpgradedStudent'; }
    else if (this.Role == "Student Login") { this.myroute = 'StudentLogin'; }
    else if (this.Role == "Trash") { this.myroute = 'Trash'; }

    else if (this.Role == "Fee Collection") { this.myroute = 'FeeCollection'; }

    else if (this.Role == "Attendance") { this.myroute = 'Attendance'; }

    else if (this.Role == "Examinations") { this.myroute = 'Examinations'; }

    else if (this.Role == "Human Resource") { 

      if (!this.arr[14]['sub'].length) {
        this.arr[14]['show'] = true;
        this.arr[14]['sub']= [
          { "logo": "test.png", "name": "Employee Directory" },
          { "logo": "Payment.png", "name": "Employee Attendance"},
          { "logo": "Payment.png", "name": "Employee ID Card"},
          { "logo": "test.png", "name": "Leave Request" },
          { "logo": "test.png", "name": "Leave Type" },
          { "logo": "test.png", "name": "Department" },
          { "logo": "test.png", "name": "Designation" },
          { "logo": "test.png", "name": "Payroll" },
        ];
      }
      else {
        this.arr[14]['show'] = false;
        this.arr[14]['sub'] = [];
      }
    
    }

    else if (this.Role == "Employee Directory") { this.myroute = 'EmployeeDirectory'; }
    else if (this.Role == "Employee Attendance") { this.myroute = 'EmployeeAttendance'; }
    else if (this.Role == "Employee ID Card") { this.myroute = 'EmployeeIDCard'; }
    else if (this.Role == "Leave Request") { this.myroute = 'LeaveRequest'; }
    else if (this.Role == "Leave Type") { this.myroute = 'LeaveType'; }
    else if (this.Role == "Department") { this.myroute = 'Department'; }
    else if (this.Role == "Designation") { this.myroute = 'Designation'; }
    else if (this.Role == "Payroll") { this.myroute = 'Payroll'; }

    else if (this.Role == "Income") { 

      if (!this.arr[15]['sub'].length) {
        this.arr[15]['show'] = true;
        this.arr[15]['sub']= [
          { "logo": "test.png", "name": "Add Income" },
          { "logo": "Payment.png", "name": "Setup Income Head"},
        ];
      }
      else {
        this.arr[15]['show'] = false;
        this.arr[15]['sub'] = [];
      }
    
    }

    else if (this.Role == "Add Income") { this.myroute = 'AddIncome'; }
    else if (this.Role == "Setup Income Head") { this.myroute = 'SetupIncomeHead'; }

    else if (this.Role == "Expenses") { 

      if (!this.arr[16]['sub'].length) {
        this.arr[16]['show'] = true;
        this.arr[16]['sub']= [
          { "logo": "test.png", "name": "Add Expense" },
          { "logo": "Payment.png", "name": "Setup Expense Head"},
        ];
      }
      else {
        this.arr[16]['show'] = false;
        this.arr[16]['sub'] = [];
      }
    
    }

    else if (this.Role == "Add Expense") { this.myroute = 'AddExpense'; }
    else if (this.Role == "Setup Expense Head") { this.myroute = 'SetupExpenseHead'; }

    else if (this.Role == "Communicate") { 

      if (!this.arr[17]['sub'].length) {
        this.arr[17]['show'] = true;
        this.arr[17]['sub']= [
          { "logo": "test.png", "name": "Notice Board" },
          { "logo": "Payment.png", "name": "SMS Template"},
          { "logo": "Payment.png", "name": "Email Template"},
        ];
      }
      else {
        this.arr[17]['show'] = false;
        this.arr[17]['sub'] = [];
      }
    
    }

    else if (this.Role == "Notice Board") { this.myroute = 'NoticeBoard'; }
    else if (this.Role == "SMS Template") { this.myroute = 'SMSTemplate'; }
    else if (this.Role == "Email Template") { this.myroute = 'EmailTemplate'; }

    else if (this.Role == "Download Center") { 

      if (!this.arr[18]['sub'].length) {
        this.arr[18]['show'] = true;
        this.arr[18]['sub']= [
          { "logo": "test.png", "name": "Content Type" },
          { "logo": "Payment.png", "name": "Upload/Share Content"},
          { "logo": "Payment.png", "name": "Video Tutuorial"},
        ];
      }
      else {
        this.arr[18]['show'] = false;
        this.arr[18]['sub'] = [];
      }
    
    }

    else if (this.Role == "Content Type") { this.myroute = 'ContentType'; }
    else if (this.Role == "Upload/Share Content") { this.myroute = 'UploadContent'; }
    else if (this.Role == "Video Tutuorial") { this.myroute = 'VideoTutuorial'; }

    else if (this.Role == "System Settings") { 

      if (!this.arr[19]['sub'].length) {
        this.arr[19]['show'] = true;
        this.arr[19]['sub']= [
          { "logo": "test.png", "name": "Billing & Account" },
          { "logo": "Payment.png", "name": "Profile"},
          { "logo": "test.png", "name": "Site Settings" },
          { "logo": "test.png", "name": "Sidebar Menu" },
        ];
      }
      else {
        this.arr[19]['show'] = false;
        this.arr[19]['sub'] = [];
      }
    
    }

    else if (this.Role == "Billing & Account") { this.myroute = 'Billing&Account'; }
    else if (this.Role == "Profile") { this.myroute = 'Profile'; }
    else if (this.Role == "Site Settings") { this.myroute = 'SiteSettings'; }
    else if (this.Role == "Sidebar Menu") { this.myroute = 'SidebarMenu'; }

    else if (this.Role == "Settings") { this.myroute = 'Settings'; }
    // else if (this.Role == "About us") { this.myroute = 'about'; }
    else if (this.Role == "Logout") {
      this.myroute = 'Logout'; this.logout();

    }
  }



  logout() {
    // console.log("call log out");
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("name");
    this.route.navigate([""])
  }



}
