import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/Services/posts.service';
import { posts } from 'src/app/models/posts.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  posts: posts[] = [];
  newPost: posts = { id: '', tittle: '', content: '', author: '' };
  open: boolean = false;
  isFormModal: boolean = true;
  modalTitle: string = '';
  modalMessage: string = '';
  modalType: string = 'info';

  constructor(public router: Router, private postsService: PostsService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  openFormModal(): void {
    this.modalTitle = 'Add New Post';
    this.modalMessage = 'Please fill the form below to add a new post.';
    this.modalType = 'info';
    this.isFormModal = true;
    this.open = true;
  }

  openMessageModal(title: string, message: string, type: 'info' | 'error'): void {
    this.modalTitle = title;
    this.modalMessage = message;
    this.modalType = type;
    this.isFormModal = false;
    this.open = true;
  }

  close(): void {
    this.open = false;
  }

  addPost(): void {
    this.postsService.createPosts(this.newPost).then(() => {
      this.loadPosts();
      this.openMessageModal('Post Created', 'Your post was created successfully!', 'info');
    }).catch((error) => {
      console.error('Error adding post:', error);
      this.openMessageModal('Error', 'There was an error while adding the post.', 'error');
    });
  }

  deletePost(postId: string): void {
    this.postsService.deletePost(postId).then(() => {
      this.loadPosts();
      this.openMessageModal('Post Deleted', 'Your post was deleted successfully!', 'info');
    }).catch((error) => {
      console.error('Error deleting post:', error);
      this.openMessageModal('Error', 'There was an error while deleting the post.', 'error');
    });
  }
}
