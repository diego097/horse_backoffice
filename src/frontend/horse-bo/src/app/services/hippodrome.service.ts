import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HippodromeService {

  APIURL = environment.APIURL;
  config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
  
  constructor(private http: HttpClient) { }


  listAll(params:any):Observable<any>{
    const data = this.http.post(this.APIURL, params, this.config).toPromise();
    return (data as any);
  }

  listCarreraPorDia(params:any):Observable<any>{
    const data = this.http.post(this.APIURL, params, this.config).toPromise();
    return (data as any);
  }

  listHorsesByHippodrome(params:any):Observable<any>{
    const data = this.http.post(this.APIURL, params, this.config).toPromise();
    return (data as any);
  }
}
