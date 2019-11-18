import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// tslint:disable-next-line:class-name
export interface blog {
  blogId: number;
  author: string;
  date: Date;
  title: string;
  content: string;
  Private: string;
}
@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:1234';

  // tslint:disable-next-line:no-shadowed-variable
  addBlogs(blog) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post(this.url + '/addBlog', blog, {headers});
  }

  getAllBlogs() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/allBlogs', {headers});
  }

  getMyBlogs() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/myBlogs', {headers});
  }

  deleteBlog(id) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/deleteBlog/' + id, {headers});
  }

  // tslint:disable-next-line:no-shadowed-variable
  editBlog(blog) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post(this.url + '/editBlog', blog, {headers});
  }

  getThisBlog(id) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/getBlog/' + id, {headers});
  }
  getSearchedResult(searchedItem) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/search/' + searchedItem, {headers});
  }
  viewPost(id) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/viewBlogs/' + id, {headers});
  }
  makePrivate(id) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/makePrivate/' + id, {headers});
  }
  makePublic(id) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/makePublic/' + id, {headers});
  }
}
