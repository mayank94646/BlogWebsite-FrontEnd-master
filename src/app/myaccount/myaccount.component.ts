import { Component, OnInit } from '@angular/core';
import {User, UserserviceService} from '../userservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {

  user: User;
  private name;
  private role;
  private email;
  private password;
  private phoneNumber;
  private temp;
  private temp1;
  private temp2;
  private temp3;
  constructor(private registrationService: UserserviceService, private router: Router) { }
  ngOnInit() {
    this.registrationService.getUser().subscribe( data => {
      console.log(data);
      this.user = data;
      this.email = this.user.email;
      this.temp1 = this.user.email;
      this.name = this.user.name;
      this.temp = this.user.name;
      this.password = this.user.password;
      this.temp2 = this.user.password;
      this.phoneNumber = this.user.phoneNumber;
      this.temp3 = this.user.phoneNumber;
      this.role = this.user.role;
      console.log(this.user);
    });
  }

  editUser() {
    this.registrationService.editMyUser(this.user).subscribe(data => {
      this.user = data;
      console.log(data);
      alert('Details updated successfully.');
      this.router.navigate(['logout']);
    });
  }
}
