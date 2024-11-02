import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {


  myRouteEmitter: EventEmitter<string> = new EventEmitter();

  refreshData: EventEmitter<string> = new EventEmitter();
 constructor() {  }


 private sharedData: any;
 setSharedData(data: any) {
   this.sharedData = data;
 }

 getSharedData() {
   return this.sharedData;
 }
}
