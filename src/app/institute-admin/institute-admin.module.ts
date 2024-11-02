import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituteAdminRoutingModule } from './institute-admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdatestudentDialogComponent } from './updatestudent-dialog/updatestudent-dialog.component';
import { UpdateteacherDialogComponent } from './updateteacher-dialog/updateteacher-dialog.component';

import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { AddcourseDialogComponent } from './addcourse-dialog/addcourse-dialog.component';
import { UpdatecourseDialogComponent } from './updatecourse-dialog/updatecourse-dialog.component';
import { DynamicTableModule } from '../dynamic-table/dynamic-table.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

// ----------- Material ---------------
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {InputTextModule} from 'primeng/inputtext';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

// -------------- Primeng -----------------
import {ToastModule } from 'primeng/toast';
import {MessageService,ConfirmationService } from 'primeng/api';
import {ChartModule } from 'primeng/chart';
import {ChipsModule } from 'primeng/chips';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { SettingsComponent } from './settings/settings.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CertificateComponent } from './certificate/certificate.component';
import { AddstaffmanagementComponent } from './addstaffmanagement/addstaffmanagement.component';
import { UpdatestaffmanagementComponent } from './updatestaffmanagement/updatestaffmanagement.component';
import { StepperModule } from 'primeng/stepper';
import { DropdownModule } from 'primeng/dropdown';
import { MeterGroupModule } from 'primeng/metergroup';
import { ProgressBarModule } from 'primeng/progressbar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { CourseListComponent } from './course-list/course-list.component';
import { InstructorOverviewsComponent } from './instructor-overviews/instructor-overviews.component';
import { InstructorDetailsComponent } from './instructor-details/instructor-details.component';
import { InstructorPaymentComponent } from './instructor-payment/instructor-payment.component';
import { EnrollmentListComponent } from './enrollment-list/enrollment-list.component';
import { EnrollStudentComponent } from './enroll-student/enroll-student.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoicepaymentDetailsComponent } from './invoicepayment-details/invoicepayment-details.component';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { CheckboxModule } from 'primeng/checkbox';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag'; 
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { AddcoursecategoryComponent } from './addcoursecategory/addcoursecategory.component';
import { AddinstructorComponent } from './addinstructor/addinstructor.component';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { AddchangelanguagedialogComponent } from './addchangelanguagedialog/addchangelanguagedialog.component';
import { AddchangedatedialogComponent } from './addchangedatedialog/addchangedatedialog.component';
import { AddchangetimezonedialogComponent } from './addchangetimezonedialog/addchangetimezonedialog.component';
import { AddinvoicedialogComponent } from './addinvoicedialog/addinvoicedialog.component';
import { AddviewmorestudentComponent } from './addviewmorestudent/addviewmorestudent.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { CalendarModule } from 'primeng/calendar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TeacherAdminModule } from '../teacher-admin/teacher-admin.module';
import { EditInstructorComponent } from './edit-instructor/edit-instructor.component';
import { CenterSetupComponent } from './center-setup/center-setup.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { EducatorsPageComponent } from './educators-page/educators-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { BlogsComponent } from './blogs/blogs.component';
import { WebsiteInquiryComponent } from './website-inquiry/website-inquiry.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { ColorsComponent } from './colors/colors.component';
import { MyWebsiteComponent } from './my-website/my-website.component';
import { AddmissionEnquiryComponent } from './addmission-enquiry/addmission-enquiry.component';
import { VisitorBooksComponent } from './visitor-books/visitor-books.component';
import { PhoneCallLogsComponent } from './phone-call-logs/phone-call-logs.component';
import { ComplainsComponent } from './complains/complains.component';
import { PostalServiceComponent } from './postal-service/postal-service.component';
import { FrontOfficeSetupComponent } from './front-office-setup/front-office-setup.component';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { StudentIdCardsComponent } from './student-id-cards/student-id-cards.component';
import { SetupInfoComponent } from './setup-info/setup-info.component';
import { UpgradedStudentComponent } from './upgraded-student/upgraded-student.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TrashComponent } from './trash/trash.component';
import { FeeCollectionComponent } from './fee-collection/fee-collection.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ExaminationsComponent } from './examinations/examinations.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { EmployeeIdCardComponent } from './employee-id-card/employee-id-card.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveTypeComponent } from './leave-type/leave-type.component';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { PayrollComponent } from './payroll/payroll.component';
import { AddIncomeComponent } from './add-income/add-income.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { SteupExpenseHeadComponent } from './steup-expense-head/steup-expense-head.component';
import { SteupIncomeHeadComponent } from './steup-income-head/steup-income-head.component';
import { SmsTemplateComponent } from './sms-template/sms-template.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { ContentTypeComponent } from './content-type/content-type.component';
// import { MultiSelectModule } from 'primeng/multiselect';
import { ShareContentComponent } from './upload/share-content/share-content.component';
import { VideoTutorialComponent } from './video-tutorial/video-tutorial.component';
import { BillingComponent } from './billing/billing.component';
import { ProfileComponent } from './profile/profile.component';
import { SiteSettingsComponent } from './site-settings/site-settings.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AddwebsiteenquiryComponent } from './addwebsiteenquiry/addwebsiteenquiry.component';
import { AddadmissionenquiryComponent } from './addadmissionenquiry/addadmissionenquiry.component';
import { AddpostalpackagesComponent } from './addpostalpackages/addpostalpackages.component';
import { AddcomplainsComponent } from './addcomplains/addcomplains.component';
import { AddphonecalllogsComponent } from './addphonecalllogs/addphonecalllogs.component';
import { VisitorbooksComponent } from './visitorbooks/visitorbooks.component';
import { AddadmissionlistComponent } from './addadmissionlist/addadmissionlist.component';


// ------------ Teacher ----------------


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    HomePageComponent,
    CoursePageComponent,
    AboutUsPageComponent,
    EducatorsPageComponent,
    FaqPageComponent,
    BlogsComponent,
    AddmissionEnquiryComponent,
    VisitorBooksComponent,
    PhoneCallLogsComponent,
    ComplainsComponent,
    PostalServiceComponent,
    FrontOfficeSetupComponent,
    StudentAdmissionComponent,
    StudentIdCardsComponent,
    SetupInfoComponent,
    UpgradedStudentComponent,
    StudentLoginComponent,
    TrashComponent,
    FeeCollectionComponent,
    AttendanceComponent,
    ExaminationsComponent,
    EmployeeAttendanceComponent,
    EmployeeDirectoryComponent,
    EmployeeIdCardComponent,
    LeaveRequestComponent,
    LeaveTypeComponent,
    DepartmentComponent,
    DesignationComponent,
    PayrollComponent,
    AddIncomeComponent,
    SetupInfoComponent,
    AddExpenseComponent,
    NoticeBoardComponent,
    SteupExpenseHeadComponent,
    SteupIncomeHeadComponent,
    SmsTemplateComponent,
    EmailTemplateComponent,
    ContentTypeComponent,
    ShareContentComponent,
    // MultiSelectModule,
    VideoTutorialComponent,
    BillingComponent,
    ProfileComponent,
    SiteSettingsComponent,
    SidebarMenuComponent,
    WebsiteInquiryComponent,
    NewsLetterComponent,
    ColorsComponent,
    MyWebsiteComponent,
    UpdatestudentDialogComponent,
    UpdateteacherDialogComponent,
    CourseComponent,
    StudentComponent,
    AddcourseDialogComponent,
    UpdatecourseDialogComponent,
    CreateTestComponent,
    SettingsComponent,
    AboutusComponent,
    CertificateComponent,
    AddstaffmanagementComponent,
    UpdatestaffmanagementComponent,
    CourseCategoryComponent,
    CourseListComponent,
    InstructorOverviewsComponent,
    InstructorListComponent,
    InstructorDetailsComponent,
    InstructorPaymentComponent,
    EnrollmentListComponent,
    EnrollStudentComponent,
    AdminProfileComponent,
    InvoiceListComponent,
    InvoicepaymentDetailsComponent,
    CenterSetupComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    AddcoursecategoryComponent,
    AddinstructorComponent,
    AddchangelanguagedialogComponent,
    AddchangedatedialogComponent,
    AddchangetimezonedialogComponent,
    AddinvoicedialogComponent,
    AddviewmorestudentComponent,
    CourseEditComponent,
    EditInstructorComponent,
    AddwebsiteenquiryComponent,
    AddadmissionenquiryComponent,
    AddpostalpackagesComponent,
    AddcomplainsComponent,
    AddphonecalllogsComponent,
    VisitorbooksComponent,
    AddadmissionlistComponent
  ],
  imports: [
    CommonModule,
    TeacherAdminModule,
    InstituteAdminRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatMenuModule,
    MatDatepickerModule,
    InputTextModule,
    FormsModule,
    ColorPickerModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    ToastModule,
    ChipsModule,
    InputSwitchModule,
    ChartModule,
    ListboxModule,
    ConfirmPopupModule,
    DynamicTableModule,
    FloatLabelModule,
    ConfirmDialogModule,
    StepperModule,
    DropdownModule,
    MeterGroupModule,
    ProgressBarModule,
    PaginatorModule,
    TableModule,
    CheckboxModule,
    SplitButtonModule,
    TabViewModule,
    AvatarModule,
    AvatarGroupModule,
    BadgeModule,
    TagModule,
    CardModule,
    DividerModule,
    MenuModule,
    RadioButtonModule,
    FileUploadModule,
    CalendarModule,
    OverlayPanelModule,
    InputTextModule,
    
    // NgCircleProgressModule
    NgCircleProgressModule.forRoot({
      radius: 60,
      outerStrokeWidth: 10,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })

  ],
  providers: [MessageService,ConfirmationService]
})
export class InstituteAdminModule { }
