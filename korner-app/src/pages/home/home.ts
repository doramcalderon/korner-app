import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController, ToastController } from 'ionic-angular';

import { ProfileService } from '../profile/profile.service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage implements OnInit {
    constructor(
        public navCtrl: NavController,
        private toastCtrl: ToastController,
        private profileService: ProfileService,
        private translate: TranslateService,
    ) {}

    goToProfile() {
        this.navCtrl.push('ProfilePage');
    }

    ngOnInit() {
        this.profileService
            .fetchProfile()
            .subscribe(profile =>
                this.showToastIfInsufficientCredit(profile.credit),
            );
    }

    private showToastIfInsufficientCredit(currentCredit: number) {
        if (!currentCredit) {
            this.toastCtrl
                .create({
                    duration: 3000,
                    position: 'top',
                    message: this.translate.instant('HOME.NO_CREDIT'),
                })
                .present();
        }
    }
}
