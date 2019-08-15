import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AvatarModule } from 'ngx-avatar';

import { BettingListComponent, BetComponent } from './components';
import { HomePage } from './home';
import { BettingListService } from './components/betting-list.service';
import { CoreModule } from '../../core/core.module';
import { ProfileService } from '../profile/profile.service';

@NgModule({
    imports: [IonicModule.forRoot(HomePage), CoreModule, AvatarModule],
    declarations: [HomePage, BettingListComponent, BetComponent],
    entryComponents: [HomePage],
    providers: [BettingListService, ProfileService],
    exports: [HomePage],
})
export class HomeComponentModule {}
