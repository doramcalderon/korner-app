import { NgModule } from '@angular/core';
import { LoginPage } from './login';
import { CoreModule } from '../../core/core.module';
import { IonicModule } from 'ionic-angular';
import { LoginService } from './login.service';


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
	],
	providers: [
		LoginService,
	]
})
export class LoginModule {

}
