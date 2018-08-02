import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFailed = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.valid) {
      // let user = { 'username': form.value.username, 'password': form.value.password };
      console.log(form.value);

      this.loginService.loginUser(form.value).subscribe(
        response => {
          if (response.status === 200) {
            window.location.href = "http://localhost:4200/welcome";
          }
        },
        (error: Response) => {
          if (error.status === 400) {
            this.loginFailed = true;
            console.log(error);
          }
        }
      );

    }
  }

}
