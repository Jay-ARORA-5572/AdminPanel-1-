import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllCourseService {

  baseurl: any = environment.baseUrl;
  devkey: any = environment.devkey;

  constructor(private http: HttpClient) { }



  getallcourse(token: any): Observable<any> {
   let institutionid = "66a4d9e310fd3e344773cd23"
    const headers = new HttpHeaders({
      'token': token,
      'api-key': this.devkey
      // 'api-key': "f2f6079a9c13a0cb451ebecba995c1dce5f5634ee95472ca8d4d31c78ca8"
    });
    console.log("api-key ------->",this.devkey)
    return this.http.post(this.baseurl + 'institution/courses/getall',{institutionid}, { headers });
  }
}