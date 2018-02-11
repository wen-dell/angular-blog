import { Component, OnInit } from '@angular/core';

import { HomeService } from 'app/home/home.service';
import { Post } from '../post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private posts: Post[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.posts = this.homeService.getPosts();
  }

}
