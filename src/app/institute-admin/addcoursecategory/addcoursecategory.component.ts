import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SharedService } from '../shared.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { AddcategoryserviceService } from './addcategoryservice.service';

@Component({
  selector: 'app-addcoursecategory',
  templateUrl: './addcoursecategory.component.html',
  styleUrl: './addcoursecategory.component.css'
})
export class AddcoursecategoryComponent {

  constructor(private messageService: MessageService, private sharedService: SharedService, public dialogRef: MatDialogRef<AddcoursecategoryComponent>, private addcategories: AddcategoryserviceService) { }

  token: any;
    // Define your question structure
  questions: { text: string; options: { text: string }[] }[] = [{ text: '', options: [{ text: '' }] }];
  subCategoryAdd:any=[
    { "name": "" },
  ];

  

  ngOnInit(): void {
    this.token = localStorage.getItem("accesstoken")
    
  }



  // Successfully

  categoryadd(categorydata: any) {
    console.log(categorydata)
    let institutionid = "66a4d9e310fd3e344773cd23"
    let valid;
    valid = categorydata['form']['status']
    let obj: any = {};
    obj["InsituteId"] = institutionid
    obj["categoryName"] = categorydata['form']["value"]["category"]
    obj["description"] = categorydata['form']["value"]["description"]
    // let subdata:any=[];
    // subdata.push(this.subCategoryAdd.map((subcat:any) =>({"name":subcat.name})));
    obj["subcategories"] = this.subCategoryAdd;        
    console.log("Final Object:", obj);

    if (valid == "VALID") {
     
      this.addcategories.instituteaddcategory(obj, this.token).subscribe((res: any) => {
        if (res['success'] == "Successfully") {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Course Category Create Successfully' })
        }
        else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res })
        }
      }, (error) => {
        console.log("111. HTTP request error:", error);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error["error"]["error"] });
      });
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'All fields are required' })
    }
  }




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



  onCancelClick(): void {
    this.dialogRef.close();
  }


    // Add a new question
    onAddNewCategory() {
      // this.questions.push({ text: '', options: [{ text: '' }] });
      this.subCategoryAdd.push({ "name": "" });
      
    }
  

}
