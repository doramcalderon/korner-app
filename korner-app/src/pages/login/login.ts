import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "./login.service";

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private loginService: LoginService,
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
				token => console.log(`token: ${token}`)
			);
		}

	}
}
