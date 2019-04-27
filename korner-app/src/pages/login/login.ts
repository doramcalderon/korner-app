import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	onSubmit() {}
}
