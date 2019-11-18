import { Component, OnInit } from '@angular/core';
import {User, UserserviceService} from '../userservice.service';
import {blog, BlogserviceService} from '../blogservice.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CommentService, NewComment} from '../comment.service';
import {AuthenticationserviceService} from '../authenticationservice.service';
import {FollowService} from '../follow.service';

@Component({
  selector: 'app-postcomment',
  templateUrl: './postcomment.component.html',
  styleUrls: ['./postcomment.component.scss']
})
export class PostcommentComponent implements OnInit {
  // tslint:disable-next-line:new-parens
  private comment: NewComment = new class implements NewComment {
    id: number;
    user: User;
    blog: blog;
    comment: string;
    date: Date;
  };
  constructor(private blogService: BlogserviceService, private router: Router,
              private route: ActivatedRoute, private loginService: AuthenticationserviceService,
              private registrationService: UserserviceService, private ffService: FollowService,
              private commentService: CommentService) { }

  private blogId;
  private blog;
  private searchedUsers;
  private searchedItem: string;
  private user;
  private role;
  private currentUsername;
  private followings;
  private uId;
  private viewUser;
  private viewBlogs;
  private isFollowing = false;
  private allComments;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.blogId = id;
      this.blogService.getThisBlog(this.blogId).subscribe(data => {
        this.blog = data;
        console.log(this.blog);
      });
    });

    this.registrationService.getUser().subscribe(data => {
      this.user = data;
      this.role = this.user.role;
    });
    this.commentService.getAllComments(this.blogId).subscribe(data => {
      this.allComments = data;
      console.log(this.allComments);
    });
  }
  searchUser() {
    this.registrationService.findUser(this.searchedItem).subscribe(data => {
      this.searchedUsers = data;
      console.log(this.searchedUsers);
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

  // tslint:disable-next-line:no-shadowed-variable
  postComment(commentt, blog) {
    console.log(commentt);
    // tslint:disable-next-line:triple-equals
    if (commentt != null) {
      this.comment.comment = commentt;
      this.comment.date = new Date();
      this.comment.blog = blog;
      console.log(this.comment);
      this.commentService.addComment(this.comment).subscribe(data => {
        alert('New Comment Added Successfully');
        // this.router.navigate(['viewPost', this.blogId]);
        this.ngOnInit();
      });
    }

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
  viewPost(postId) {
    this.router.navigate(['viewPost', postId]);
  }


}
