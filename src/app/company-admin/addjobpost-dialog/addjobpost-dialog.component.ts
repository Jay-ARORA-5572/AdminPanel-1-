import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { AddjobposterdialogservicesService } from './addjobposterdialogservices.service';
import { SharedServicesService } from '../shared-services.service';


@Component({
  selector: 'app-addjobpost-dialog',
  templateUrl: './addjobpost-dialog.component.html',
  styleUrl: './addjobpost-dialog.component.css',
})

export class AddjobpostDialogComponent {

  constructor(private messageService:MessageService,public dialogRef: MatDialogRef<AddjobpostDialogComponent>, private addjobposter:AddjobposterdialogservicesService,private sharedservice:SharedServicesService) { }

  imgsrc:any="";
  data:any="";
  showPersonalInformation: boolean = false;
  showContactInformation: boolean = false;
  showCandidateRequirements: boolean = false;
  showInternshipDetails : boolean = false;


  customToolbar: any = [
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    // [{ 'font': [] }],
    // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    // ['blockquote', 'code-block'],
    // [{ 'script': 'sub'}, { 'script': 'super' }],
    // [{ 'indent': '-1'}, { 'indent': '+1' }],
    // [{ 'direction': 'rtl' }],
    // [{ 'color': [] }, { 'background': [] }],
    // [{ 'align': [] }],
    // ['clean'],
    // ['link', 'image', 'video']
  ];

  ngOnInit() {

}



  onCancelClick(): void {
    this.dialogRef.close();
  }

  readURL(input:any) {
    if (input.target.files && input.target.files[0]) {
      const file = input.target.files[0];
      const reader = new FileReader();
      reader.onload = (e:any) => {
        this.imgsrc = reader.result;
      }
      reader.readAsDataURL(file);
    }
  }


  addgovt(values:any){
    let valid;
    valid=values['form']['status']
    console.log(valid)
  //   this.institutionData.location.baseAddress=values['form']['value']['baseAddress'];
  //   this.institutionData.location.landmark=values['form']['value']['landmark'];
  //   this.institutionData.contact.mobnum=Number(values['form']['value']['mobnum']);
  //   this.institutionData.contact.emailid=values['form']['value']['emailid'];
  //   this.institutionData.institutionname=values['form']['value']['institutionname'];
  //   this.institutionData.location.zipcode=values['form']['value']['zipcode'];
  //   // this.institutionData.icon=this.imgsrc;
  //   // console.log(this.institutionData);
  //   if (valid=="VALID"){
  //      this.instituteaddservice.institutedata(this.institutionData).subscribe((res:any) =>{
  //       console.log(res);
  //       if (res['message']=="Successfully Created Institute"){
  //         this.sharedservice.myRouteEmitter.emit('Institute Sections');
  //         this.sharedservice.refreshData.emit('true');
  //         values['form'].reset();
  //         this.onCancelClick();
  //       }
  //       else{
  //         this.messageService.add({ severity: 'error', summary: 'Error', detail: res })
  //       }
  //     });
  //   }

  //   else{
  //       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' })
  //   }
  // }  
  }


  togglePersonalInformation() {
    this.showPersonalInformation = !this.showPersonalInformation;
  }

  toggleContactInformation() {
    this.showContactInformation = !this.showContactInformation;
  }
  
  toggleCandidateRequirements() {
    this.showCandidateRequirements = !this.showCandidateRequirements;
  }

  toggleInternshipDetails() {
    this.showInternshipDetails = !this.showInternshipDetails;
  }

}
