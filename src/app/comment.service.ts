import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './userservice.service';
import {blog} from './blogservice.service';
export interface NewComment {
  id: number;
  user: User;
  blog: blog;
  comment: string;
  date: Date;
}
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient ) {}
  private url = 'http://localhost:1234';

  addComment(userComment) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post(this.url + '/addComment', userComment, {headers});
  }

  getAllComments(blogId) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/allComments/' + blogId, {headers});
  }
}
