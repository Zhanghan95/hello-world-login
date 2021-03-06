import { Injectable } from '@angular/core';
import { Http, Headers } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url = "http://localhost:8080";

  constructor(private http: Http) { }

  createUser(value) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.url+'/register', 
                  JSON.stringify(value),
                  {headers: headers});
  }
}
