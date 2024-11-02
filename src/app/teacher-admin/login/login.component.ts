import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route:Router){}
  Role:any="Dashboard";
  myroute:string='';
  username:any;

  arr:any=[
    {"logo":"Dashboard.png","name":"Dashboard"},
    {"logo":"Dashboard.png","name":"Live Class"},
    {"logo":"staffmanagement.png", "name": "My Profile" },
    {"logo":"help.png","name":"Schedule"},
    {"logo":"setting.png","name":"Quizzes"},
    {"logo":"help.png","name":"Exams"},
    {"logo":"help.png","name":"Assignment"},
    {"logo":"help.png","name":"Batches"},
    {"logo":"help.png","name":"Doubts"},
    {"logo":"staffmanagement.png", "name": "Student Profile" },
    {"logo":"logout.png","name":"Logout"},
  ]

  ngOnInit(): void {
    localStorage.setItem("select_sidebar",this.Role); 
    let role:any=localStorage.getItem("select_sidebar");
    this.username =localStorage.getItem("name")
    this.RoleChange(role);
    // console.log(role)

    // this.sharedservice.myRouteEmitter.subscribe((data: string) => {
    //   // console.log('Received event:', data);
    //   // Handle the emitted event 
    //   this.RoleChange(data);
    //   // this.myroute=data;
    //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Course add successfully' })
    // });
  }
  
  
  RoleChange(item: any){
    this.Role=item;
    localStorage.setItem("select_sidebar",this.Role); 
    if(this.Role=="Dashboard"){this.myroute='dashboard';}
    else if (this.Role == "Live Class") { this.myroute = 'live-class';}
    else if (this.Role == "My Profile") { this.myroute = 'adminprofile';}
    else if(this.Role=="Schedule") {this.myroute='schedule';}
    else if(this.Role=="Quizzes") {this.myroute='quizzes';}
    else if(this.Role=="Exams") {this.myroute='exams';}
    else if(this.Role=="Assignment") {this.myroute='assignment';}
    else if(this.Role=="Batches") {this.myroute='batches';}
    else if(this.Role=="Doubts") {this.myroute='doubts';} 
    else if (this.Role == "Student Profile") { this.myroute = 'student-profile';}
    else if(this.Role=="Logout") {this.myroute='Logout'; this.logout();}

  }

  logout(){
    // console.log("call log out");
    localStorage.removeItem("accesstoken");
    this.route.navigate([""])
  }


}
