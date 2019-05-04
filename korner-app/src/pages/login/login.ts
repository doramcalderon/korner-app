import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
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

	private goToHome(): void {
		this.navCtrl.push(HomePage);
	}

	private setLoginInvalid() {
		this.loginForm.controls.username.setErrors({'invalid': true});
		this.loginForm.controls.password.setErrors({'invalid': true});
	}
}
