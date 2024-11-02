import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

  profileManagementFeatures: string[] = [
    'Update Personal Information',
    'Change Password',
    'Profile Picture Upload',
    'Set Availability'
  ];

  accessControlFeatures: string[] = [
    'Role Management',
    'Activity Logs',
    'Account Lock/Unlock'
  ];

  branchSettingsFeatures: string[] = [
    'Branch Information',
    'Holiday Scheduling',
    'Service Categories',
    'Branch-Wide Announcements'
  ];

  securitySettingsFeatures: string[] = [
    'Password Policy',
    'Session Timeout',
    'IP Whitelisting',
    'Login Activity Monitoring'
  ];

  notificationPreferencesFeatures: string[] = [
    'Email Notifications',
    'SMS Alerts',
    'Task Reminders',
    'Communication Preferences'
  ];
}
