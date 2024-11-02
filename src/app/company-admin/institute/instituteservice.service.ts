import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';



const httpHeaders = new HttpHeaders ({'Content-Type': 'application/json',});


@Injectable({providedIn: 'root'})



export class InstituteserviceService {
  baseurl:any=environment.baseUrl;
  devkey:any=environment.devkey;

  constructor(private http:HttpClient) { }

  institutegetdata(token:any):Observable<any>{
    const headers = new HttpHeaders({
      'token': token,
      'api-key':this.devkey

    });
    let obj = {
      registration: true
    };

   return this.http.post(this.baseurl+'Institution/data',obj,{headers});
  }

  institutedataget(dictxx:any,token:any):Observable<any> {
    console.log("services ")
    console.log(dictxx)
    const headers = new HttpHeaders({
      'token': token,
      'api-key':this.devkey
    });

    return this.http.post(this.baseurl+"Instution/find",dictxx,{headers});
   }
}
