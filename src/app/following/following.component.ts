import { Component, OnInit } from '@angular/core';
import {FollowService} from '../follow.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  constructor(private ffService: FollowService, private router: Router) { }

  private followings;
  ngOnInit() {
    this.ffService.getFollowings().subscribe(data => {
      console.log(data);
      this.followings = data;
    });
  }

  viewProfile(id) {
    this.router.navigate(['viewprofile', id]);
  }
  seeFollowers() {
    this.router.navigate(['connect/followers']);
  }

  seeFollowing() {
    this.router.navigate(['connect/following']);
  }
}
