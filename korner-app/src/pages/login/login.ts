import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { LoginService } from './login.service';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private loginService: LoginService,
		private navCtrl: NavController,
	) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	onSubmit() {
		const { username, password } = this.loginForm.value;

		if (this.loginForm.valid) {
			this.loginService.login(username, password).subscribe(
				token => this.goToHome(),
				error => this.setLoginInvalid()
			);
		}

	}

	goToRegistration() {
		this.navCtrl.push('RegistrationPage');
	}

	private goToHome(): void {
		this.navCtrl.push(TabsPage);
	}

	private setLoginInvalid() {
		this.loginForm.controls.username.setErrors({'invalid': true});
		this.loginForm.controls.password.setErrors({'invalid': true});
	}
}
