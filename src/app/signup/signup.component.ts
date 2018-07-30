import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '../../../node_modules/@angular/http';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  url = "http://localhost:8080"
  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.valid) {
      // let user = { 'username': form.value.username, 'password': form.value.password };
      console.log(form.value);
      let user = { username: "zhanghan", password: "123456" };

      let headers = new Headers({
        'Content-Type' : 'application/json'
      });

      this.http.post(this.url+'/register', 
                    JSON.stringify(form.value),
                    {headers: headers}).subscribe(response => {
        console.log(response.json());
      })
    }
  }

  getUsers() {
    this.http.get(this.url+"/register").subscribe(response => {
      console.log(response.json());
    })
  }

}
