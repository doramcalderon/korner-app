import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AvatarModule } from 'ngx-avatar';

import { ProfilePage } from './profile';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    TranslateModule.forChild(),
    AvatarModule,
  ],
})
export class ProfilePageModule {}
