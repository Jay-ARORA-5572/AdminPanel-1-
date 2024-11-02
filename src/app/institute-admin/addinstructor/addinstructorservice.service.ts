import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddinstructorserviceService {
 
  baseurl:any=environment.baseUrl;
  devkey:any=environment.devkey;

  constructor(private http:HttpClient) { }
  
  instructoradd(obj:any,token:any):Observable<any>{

    const headers = new HttpHeaders({
      'token': token,
      'api-key':this.devkey
    });
   return this.http.post(this.baseurl+'registration/user',obj,{headers });
  }
}
