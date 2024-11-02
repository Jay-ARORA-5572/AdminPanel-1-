import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorylistserviceService {
  baseurl:any=environment.baseUrl;
  devkey:any=environment.devkey;

  constructor(private http:HttpClient) { }
// /institution/addcategory


listcategorylist(data:any,token:any): Observable<any>{
  const headers = new HttpHeaders({
    'token': token,
    'api-key': this.devkey
  });
 return this.http.post(this.baseurl+'institution/getCategory',{data},{ headers});
}


}