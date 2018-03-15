import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  //it works fine without moduleId
  moduleId: module.id,
  //selector: 'user',
  templateUrl: 'user.component.html',
  providers:[PostsService]
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Posts[];

  constructor(private postsService: PostsService) {
    this.name = 'Angular';
    this.email = 'john@doe.com';
    this.address = {
      street:'12 main st',
      city:'Toronto',
      state: 'ON'
    }
    this.hobbies = ['Music', 'Movies', 'Sport'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts =>{
      this.posts = posts;
    });


  }

  toggleHobbies(){
    if(this.showHobbies == false){
      this.showHobbies = true;
    }else{
      this.showHobbies = false;
    }
  }

  addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i,1);
  }

  interface address{
    street: string;
    city: string;
    state: string
  }

  interface Posts{
    id: number;
    title: string;
    body: string;
  }

}
