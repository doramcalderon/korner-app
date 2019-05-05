import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule } from 'ngx-avatar';

import { CoreModule } from '../../core/core.module';
import { ProfilePage } from './profile';
import { ProfileService } from './profile.service';
import { LoginService } from '../login/login.service';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    TranslateModule.forChild(),
    AvatarModule,
    CoreModule,
  ],
  providers: [
    LoginService,
    ProfileService,
  ]
})
export class ProfilePageModule {}
