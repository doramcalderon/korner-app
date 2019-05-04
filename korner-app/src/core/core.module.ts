import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { ApiInterceptor } from './http/api.interceptor';
import { MyMissingTranslationHandler } from './missing-translation-handler.service';
import { AuthenticationService } from './auth/authentication.service';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	imports: [
		HttpClientModule,
		TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            missingTranslationHandler: {
                provide: MissingTranslationHandler,
                useClass: MyMissingTranslationHandler,
            }
        }),
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
