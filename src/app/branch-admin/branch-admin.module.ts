import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchAdminRoutingModule } from './branch-admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DynamicTableModule } from '../dynamic-table/dynamic-table.module';
import { SaleComponent } from './sale/sale.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AddstaffDialogComponent } from './addstaff-dialog/addstaff-dialog.component';
import { StaffComponent } from './staff/staff.component';
import { UpdatestaffDialogComponent } from './updatestaff-dialog/updatestaff-dialog.component';
import { AddmanageinstituteComponent } from './addmanageinstitute/addmanageinstitute.component';
import { UpdatemanageinstituteComponent } from './updatemanageinstitute/updatemanageinstitute.component';
import { UpdatepaymentComponent } from './updatepayment/updatepayment.component';
import { HelpsectionComponent } from './helpsection/helpsection.component';
import { SettingsComponent } from './settings/settings.component';




// ----------- Material ---------------
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


// -------------- Primeng -----------------
import {ToastModule } from 'primeng/toast';
import {ConfirmationService, MessageService } from 'primeng/api';
import {ChartModule } from 'primeng/chart';
import {ChipsModule } from 'primeng/chips';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { TimelineModule } from 'primeng/timeline';
import { FileUploadModule } from 'primeng/fileupload';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PaginatorModule } from 'primeng/paginator';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ContactComponent } from './contact/contact.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoicepaymentDetailsComponent } from './invoicepayment-details/invoicepayment-details.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { ViewinstituteComponent } from './viewinstitute/viewinstitute.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { TabViewModule } from 'primeng/tabview';
import { AllinstitutenameComponent } from './allinstitutename/allinstitutename.component';
import { Top5institutenameComponent } from './top5institutename/top5institutename.component';
import { PendingpaymentsComponent } from './pendingpayments/pendingpayments.component';
import { TopstudentslistComponent } from './topstudentslist/topstudentslist.component';
import { StaffmanagementComponent } from './staffmanagement/staffmanagement.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { PostjobsComponent } from './postjobs/postjobs.component';
import { AddjobsComponent } from './addjobs/addjobs.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { ViewleadsComponent } from './viewleads/viewleads.component';
import { EventmanagementComponent } from './eventmanagement/eventmanagement.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    AddstaffDialogComponent,
    StaffComponent,
    UpdatestaffDialogComponent,
    AddmanageinstituteComponent,
    UpdatemanageinstituteComponent,
    UpdatepaymentComponent,
    HelpsectionComponent,
    SettingsComponent,
    SaleComponent,
    AdminProfileComponent,
    ContactComponent,
    InvoiceListComponent,
    InvoicepaymentDetailsComponent,
    ViewinstituteComponent,
    ViewstudentComponent,
    AllinstitutenameComponent,
    Top5institutenameComponent,
    PendingpaymentsComponent,
    TopstudentslistComponent,
    StaffmanagementComponent,
    EmployeedetailsComponent,
    PostjobsComponent,
    AddjobsComponent,
    AddstaffComponent,
    ViewleadsComponent,
    EventmanagementComponent
   
    
  ],
  imports: [
    CommonModule,
    BranchAdminRoutingModule,
    // material
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    InputTextModule,
    MatPaginatorModule,
    MatSelectModule,
    ConfirmDialogModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    DynamicTableModule,
    CardModule,
    TabViewModule,
    TabMenuModule,
    TimelineModule,
    ListboxModule,
    DialogModule,
    TagModule,
    FormsModule,
    DropdownModule,
    TableModule,
    AvatarModule,
    AvatarGroupModule,
    PaginatorModule,
    FileUploadModule,
    OverlayPanelModule,
    MenuModule,
    ButtonModule,
    MultiSelectModule,
    ToastModule,
    ChartModule,
    ChipsModule,
    CheckboxModule,
    FloatLabelModule
  ],
  providers: [MessageService,ConfirmationService]


})
export class BranchAdminModule { }
