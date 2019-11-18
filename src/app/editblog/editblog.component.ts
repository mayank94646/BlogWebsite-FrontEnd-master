import { Component, OnInit } from '@angular/core';
import {AuthenticationserviceService} from '../authenticationservice.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BlogserviceService} from '../blogservice.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.scss']
})
export class EditblogComponent implements OnInit {
  private blogId;
  private blog;
  constructor(private route: ActivatedRoute, private router: Router, private blogservice: BlogserviceService,
              private loginService: AuthenticationserviceService) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.blogId = id;
      this.blogservice.getThisBlog(id).subscribe(data => {
        this.blog = data;
        console.log(this.blog);
      });
    });
  }
  editBlog() {
    console.log(this.blog);
    this.blogservice.editBlog(this.blog).subscribe(data => {
      this.blog = data;
      alert('Blog updated successfully.');
      this.router.navigate(['profile']);
    });
  }

  deleteBlog() {
    this.blogservice.deleteBlog(this.blog.blogId).subscribe(data =>{
      alert('blog deleted');
      this.router.navigate(['profile']);
    });
  }
}
