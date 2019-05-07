import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistrationPage } from './registration';
import { TranslateModule } from '@ngx-translate/core';
import { NgxErrorsModule } from '@ultimate/ngxerrors';

@NgModule({
  declarations: [
    RegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrationPage),
    TranslateModule.forChild(),
    NgxErrorsModule,
  ],
})
export class RegistrationPageModule {}
