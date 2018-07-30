import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts: any[];

  constructor(private service: PostsService) { 
    
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value};
    this.service.createPost(post).subscribe(response => {
      console.log(response.json());
    });
 
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response.json();
      console.log(this.posts);
    });
  }
}
