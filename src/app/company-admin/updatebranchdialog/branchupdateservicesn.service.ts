import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchupdateservicesnService {
  baseurl:any=environment.baseUrl;
  devkey:any=environment.devkey;

  constructor(private http:HttpClient) { }

  branchupdate(obj:any,token:any){
    const headers = new HttpHeaders({
      'token': token,
     'api-key': this.devkey
    });
    console.log("Serivces Api called ",obj)
    return this.http.post(this.baseurl+'branch/update',obj,{headers})
  }


  branchdataget(token:any):Observable<any>{
    const headers = new HttpHeaders({
      'token': token,
      'api-key': this.devkey
    });
    let obj = {
      registration: true
    }; 
    return this.http.post(this.baseurl+'branch',obj,{ headers});
   }
}
