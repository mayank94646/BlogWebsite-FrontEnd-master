import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';
import {FormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { AddblogComponent } from './addblog/addblog.component';
import { EditblogComponent } from './editblog/editblog.component';
import { AllblogComponent } from './allblog/allblog.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { ConnectComponent } from './connect/connect.component';
import { FollowerComponent } from './follower/follower.component';
import { FollowingComponent } from './following/following.component';
import { PostcommentComponent } from './postcomment/postcomment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MyaccountComponent,
    NavbarComponent,
    TestComponent,
    LogoutComponent,
    ProfileComponent,
    AddblogComponent,
    EditblogComponent,
    AllblogComponent,
    ViewprofileComponent,
    ConnectComponent,
    FollowerComponent,
    FollowingComponent,
    PostcommentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
