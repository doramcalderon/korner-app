import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	formGroup: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.formGroup = this.formBuilder.group({
			username: [''],
			password: [''],
		});
	}

	onSubmit() {}
}
