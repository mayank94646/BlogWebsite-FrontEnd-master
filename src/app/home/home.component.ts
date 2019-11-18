import { Component, OnInit } from '@angular/core';
import {User, UserserviceService} from '../userservice.service';
import {Router} from '@angular/router';
import {BlogserviceService} from '../blogservice.service';
import {FollowService} from '../follow.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;
  private searchedItem: string;
  private getUser;
  private blogs;
  private followings;

  // tslint:disable-next-line:max-line-length
  constructor(private registrationService: UserserviceService, private router: Router, private blogservice: BlogserviceService, private ff: FollowService) {
  }

  ngOnInit() {
    this.registrationService.getUser().subscribe(data => {
      console.log(data);
      this.user = data;
    });
    this.blogservice.getAllBlogs().subscribe(data => {
      console.log(data);
      this.blogs = data;
      Object.assign(this.blogs).reverse();
    });
    this.ff.getFollowings().subscribe(data => {
      console.log(data);
      this.followings = data;
    });
  }

  searchUser(searchedItem) {
    this.registrationService.findUser(this.searchedItem).subscribe(data => {
      this.getUser = data;
      console.log(this.getUser);
    });
  }
  viewProfile(user1) {
    this.router.navigate(['viewprofile', user1]);
  }
  seeFollowers() {
    this.router.navigate(['connect/followers']);
  }

  checkFollowing(id) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.followings.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (id == this.followings[i].following.userId) {
        return true;
      }
    }
    return false;
  }
  seeFollowing() {
    this.router.navigate(['connect/following']);
  }
  viewPost(postId) {
    this.router.navigate(['postcomment', postId]);
  }
}
