import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UpdateinstituteServiceService {

  baseurl:any=environment.baseUrl;
  devkey:any=environment.devkey;

  constructor(private http:HttpClient) { }
  
  institutedataupadate(obj:any,token:any){
    console.log("service");
    const headers = new HttpHeaders({
      'token': token,
      'api-key': this.devkey
    });
    return this.http.post(this.baseurl+'Instution/update',obj,{headers});
    
  }

}
