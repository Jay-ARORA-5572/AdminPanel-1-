import { Component } from '@angular/core';
import { SharedService } from '../../institute-admin/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private route: Router, private sharedservice: SharedService) { }

  Role: any = "Dashboard";
  myroute: string = '';
  username: any;

  dash: any = [];
  coursesubmenu: boolean = false;

  dashinstructor: any = [];
  instructorsubmenu: boolean = false;

  arr: any = [
    { "logo": "Dashboard.png", "name": "Dashboard" },
    { "logo": "ourproduct.png", "name": "Sale" },
    { "logo": "ourproduct.png", "name": "Staff Management" },
    { "logo": "staffmanagement.png", "name": "Admin Profile" },
    { "logo": "Dashboard.png", "name": "About Institute", "sub": '', "show": false },//4
    { "logo": "setting.png", "name": "Post Jobs" },
    { "logo": "Payment.png", "name": "Invoice", "sub": '', "show": false },//6
    { "logo": "Dashboard.png", "name": "Support Us" },
    { "logo": "help.png", "name": "Help" },
    { "logo": "ourproduct.png", "name": "Event Management" },
    { "logo": "setting.png", "name": "Settings" },
    { "logo": "logout.png", "name": "Logout" },
  ]

  ngOnInit(): void {
    localStorage.setItem("select_sidebar", this.Role);
    let role: any = localStorage.getItem("select_sidebar");
    this.username = localStorage.getItem("name")
    this.RoleChange(role);

    // console.log(role)

    this.sharedservice.myRouteEmitter.subscribe((data: string) => {
      console.log('Received event:', data);
      // Handle the emitted event 
      this.RoleChange(data);
      this.myroute = data;
      //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Course add successfully' })
    });
  }


  RoleChange(item: any) {
    localStorage.setItem("select_sidebar", this.Role);
    this.Role = item;
    console.log("Role change --->", this.Role)
    console.log("route name --->", item)

    if (this.Role == "Dashboard") { this.myroute = 'dashboard'; }

    else if (this.Role == "Sale") { this.myroute = 'sale'; }
    else if (this.Role == "Staff Management") { this.myroute = 'staffmanagement'; }
    else if (this.Role == "Admin Profile") { this.myroute = 'adminprofile'; }
    else if (this.Role == "About Institute") {

      if (!this.arr[4]['sub'].length) {
        this.arr[4]['show'] = true;
        this.arr[4]['sub'] = [
          { "logo": "ourproduct.png", "name": "Manage Institute" },
          { "logo": "Payment.png", "name": "Institute Profile" },
          { "logo": "Payment.png", "name": "Student Profile" },
        ];
      }
      else {
        this.arr[4]['show'] = false;
        this.arr[4]['sub'] = [];
      }

    }
    else if (this.Role == "Manage Institute") { this.myroute = 'addmanageinstitute'; }
    else if (this.Role == "Institute Profile") { this.myroute = 'viewinstitute'; }
    else if (this.Role == "Student Profile") { this.myroute = 'viewstudent'; }
    else if (this.Role == "Post Jobs") { this.myroute = 'postjobs'; }

    else if (this.Role == "Invoice") {

      if (!this.arr[6]['sub'].length) {
        this.arr[6]['show'] = true;
        this.arr[6]['sub'] = [
          { "logo": "ourproduct.png", "name": "Invoice List" },
          { "logo": "Payment.png", "name": "Invoice History" },
        ];
      }
      else {
        this.arr[6]['show'] = false;
        this.arr[6]['sub'] = [];
      }

    }

    else if (this.Role == "Invoice List") { this.myroute = 'invoicelist'; }
    else if (this.Role == "Invoice History") { this.myroute = 'invoicehistroy'; }
    else if (this.Role == "Support Us") { this.myroute = 'contact'; }
    else if (this.Role == "Help") { this.myroute = 'help'; }
    else if (this.Role == "Event Management") { this.myroute = 'eventmanagement'; }
    else if (this.Role == "Settings") { this.myroute = 'Settings'; }
    else if (this.Role == "Logout") { this.myroute = 'Logout'; this.logout(); }

    // else if(this.Role=="Logout") {this.myroute='Logout'; this.logout();}
    // else if(this.Role=="Reports") {this.myroute='Reports';}
    // else{this.myroute="Help"}
  }

  logout() {
    // console.log("call log out");
    localStorage.removeItem("accesstoken");
    this.route.navigate([""])
  }

}
