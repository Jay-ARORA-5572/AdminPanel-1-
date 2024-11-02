import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AllUserLoginService } from './all-user-login.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-all-loginpanel',
  templateUrl: './all-loginpanel.component.html',
  styleUrl: './all-loginpanel.component.css'
})
export class AllLoginpanelComponent {
  value: any;
  hide = true;
  name: string = "";
  password: string = "";
  forgetpassword=false;
  forgetpasswordenter=false;
  loginhide=true;

  forgotpassemail:any='';
  opt:any="";
  conformpass:any="";

  
    
  constructor(private messageService: MessageService, private router: Router, private userlogin: AllUserLoginService) { }

  ngOnInit() { }

  logindata(data: any) {

    this.userlogin.login(data).subscribe((res: any) => {
      console.log("Response for login -------",res["user"]["role"]["role"])

      if (res["message"] == "Login successful") {
        localStorage.setItem('accesstoken', res["accesstoken"]);
        localStorage.setItem("name",res["user"]["personalInfo"]["username"])
        localStorage.setItem("userid",res["user"]["userId"])
      
        this.messageService.add({ severity: 'success', summary: 'Success', detail: res["message"] });
        if (res["user"]["role"]["role"].toLowerCase() == "admin") {
          this.router.navigate(['/login']);
        }
        else if (res["user"]["role"]["role"].toLowerCase() == "institute") {  
          this.router.navigate(['/instituteadmin']);
        }
        else if (res["user"]["role"]["role"].toLowerCase() == "branch") {
          this.router.navigate(['/branch']);
        }
        else if (res["user"]["role"]["role"].toLowerCase() == "branch") {
          this.router.navigate(['/branch/staff']);
        }

      } else {
        // console.log("Error logging in:", res["error"]);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res["error"] });
      }
    }, (error) => {
      // console.log("HTTP request error:", error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: error["error"]["error"] });
    });
  }

  forgetpasswordstart(){
    this.loginhide=false
    this.forgetpassword=true;
    this.forgetpasswordenter=false;
  }

  forgetpasswordsend(){
    console.log("Send password--",this.forgotpassemail);
 
    if (this.forgotpassemail==''){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Email id is required" });
      this.loginhide=false;
      this.forgetpasswordenter=false;
      this.forgetpassword= true;
      }
      else{
        this.messageService.add({ severity: 'success', summary: 'Success', detail: "OTP Send Successfully" });
        this.forgetpassword=false;
        this.loginhide=false;
        this.forgetpasswordenter=true;
    }
  }

  homepage(){
    this.forgotpassemail="";
    this.loginhide=true;
    this.forgetpassword=false;
    this.forgetpasswordenter=false;
  }

  changepassword(){
    this.forgotpassemail="";
    console.log("Change password called");
    if (this.opt=="" && this.conformpass=="") {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Email id and reset password is required" });
      this.forgetpassword=false; 
      this.loginhide=false;   
      this.forgetpasswordenter=true;

    }
    else{
      this.messageService.add({ severity: 'success', summary: 'Success', detail: "Password Reset Successfully" });
      this.forgetpassword=false; 
      this.loginhide=true;   
      this.forgetpasswordenter=false;
    }
    
  }


}
