import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  constructor(private http: HttpClient ) {}
  private url = 'http://localhost:1234';

  checkIfCurrentUserIsFollower(userId) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/IsFollowing/' + userId, {headers});
  }

  followThisUser(userId) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/followUser/' + userId, {headers});
  }

  unfollowThisUser(userId) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/uncollated/' + userId, {headers});
  }

  getFollowers() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/getFollowers', {headers});
  }

  getFollowings() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/getFollowings', {headers});
  }

}
