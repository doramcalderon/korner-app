import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { ApiInterceptor } from './http/api.interceptor';
import { AuthenticationService } from './auth/authentication.service';

@NgModule({
	imports: [
		HttpClientModule,
	],
	providers: [
        AuthenticationService,
        { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
	],
	exports: [
		TranslateModule,
	]
})
export class CoreModule {

}
