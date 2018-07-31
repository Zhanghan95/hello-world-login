import { Injectable } from '@angular/core';
import { Http, Headers } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8080";

  constructor(private http: Http) { }

  loginUser(value) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.url+'/login', 
                        JSON.stringify(value),
                        {headers: headers});
  }
}
