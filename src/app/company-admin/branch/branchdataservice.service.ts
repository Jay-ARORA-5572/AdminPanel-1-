import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BranchdataserviceService {

  baseurl:any=environment.baseUrl;
  devkey:any=environment.devkey;

  constructor(private http:HttpClient) { }

  branchdataget(token:any){
    const headers = new HttpHeaders({
      'token': token,
     'api-key': this.devkey
    });
    let obj = {
      registration: true
    };  
   return this.http.post(this.baseurl+'branch',{obj},{headers});
  }
}
