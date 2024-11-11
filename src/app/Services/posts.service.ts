import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
 
import { posts } from '../models/posts.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private collectionName = 'posts';

  constructor( private firestore: AngularFirestore) { }

  getPosts(): Observable<posts[]> {
    return this.firestore.collection<posts>(this.collectionName).valueChanges({ idField: 'id' });
  }

  getPostById(id: string){
    return this.firestore.collection<posts>('posts').doc(id).valueChanges();
  }

  createPosts(post: posts){
    return new Promise((resolve, reject) => {
      this.firestore.collection('posts').add(post)
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
        resolve(docRef.id);
      })
      .catch(error => {
        console.error('Error adding document: ', error);
        reject(error);
      });
    })
  }

  updatePosts(id: string, post: posts){
    return this.firestore.collection('posts').doc(id).update({
      tittle: post.tittle,
      content: post.content,
      author: post.author
    });
  }

  deletePost(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }

}
