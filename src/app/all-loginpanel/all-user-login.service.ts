import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllUserLoginService {

  constructor(private http:HttpClient) { }
  
  baseurl:any=environment.baseUrl;
  devkey:any=environment.devkey;

  login(obj:any):Observable<any>{
    const headers = new HttpHeaders({
      'api-key': this.devkey
    });
    console.log("Payload -------",obj)
    return this.http.post(this.baseurl+'login',obj,{headers})
  }
}
