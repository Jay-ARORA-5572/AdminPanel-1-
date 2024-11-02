import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//  ---------------- componentes -------------------
import { CompanyAdminRoutingModule } from './company-admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstituteComponent } from './institute/institute.component';
import { AddinstitutedialogComponent } from './addinstitutedialog/addinstitutedialog.component';
import { UpdateinstitutedialogComponent } from './updateinstitutedialog/updateinstitutedialog.component';
import { BranchComponent } from './branch/branch.component';
import { AddbranchdialogComponent } from './addbranchdialog/addbranchdialog.component';
import { UpdatebranchdialogComponent } from './updatebranchdialog/updatebranchdialog.component';
import { UserComponent } from './user/user.component';
import { AdduserdialogComponent } from './adduserdialog/adduserdialog.component';
import { UpdateuserdialogComponent } from './updateuserdialog/updateuserdialog.component';
import { JobposterComponent } from './jobposter/jobposter.component';
import { AddjobpostDialogComponent } from './addjobpost-dialog/addjobpost-dialog.component';
import { UpdatejobpostdialogComponent } from './updatejobpostdialog/updatejobpostdialog.component';
import { DynamicTableModule } from '../dynamic-table/dynamic-table.module';


// ----------- Material ---------------
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

// -------------- Primeng -----------------
import {ToastModule } from 'primeng/toast';
import {MessageService } from 'primeng/api';
import {ChartModule } from 'primeng/chart';
import {ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { AccordionModule } from 'primeng/accordion';
import { EditorModule } from 'primeng/editor';





@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    InstituteComponent,
    AddinstitutedialogComponent,
    UpdateinstitutedialogComponent,
    BranchComponent,
    AddbranchdialogComponent,
    UpdatebranchdialogComponent,
    UserComponent,
    AdduserdialogComponent,
    UpdateuserdialogComponent,
    JobposterComponent,
    AddjobpostDialogComponent,
    UpdatejobpostdialogComponent
  ],
  imports: [
    CommonModule,
    CompanyAdminRoutingModule,
    DynamicTableModule,

    // material
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    InputTextModule,
    FormsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,


    // primeng 
    ToastModule,
    ChartModule,
    ChipsModule,
    DropdownModule,
    CheckboxModule,
    AccordionModule,
    EditorModule

    
  ],
  providers:[MessageService]
})
export class CompanyAdminModule { }
