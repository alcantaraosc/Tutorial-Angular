import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response';
import { Message } from '../interfaces/message';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( 
    //se inyecta este servicio que ya viene en angular
    private _http: HttpClient) { }

  api_url: string ='https://jsonplaceholder.typicode.com/';
  /*http://httpbin.org/get */

  login(user: string, password: string):Observable<LoginResponse>{
    password=btoa(password);
    return this._http.post<LoginResponse>(`${this.api_url}/auth/login`,{
      user: user,
      password:password
    })
  }


     public getMessage(): Observable<Message[]> {
       return this._http.get<Message[]>("2255");    
    }

  

}
