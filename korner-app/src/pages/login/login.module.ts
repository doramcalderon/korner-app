import { NgModule } from '@angular/core';
import { LoginPage } from './login';
import { CoreModule } from '../../core/core.module';
import { IonicModule } from 'ionic-angular';


@NgModule({
	imports: [
		IonicModule.forRoot(LoginPage),
		CoreModule,
	],
	declarations: [
		LoginPage,
	],
	entryComponents: [
		LoginPage,
	]
})
export class LoginModule {

}
