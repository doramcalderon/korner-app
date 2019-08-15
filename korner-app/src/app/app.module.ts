import { HttpClient } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import {
    MissingTranslationHandler,
    TranslateLoader,
    TranslateModule,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { CoreModule } from '../core/core.module';
import { MyMissingTranslationHandler } from '../core/missing-translation-handler.service';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomeComponentModule } from '../pages/home/home.component.module';
import { LoginModule } from '../pages/login/login.module';
import { TabsPage } from '../pages/tabs/tabs';
import { MyApp } from './app.component';
import { ProfileService } from '../pages/profile/profile.service';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [MyApp, AboutPage, ContactPage, TabsPage],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        CoreModule,
        HomeComponentModule,
        LoginModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
            missingTranslationHandler: {
                provide: MissingTranslationHandler,
                useClass: MyMissingTranslationHandler,
            },
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [MyApp, AboutPage, ContactPage, TabsPage],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
    ],
})
export class AppModule {}
