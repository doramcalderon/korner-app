import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Profile } from './profile.model';
import { ProfileService } from './profile.service';
import { LoginService } from '../login/login.service';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  profile: Profile;
  fullName: string;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public profileService: ProfileService,
      public loginService: LoginService,
  ) {}

  ngOnInit() {
    this.profileService.fetchProfile().subscribe(
        profile => this.handleProfile(profile),
        error => this.handleError(error),
    )
  }

  logout() {
    this.loginService.logout().subscribe(
        () => this.navCtrl.push(LoginPage)
    );

  }

  private handleProfile(profile: Profile) {
    this.profile = profile;

    if(profile) {
      this.fullName = `${profile.name} ${profile.surname}`;
    }
  }

  private handleError(error: any) {
      console.error(`Error ${JSON.stringify(error)}`);
  }
}
