import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  baseurl:any=environment.baseUrl;
  devkey:any=environment.devkey;

  constructor(private http:HttpClient) { }
  

  registercourse(obj:any,token:any):Observable<any>{
    const headers = new HttpHeaders({
      'token': token,
      'api-key':this.devkey,
    });
    console.log("services ------>"+obj)
   return this.http.post(this.baseurl+'registration/course',obj,{headers});
  }

  addchapter(obj:any,token:any):Observable<any>{
    const headers = new HttpHeaders({
      'token': token,
      'api-key':this.devkey
    });
   return this.http.post(this.baseurl+'course/chapter/add',obj,{headers});
  }

  uploadvideo(obj:any,token:any):Observable<any>{
    const headers = new HttpHeaders({
      'token': token,
      'api-key':this.devkey
    });
   return this.http.post(this.baseurl+'course/chapter/content/add',obj,{headers});
  }



}

