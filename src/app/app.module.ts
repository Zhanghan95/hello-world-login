import { PostsService } from './posts.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    PostsComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '**', component: HomeComponent }
      
    ])
  ],
  providers: [PostsService, SignupService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }