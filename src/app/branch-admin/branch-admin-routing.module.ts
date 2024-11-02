import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../auth.guard';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:"branch",component:LoginComponent,canActivate: [AuthGuard]}
  {path:"branch",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchAdminRoutingModule { }
