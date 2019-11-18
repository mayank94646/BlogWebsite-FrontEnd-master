import { Component, OnInit } from '@angular/core';
import {User, UserserviceService} from '../userservice.service';
import {Router} from '@angular/router';
import {blog, BlogserviceService} from '../blogservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  viewUser: User;
  private blog;
  private searchedItem: string;
  private getUser;
  private name;
  private role;
  private email;
  private password;
  private phoneNumber;
  private temp;
  private temp1;
  private temp2;
  private temp3;
  constructor(private registrationService: UserserviceService, private router: Router, private blogservice: BlogserviceService) {
  }

  ngOnInit() {
    this.registrationService.getUser().subscribe(data => {
      console.log(data);
      this.viewUser = data;
      this.email = this.viewUser.email;
      this.temp1 = this.viewUser.email;
      this.name = this.viewUser.name;
      this.temp = this.viewUser.name;
      this.password = this.viewUser.password;
      this.temp2 = this.viewUser.password;
      this.phoneNumber = this.viewUser.phoneNumber;
      this.temp3 = this.viewUser.phoneNumber;
      this.role = this.viewUser.role;
    });
    this.blogservice.getMyBlogs().subscribe(data => {
      this.blog = data;
      console.log(this.blog);
      Object.assign(this.blog).reverse();
    });
  }

  // tslint:disable-next-line:no-shadowed-variable
  editBlog(blog) {
    this.router.navigate(['editblog', blog.blogId]);
  }

  searchUser(searchedItem) {
    this.registrationService.findUser(this.searchedItem).subscribe(data => {
      this.getUser = data;
    });
  }
  makePrivate(id) {
    this.blogservice.makePrivate(id).subscribe(data => {
    });
    this.ngOnInit();
  }
  makePublic(id) {
    this.blogservice.makePublic(id).subscribe(data => {
    });
    this.ngOnInit();
  }
  viewPost(postId) {
    this.router.navigate(['postcomment', postId]);
  }
}
