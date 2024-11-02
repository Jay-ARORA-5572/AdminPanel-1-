import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseraddservicesService {
  
  
  baseurl:any=environment.baseUrl;
  devkey:any=environment.devkey;

  constructor(private http:HttpClient) { }
  
  newuseradd(obj:any,token:any):Observable<any>{

    const headers = new HttpHeaders({
      'token': token,
      'api-key':this.devkey
    });
   return this.http.post(this.baseurl+'registration/user',obj,{headers });
  }

  datagetallinstitute(token:any):Observable<any>{

    const headers = new HttpHeaders({
      'token': token,
      'api-key':this.devkey,
    });
    let obj = {
      registration: true
    };
    
   return this.http.post(this.baseurl+'Institution/data',obj,{ headers:headers});
  }

  branchdataget(token:any){
    const headers = new HttpHeaders({
      'token': token,
      'api-key':this.devkey
    });
    let obj = {
      registration: true
    };
   return this.http.post(this.baseurl+'branch',obj,{ headers:headers});
  }

}
