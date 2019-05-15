import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrationPage } from './registration';
import { TranslateModule } from '@ngx-translate/core';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { RegistrationService } from './registration.service';

@NgModule({
  declarations: [
    RegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrationPage),
    TranslateModule.forChild(),
    NgxErrorsModule,
  ],
  providers: [
    RegistrationService,
  ]
})
export class RegistrationPageModule {}
