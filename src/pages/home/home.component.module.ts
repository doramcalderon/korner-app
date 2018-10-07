import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HomePage } from './home';

@NgModule({
    imports: [
        IonicModule.forRoot(HomePage)
    ],
    declarations: [
        HomePage,
    ],
    entryComponents: [
        HomePage,        
    ],
    exports: [
        HomePage
    ]
})
export class HomeComponentModule {

}