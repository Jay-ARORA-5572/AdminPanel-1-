import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ViewQueryDialogComponent } from "../view-query-dialog/view-query-dialog.component";

interface Status {
  OngoingStatus: string;
}
@Component({
  selector: "app-orderpanding-dialog",
  templateUrl: "./orderpanding-dialog.component.html",
  styleUrl: "./orderpanding-dialog.component.css",
})
export class OrderpandingDialogComponent {
  first: number = 0;

  rows: number = 6;
  checkedall: boolean = false;
  checkedone: boolean = false;

  constructor(private dialog: MatDialog) {}

  status: Status[] | undefined;

  selectedStatus: Status | undefined;

  ngOnInit() {
    this.status = [
      { OngoingStatus: "Active" },
      { OngoingStatus: "Pending" },
      { OngoingStatus: "Rejected" },
    ];
  }

  courses = [
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Android Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Android Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Pending",
      statusClass: "pending",
      payment: "$30",
      timing: "20.4.2021",
    },
    {
      name: "aman",
      postName: "Web Development",
      status: "Active",
      statusClass: "active",
      payment: "$30",
      timing: "20.4.2021",
    },
  ];

  onPageChange(event: any) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
  }

  // addcourse() {
  //   const dialogRef = this.dialog.open(AddcourseDialogComponent, {
  //     width: "60%",
  //     // height: "75%",
  //     height: "auto",
  //   });
  // }

  // EditCourse() {
  //   console.log('View Details clicked');
  //   const dialogRef = this.dialog.open(CourseEditComponent, {
  //     width: "35%",
  //     height: "auto",
  //   });
  // }

  DeleteCourse() {
    console.log("Activities clicked");
  }

  selectbtn() {
    this.dialog.closeAll();
    this.dialog.open(ViewQueryDialogComponent, {
        width: "auto",
        height: "90%",
    });
  }
}
