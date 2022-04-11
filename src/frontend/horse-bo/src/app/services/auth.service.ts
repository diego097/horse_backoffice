import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  APIURL = environment.APIURL;
  config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}};
  constructor(private http: HttpClient) { }

  login(params: any): Observable<any>{
    const data = this.http.post(this.APIURL, params, this.config).toPromise();
    return (data as any);
  }

  validateToken(params:any):Observable<any>{
    const data = this.http.post(this.APIURL, params, this.config).toPromise();
    return (data as any);
  }
  
  sendLogData(params: any):Observable<any>{
    const data = this.http.post(this.APIURL, params, this.config).toPromise();
    return (data as any);
  }

  setUser(user: any): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("data", user_string);
  }
  getUser(){
    return JSON.parse(localStorage.getItem('data') || '{}');
  }
  getCurrentUser(){
    let user = this.getUser();
    return user != '{}' ? user : null ;
  }
  async logoutUser() {
    localStorage.removeItem("data");
  }
}


