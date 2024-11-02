import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jspdf, { jsPDF } from 'jspdf';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {

  data:any={
    "Name":"Rahul",
    "Designation":"Full Stack Developer",
    "CertificateNo":"NIC3432",
    "ComplitionDate":"17-06-2024",
    "DOB":"27-08-1991",
    "Mobile":"9971989713"
  }

  showdiv:boolean=false;

  printdiv(){
    const divToDownload: any = document.getElementById('certificate');
    
    if (!divToDownload) {
      console.error('Div not found!');
      return;
    }

    // Save original display style
    const originalDisplay = divToDownload.style.display;

    // Temporarily show the div
    divToDownload.style.display = 'block';

    const divWidth = divToDownload.offsetWidth;
    const divHeight = divToDownload.offsetHeight;

    html2canvas(divToDownload, { width: divWidth, height: divHeight }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'pt', [canvas.width, canvas.height]);
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(this.data['Name'] + '.pdf');

      // Restore original display style
      divToDownload.style.display = originalDisplay;
    }).catch(error => {
      console.error('Error generating canvas:', error);

      // Restore original display style in case of error
      divToDownload.style.display = originalDisplay;
    });
  }
  

}
