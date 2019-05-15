import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegistrationService } from './registration.service';
import { Registration } from './registration.model';

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
    private registrationSvc: RegistrationService,
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
          const registration = this.registrationForm.value as Registration;
          this.registrationSvc.signUp(registration).subscribe(
            () => console.log('registration successful')
          )
      } else {
        this.registrationForm.get('name').markAsTouched();
        this.registrationForm.get('email').markAsTouched();
        this.registrationForm.get('password').markAsTouched();
      }
  }

}
