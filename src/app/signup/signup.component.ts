import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupFailed = false;

  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.valid) {
      // let user = { 'username': form.value.username, 'password': form.value.password };
      console.log(form.value);
      this.signupService.createUser(form.value) .subscribe(
        response => {
          if (response.status === 200) {
            window.location.href = "http://localhost:4200/login";
          }
        },
        (error: Response) => {
          if (error.status === 400) {
            this.signupFailed = true;
            console.log(error);
          }
        }
      );
    }
  }

}
