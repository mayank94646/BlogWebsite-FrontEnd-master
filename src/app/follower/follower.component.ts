import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FollowService} from '../follow.service';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent implements OnInit {
  constructor(private ffService: FollowService, private router: Router) { }

  private followers;
  ngOnInit() {
    this.ffService.getFollowers().subscribe(data => {
      console.log(data);
      this.followers = data;
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
