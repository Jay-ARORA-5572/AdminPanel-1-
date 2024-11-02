import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent {
  personalinfo = true;
  notification = false;
  accountactivity = false;
  securitysettings = false;

  items = [
    {
      label: 'Personal Information', icon: 'pi pi-fw pi-user', routerLink: ['/personal'],
      command: () => {
        this.showActivities();
      }
    },
    { label: 'Notifications', icon: 'pi pi-fw pi-bell', routerLink: ['/notification'],
      command: () => {
      this.notificationstatus();
    } },
    { label: 'Account Activity', icon: 'pi pi-fw pi-calendar', routerLink: ['/activity'], 
    command: () => {
      this.showActivity();
    }},
    { label: 'Security Settings', icon: 'pi pi-fw pi-lock', routerLink: ['/security'], 
    command: () => {
      this.securitystatus();
    }}
  ];
  checked: boolean = false;
  
  showActivities(){
    this.personalinfo=true;
    this.notification=false;
    this.accountactivity=false;
    this.securitysettings=false;
  }
  notificationstatus(){
    this.notification=true;
    this.securitysettings=false;
    this.personalinfo=false;
    this.accountactivity=false;
  }

  showActivity(){
    this.accountactivity=true;
    this.securitysettings=false;
    this.personalinfo=false;
    this.notification=false;
  }

 securitystatus(){
    this.securitysettings=true;
    this.personalinfo=false;
    this.notification=false;
    this.accountactivity=false;
  }

  securityAlert1: boolean = false;
  securityAlert2: boolean = false;
  news1: boolean = true;
  news2: boolean = false;
  news3: boolean = true;

  loginActivity: any[] = [
    { browser: 'Chrome on Window', ip: '192.149.122.128', time: '11:34 PM' },
    { browser: 'Mozilla on Window', ip: '86.188.154.225', time: 'Nov 20, 2019 10:34 PM' },
    { browser: 'Chrome on iMac', ip: '192.149.122.128', time: 'Nov 12, 2019 08:56 PM' },
    // Add the rest of the entries
  ];

  saveLogs: boolean = false;



}
