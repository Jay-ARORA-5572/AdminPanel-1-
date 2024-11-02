import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLoginpanelComponent } from './all-loginpanel/all-loginpanel.component';
import { CompanyAdminModule } from './company-admin/company-admin.module';
import { InstituteAdminModule } from './institute-admin/institute-admin.module';
import { BranchAdminModule } from './branch-admin/branch-admin.module';
import { BranchstaffAdminModule } from './branchstaff-admin/branchstaff-admin.module';
import { TeacherAdminModule } from './teacher-admin/teacher-admin.module';


const routes: Routes = [
  {path:"",component:AllLoginpanelComponent},
  // {
  //   path: 'shocket',
  //   loadChildren: () => import('./socketmodule/socketmodule.module').then(m => m.SocketmoduleModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CompanyAdminModule,InstituteAdminModule,BranchAdminModule,BranchstaffAdminModule,TeacherAdminModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
