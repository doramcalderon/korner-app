import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AvatarModule } from 'ngx-avatar';

import { ProfilePage } from './profile';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    AvatarModule,
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule {}
