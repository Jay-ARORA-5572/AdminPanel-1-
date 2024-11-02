import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  // {path:"branchstaff/",component:LoginComponent,canActivate: [AuthGuard]},
  {path:"branchstaff",component:LoginComponent}
  
  // {path:"branch/staff",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchstaffAdminRoutingModule { }
