import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent  implements OnInit{
  postId: string | null = null;
  post = {
    id: '',
    tittle: '',
    content: '',
    author: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.postId) {
      this.postsService.getPostById(this.postId).subscribe((postData) => {
        this.post = postData;
      });
    }
  }

  updatePost(): void {
    if (this.postId) {
      this.postsService.updatePosts(this.postId, this.post).then(() => {
        this.router.navigate(['/']);
      }).catch(error => {
        console.error("Error updating post: ", error);
      });
    }
  }
}

