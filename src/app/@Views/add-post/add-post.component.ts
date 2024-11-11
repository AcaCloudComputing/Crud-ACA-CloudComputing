import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent {
  newPost = {
    id: '',
    tittle: '',
    content: '',
    author: ''
  };

  constructor(private postsService: PostsService, private router: Router) {}

  addPost() {
    this.postsService.createPosts(this.newPost).then(() => {
      this.router.navigate(['/']);
    }).catch(error => {
      console.error("Error adding post: ", error);
    });
  }
}