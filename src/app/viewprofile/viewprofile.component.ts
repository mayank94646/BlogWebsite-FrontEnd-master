import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BlogserviceService} from '../blogservice.service';
import {UserserviceService} from '../userservice.service';
import {FollowService} from '../follow.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {
  private userId;
  private viewUser;
  private viewBlogs;
  private isFollowing;
  constructor(private route: ActivatedRoute, private registrationService: UserserviceService,
              private router: Router, private blogService: BlogserviceService, private ffService: FollowService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('userId'));
      this.userId = id;
      this.registrationService.viewUser(this.userId).subscribe(data => this.viewUser = data);
      this.blogService.viewPost(this.userId).subscribe(data => {this.viewBlogs = data;
                                                                Object.assign(this.viewBlogs).reverse(); });
      this.ffService.checkIfCurrentUserIsFollower(this.userId).subscribe(data => {
      // tslint:disable-next-line:triple-equals
        this.isFollowing = data;
    });
    });
  }

  followUser(id) {
    this.ffService.followThisUser(id).subscribe(data => {
      this.isFollowing = false;
      console.log(this.isFollowing);
      this.ngOnInit();
    });
  }

  unfollowuser(id) {
    this.ffService.unfollowThisUser(id).subscribe(data => {
      this.isFollowing = true;
      alert(this.isFollowing);
      this.ngOnInit();
    });
  }
  viewPost(postId) {
    this.router.navigate(['postcomment', postId]);
  }
}
