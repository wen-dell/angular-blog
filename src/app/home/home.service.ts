import { Injectable } from '@angular/core';

import { posts } from './../mock-post';

@Injectable()
export class HomeService {

  constructor() { }

  getPosts() {
    return posts;
  }

}
