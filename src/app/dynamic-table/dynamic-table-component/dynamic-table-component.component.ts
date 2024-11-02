import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-dynamic-table-component',
  templateUrl: './dynamic-table-component.component.html',
  styleUrl: './dynamic-table-component.component.css'
})
export class DynamicTableComponentComponent {
  checked_data:any=[];
  checkalltoggle:any=false;
  @Input() items:any=[];
  @Input() column:any=[];
  @Input() isSerial:any;
  @Input() isCheckbox:any;

  @Input() headerBackgroundColor:any;
  @Input() headerTextColor:any;
  @Input() tableTextColor:any;
  @Input() rowHeight:any;
  @Input() tableFontFamily:any;
  @Input() tableFontSize:any;
  @Input() Actions:any=[];

  @Output() selectedRow = new EventEmitter();
  @Output() onView = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  isCkeck:boolean=false;
  isSerialno:boolean=false;
  iscolumn:any=[];
  thBackgroundColor:string="#E6F1F8" // Set your desired header Background color
  thTextColor: string = 'black'; // Set your desired header text color
  allTextColor: string = 'black'; // Set your desired table text color
  allrowHeight:string = "40"; // Set your desired row height in pixels
  allFontFamily: string = "Mulish', sans-serif"; // Set your desired font family for the whole table
  allFontSize: string = '1rem'; // Set your desired font size  
  
  // variables for show actions
  actionArray:any;
  showAction:boolean=false;
  isView:boolean=false;
  isEdit:boolean=false;
  isDelete:boolean=false;


  p:any = 1;
  items1:any=10;
  itemperpage:any=[5,10,20,50,100];


  ngOnInit(): void {
    
    if (this.column.length > 0){
      this.iscolumn=this.column;
    }
    else{
      let allUniqueKeys:any = Array.from(new Set(this.items.flatMap((obj:any) => Object.keys(obj))));
      for(let ob of allUniqueKeys){
        let obj:any={}
        obj["key"]=ob;
        obj["show"]=ob;
        this.iscolumn.push(obj);
      }
    }

    if (this.isSerial=="True" || this.isSerial==true || this.isSerial=="true"){
      this.isSerialno=true;
    }
    else{
      this.isSerialno=false;
    }
    if (this.isCheckbox=="True" || this.isCheckbox==true || this.isCheckbox=="true"){
      this.isCkeck=true;
    }
    else{
      this.isCkeck=false;
    }

    if(this.headerBackgroundColor){
      this.thBackgroundColor=this.headerBackgroundColor;
    }

    if(this.headerTextColor){
      this.thTextColor=this.headerTextColor;
    }

    if(this.tableTextColor){
      this.allTextColor=this.tableTextColor;
    }

    if(this.rowHeight){
      this.allrowHeight=this.rowHeight;
    }

    if(this.tableFontFamily){
      this.allFontFamily=this.tableFontFamily;
    }

    if(this.tableFontSize){
      this.allFontSize=this.tableFontSize;
    }

    if(this.Actions.length!=0){
      this.actionArray=this.Actions;
      this.showAction=true;
      if (this.actionArray.includes("View")){
        this.isView=true;
      }
      else{
        this.isView=false;
      }
      if (this.actionArray.includes("Edit")){
        this.isEdit=true;
      }
      else{
        this.isEdit=false;
      }
      if (this.actionArray.includes("Delete")){
        this.isDelete=true;
      }
      else{
        this.isDelete=false;
      }
    }
    
  }

//  All selected checkedbox
  allchecked(event:any){
    if(event.target.checked==true){
      this.checkalltoggle=true;
      this.checked_data=[];
      for (var char of this.items){
        this.checked_data.push(char);
      }
    }
    if(event.target.checked==false){
      this.checked_data=[];
      this.checkalltoggle=false; 
      document.querySelectorAll('input[type=checkbox]').forEach((el:any) => el.checked = false);
    }    
    this.selectedRow.emit(this.checked_data);
  }

  // Singal Checkedbox
  singlechecked(event:any,data:any){
    if(event.target.checked==true){
      this.checked_data.push(data);
    }
    if(event.target.checked==false){
      const index: number = this.checked_data.indexOf(data.id);
      this.checked_data.splice(index, 1);
      let check:any=document.getElementById('allcheck');
      check.checked=false;
    }
    this.selectedRow.emit(this.checked_data);
  }

  callview(event:any){
    this.onView.emit(event);
  }

  calledit(event:any){
    this.onEdit.emit(event);
  }

  calldelete(event:any){
    this.onDelete.emit(event);
  }


}
