import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogserviceService} from '../blogservice.service';

@Component({
  selector: 'app-allblog',
  templateUrl: './allblog.component.html',
  styleUrls: ['./allblog.component.scss']
})
export class AllblogComponent implements OnInit {

  private blogs;

  constructor(private http: BlogserviceService) {
  }

  ngOnInit() {
    this.http.getAllBlogs().subscribe(data => {
      this.blogs = data;
      console.log(this.blogs);
    });
  }
  deleteBlog(id) {this.http.deleteBlog(id).subscribe(data => {
    console.log('deleted');
    });
                  alert('blog deleted');
  }
}
