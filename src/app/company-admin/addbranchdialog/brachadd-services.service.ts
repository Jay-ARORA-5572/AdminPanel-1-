import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrachaddServicesService {

  baseurl:any=environment.baseUrl;
  devkey:any=environment.devkey;

  constructor(private http:HttpClient) { }

  addbranch(obj:any,token:any){
    const headers = new HttpHeaders({
      'token': token,
      'api-key':this.devkey
    });
    console.log("Serivces Api called ",obj)
    return this.http.post(this.baseurl+'branch/add',obj,{headers})
  }
}
