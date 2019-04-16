import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { BettingListComponent, BetComponent } from './components';
import { HomePage } from './home';
import { BettingListService } from './components/betting-list.service';
import { CoreModule } from '../../core/core.module';

@NgModule({
    imports: [
        IonicModule.forRoot(HomePage),
        CoreModule,
    ],
    declarations: [
        HomePage,
        BettingListComponent,
        BetComponent
    ],
    entryComponents: [
        HomePage,
    ],
    providers: [
        BettingListService
    ],
    exports: [
        HomePage
    ]
})
export class HomeComponentModule {

}
