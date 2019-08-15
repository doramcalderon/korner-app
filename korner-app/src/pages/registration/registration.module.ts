import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { IonicPageModule } from 'ionic-angular';

import { RegistrationPage } from './registration';
import { RegistrationService } from './registration.service';

@NgModule({
    declarations: [RegistrationPage],
    imports: [
        IonicPageModule.forChild(RegistrationPage),
        TranslateModule.forChild(),
        NgxErrorsModule,
    ],
    providers: [RegistrationService],
})
export class RegistrationPageModule {}
