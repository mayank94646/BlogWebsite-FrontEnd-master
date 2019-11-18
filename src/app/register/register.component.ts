import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User, UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router , private http: UserserviceService) { }
  // tslint:disable-next-line:new-parens
  private user: User = new class implements User {
    // tslint:disable-next-line:variable-name
    user_id;
    name;
    // tslint:disable-next-line:variable-name
    userName;
    password;
    email;
    // tslint:disable-next-line:variable-name
    phoneNumber;
    status;
    role;
  };
  ngOnInit() {
  }
  /*submitData() {
    const json = {
      name = this.user.name
    }
  }*/
  addUsers(user) {
    this.http.addUsers(user).subscribe(data => {
      alert('User Created Successfully');
      this.router.navigate(['login']);
    });
  }
}
