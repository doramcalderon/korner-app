import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage implements OnInit {

  registrationForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
			name: ['', Validators.required],
			lastName: [''],
			mail: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
		});
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

  onSubmit() {
      if (this.registrationForm.valid) {
          console.log('call to registration api');
      } else {
        this.registrationForm.get('name').markAsTouched();
        this.registrationForm.get('email').markAsTouched();
        this.registrationForm.get('password').markAsTouched();
      }
  }

}
