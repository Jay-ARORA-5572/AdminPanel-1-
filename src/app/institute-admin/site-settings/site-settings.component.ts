import { Component } from '@angular/core';

@Component({
  selector: 'app-site-settings',
  templateUrl: './site-settings.component.html',
  styleUrl: './site-settings.component.css'
})
export class SiteSettingsComponent {
  
  country: any;
  state: any;

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      const fileName = Array.from(files).map(file => file.name).join(', ');
      const fileNameSpan = document.querySelector('.file-name');
      if (fileNameSpan) {
        fileNameSpan.textContent = fileName;
      }
    }
  }

  enrollStudent() {
    // Add logic to enroll the student
  }

}

