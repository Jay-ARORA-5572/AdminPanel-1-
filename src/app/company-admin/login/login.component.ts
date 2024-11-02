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
  // Role:any="Add Jobposter";
  myroute:string='';
  username:any;

  arr:any=[
    {"logo":"Dashboard.png","name":"Dashboard"},
    {"logo":"client.png","name":"Add User"},
    {"logo":"institute.png","name":"Add Institute"},
    {"logo":"Branch.png","name":"Add Branch"},
    {"logo":"jobpost.png","name":"Add Jobposter"},
    {"logo":"logout.png","name":"Logout"},

    // {"logo":"report.png","name":"Reports"},
    // {"logo":"Payment.png","name":"Payment"},
    // {"logo":"settings.png","name":"Settings"}, 
    // {"logo":"subadmin.png","name":"Sub Admin"},
    // {"logo":"client.png","name":"Clients"},
    // {"logo":"ecommerce.png","name":"Ecommerce"},
    // {"logo":"ourproduct.png","name":"Our Product"},
    // {"logo":"campushiriring.png","name":"Campus Hiring"},
    // {"logo":"clientcasestudy.png","name":"Client Case Study"},
    // {"logo":"pricing.png","name":"Pricing"},
    // {"logo":"contact.png","name":"Contact"},
    // {"logo":"quiz.png","name":"Quiz Festival"},
    // {"logo":"codingchallenge.png","name":"Hackathon Festival"},
    // {"logo":"patner.png","name":"Partner with us"},
    // {"logo":"Testnomial.png","name":"Test"},
    // {"logo":"report.png","name":"Reports"},
    // {"logo":"solution.png","name":"Solution"},
    // {"logo":"hostevent.png","name":"Host Event"},
    // {"logo":"help.png","name":"Help"},
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
    else if(this.Role=="Add User") {this.myroute='useradd';}
    else if(this.Role=="Add Institute") {this.myroute='institute';}
    else if(this.Role=="Add Branch") {this.myroute='branch';}
    else if(this.Role=="Add Jobposter") {this.myroute='jobposter';}
    else if(this.Role=="Settings") {this.myroute='Settings';}
    else if(this.Role=="Logout") {this.myroute='Logout'; this.logout();}
    // else if(this.Role=="Reports") {this.myroute='Reports';}
    // else{this.myroute="Help"}
  }

  logout(){
    // console.log("call log out");
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("name");
    this.route.navigate([""])
  }


}
