import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddinstituteServicesService {
  baseurl:any=environment.baseUrl;

  constructor(private http:HttpClient) { }
  
  institutedata(obj:any,token:any):Observable<any>{
    console.log("Serivces Api called ")
    console.log(obj);
    const headers = new HttpHeaders({
      'token': token,
      'api-key':"98ce0b9d487eeb5685ec8757d0d67db68879492c6aa87720d8204a770c87"
    });
    
   return this.http.post(this.baseurl+'registration/institution',obj,{headers});
  }

}
