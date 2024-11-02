import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherAdminRoutingModule } from './teacher-admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LiveClassComponent } from './live-class/live-class.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { ExamsComponent } from './exams/exams.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { BatchesComponent } from './batches/batches.component';
import { DoubtsComponent } from './doubts/doubts.component';
import { AddclassDialogComponent } from './addclass-dialog/addclass-dialog.component';

// material
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {InputTextModule} from 'primeng/inputtext';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// -------------- Primeng -----------------

import {ToastModule } from 'primeng/toast';
import {ChartModule } from 'primeng/chart';
import {ChipsModule } from 'primeng/chips';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { TimelineModule } from 'primeng/timeline';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import {MessageService,ConfirmationService } from 'primeng/api';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { TabViewModule } from 'primeng/tabview';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AddquizDialogComponent } from './addquiz-dialog/addquiz-dialog.component';
import { StepperModule } from 'primeng/stepper';
import { AddExamDialogComponent } from './addexam-dialog/addexam-dialog.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { AddassignmentDailogComponent } from './addassignment-dailog/addassignment-dailog.component';
import { ViewdetailsscheduleDialogComponent } from './viewdetailsschedule-dialog/viewdetailsschedule-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BadgeModule } from 'primeng/badge';

import { LiveclassDialogComponent } from './liveclass-dialog/liveclass-dialog.component';
import { ChipModule } from 'primeng/chip';
import { QuizresultdetailsDialogComponent } from './quizresultdetails-dialog/quizresultdetails-dialog.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { LineBreakPipe } from './line-break.pipe';
import { ExamresultdetailsDialogComponent } from './examresultdetails-dialog/examresultdetails-dialog.component';
import { AssignmentresultdetailsDialogComponent } from './assignmentresultdetails-dialog/assignmentresultdetails-dialog.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuizzesQuestionBankViewDetailsDialogComponent } from './quizzes-question-bank-view-details-dialog/quizzes-question-bank-view-details-dialog.component';
import { AddQuestionDialogComponent } from './add-question-dialog/add-question-dialog.component';
import { ViewexamdetailsDialogComponent } from './viewexamdetails-dialog/viewexamdetails-dialog.component';
import { ViewassignmentDialogComponent } from './viewassignment-dialog/viewassignment-dialog.component';
import { ViewexamresultDialogComponent } from './viewexamresult-dialog/viewexamresult-dialog.component';
import { QuizHistoryViewDetailsDialogComponent } from './quiz-history-view-details-dialog/quiz-history-view-details-dialog.component';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AddnoteDialogComponent } from './addnote-dialog/addnote-dialog.component';
import { DeclareExamresultDialogComponent } from './declare-examresult-dialog/declare-examresult-dialog.component';
import { DeclareAssignmentresultDialogComponent } from './declare-assignmentresult-dialog/declare-assignmentresult-dialog.component';
import { ViewAssignmentresultDialogComponent } from './view-assignmentresult-dialog/view-assignmentresult-dialog.component';
import { ViewBatchdetailsDialogComponent } from './view-batchdetails-dialog/view-batchdetails-dialog.component';




@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    LiveClassComponent,
    ScheduleComponent,
    QuizzesComponent,
    ExamsComponent,
    AssignmentsComponent,
    BatchesComponent,
    DoubtsComponent,
    AdminProfileComponent,
    StudentProfileComponent,
    AddquizDialogComponent,
    AddclassDialogComponent,
    AddExamDialogComponent,
    AddassignmentDailogComponent,
    ViewdetailsscheduleDialogComponent,
    LiveclassDialogComponent,
    QuizresultdetailsDialogComponent,
    LineBreakPipe,
    ExamresultdetailsDialogComponent,
    AssignmentresultdetailsDialogComponent,
    QuizzesQuestionBankViewDetailsDialogComponent,
    AddQuestionDialogComponent,
    ViewexamdetailsDialogComponent,
    ViewassignmentDialogComponent,
    ViewexamresultDialogComponent,
    QuizHistoryViewDetailsDialogComponent,
    AddnoteDialogComponent,
    DeclareExamresultDialogComponent,
    DeclareAssignmentresultDialogComponent,
    ViewAssignmentresultDialogComponent,
    ViewBatchdetailsDialogComponent,
  
  ],
  imports: [
    CommonModule,
    TeacherAdminRoutingModule,
    // material
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    InputTextModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,

    // primeng
    ToastModule,
    CardModule,
    TabMenuModule,
    TimelineModule,
    TagModule,
    TableModule,
    AvatarModule,
    AvatarGroupModule,
    DropdownModule,
    PaginatorModule,
    MenuModule,
    ButtonModule,
    ToastModule,
    ChartModule,
    ChipsModule,
    FloatLabelModule,
    TabViewModule,
    StepperModule,
    AutoCompleteModule,
    IconFieldModule,
    InputIconModule,
    CalendarModule,
    SliderModule,
    FileUploadModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DialogModule,
    InputTextareaModule,
    ReactiveFormsModule,
    BadgeModule,
    ChipModule,
    SelectButtonModule,
    ConfirmDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    CheckboxModule,
    OverlayPanelModule
  ],
  exports:[
    LiveClassComponent,
    ScheduleComponent,
    QuizzesComponent,
    ExamsComponent,
    AssignmentsComponent,
    BatchesComponent,
    DoubtsComponent,
    StudentProfileComponent,


  ],
  providers: [MessageService,ConfirmationService]
})
export class TeacherAdminModule { }
