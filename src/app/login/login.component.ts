import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationserviceService} from '../authenticationservice.service';
import {UserserviceService} from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginservice: AuthenticationserviceService, private use: UserserviceService) { }
  username = '';
  password = '';
  invalidLogin = false;

  ngOnInit() {
  }


  checkLogin() {
    this.loginservice.authenticate(this.username, this.password).subscribe(data => {
      this.router.navigate(['home']);
      this.invalidLogin = false;
    });
    this.invalidLogin = true;
  }
}
