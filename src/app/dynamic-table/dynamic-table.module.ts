import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponentComponent } from './dynamic-table-component/dynamic-table-component.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    DynamicTableComponentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports:[DynamicTableComponentComponent]
})
export class DynamicTableModule { }
