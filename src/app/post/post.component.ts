import { Component, OnInit } from '@angular/core';

import { HomeService } from 'app/home/home.service';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  private posts: Post[];
  private post: Post;

  constructor(private homeService: HomeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.posts = this.homeService.getPosts();
    this.getPost();
  }

  getPost() {
    this.route.params.subscribe(
      (params: any) => {
        let id: number = params['id'];

        for (let i = 0; i < this.posts.length; i++) {
         if (this.posts[i].id == id) {
           this.post = this.posts[i];
           break;
         }
        }
      }
    )
  }

}
