import { Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MyaccountComponent} from './myaccount/myaccount.component';
import {TestComponent} from './test/test.component';
import {LogoutComponent} from './logout/logout.component';
import {ProfileComponent} from './profile/profile.component';
import {AddblogComponent} from './addblog/addblog.component';
import {EditblogComponent} from './editblog/editblog.component';
import {AllblogComponent} from './allblog/allblog.component';
import {ViewprofileComponent} from './viewprofile/viewprofile.component';
import {ConnectComponent} from './connect/connect.component';
import {FollowerComponent} from './follower/follower.component';
import {FollowingComponent} from './following/following.component';
import {PostcommentComponent} from './postcomment/postcomment.component';

export const MAIN_ROUTES: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  {path : 'myaccount', component: MyaccountComponent},
  {path : 'test', component: TestComponent},
  {path : 'logout', component: LogoutComponent},
  {path : 'profile', component: ProfileComponent},
  {path : 'addblog', component: AddblogComponent},
  {path : 'allblog', component: AllblogComponent},
  {path : 'postcomment/:id', component: PostcommentComponent},
  {path : 'viewprofile/:userId', component: ViewprofileComponent},
  {path : 'editblog/:id', component: EditblogComponent},
  {path : 'connect', component: ConnectComponent},
  { path : 'connect',
    component: ConnectComponent,
    children: [
      { path: 'followers', component: FollowerComponent},
      { path: 'following', component: FollowingComponent}
    ],
   },
  {path: '**', redirectTo: 'home'}
];
