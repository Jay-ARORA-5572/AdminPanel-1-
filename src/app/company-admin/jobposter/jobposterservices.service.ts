import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobposterservicesService {
  
  baseurl:any=environment.baseUrl;
  devkey:any=environment.devkey;
  
  constructor(private http:HttpClient) { }

  getalljobs(token:any):Observable<any>{
    const headers = new HttpHeaders({
      'token': token,
      'api-key':this.devkey
    });
   return this.http.get(this.baseurl+'govtjob/get_all',{ headers: headers });
  }
}
