import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchstaffAdminRoutingModule } from './branchstaff-admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { PaymentComponent } from './payment/payment.component';
import { HelpsectionComponent } from './helpsection/helpsection.component';
import { SettingComponent } from './setting/setting.component';
import { LoginComponent } from './login/login.component';


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
import { MatTooltipModule } from '@angular/material/tooltip';

// -------------- Primeng -----------------
import {ToastModule } from 'primeng/toast';
import {MessageService } from 'primeng/api';
import {ChartModule } from 'primeng/chart';
import {ChipsModule } from 'primeng/chips';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SocketHomeComponent } from './socket-home/socket-home.component';
import { SpeedDialModule } from 'primeng/speeddial';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { OrderpandingDialogComponent } from './orderpanding-dialog/orderpanding-dialog.component';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { ViewQueryDialogComponent } from './view-query-dialog/view-query-dialog.component';
import { DocumentWalletComponent } from './document-wallet/document-wallet.component';




@NgModule({
  declarations: [
    DashboardComponent,
    OrderComponent,
    UpdateorderComponent,
    PaymentComponent,
    HelpsectionComponent,
    SettingComponent,
    LoginComponent,
    SocketHomeComponent,
    OrderpandingDialogComponent,
    ViewQueryDialogComponent,
    DocumentWalletComponent
  ],
  imports: [
    CommonModule,
    BranchstaffAdminRoutingModule,
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
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    ToastModule,
    ChartModule,
    ChipsModule,
    FloatLabelModule,
    SpeedDialModule,
    OverlayPanelModule,
    MenuModule,
    TableModule,
    DropdownModule,
    CheckboxModule,
    MatTooltipModule
  ],
  providers:[MessageService]
})
export class BranchstaffAdminModule { }
