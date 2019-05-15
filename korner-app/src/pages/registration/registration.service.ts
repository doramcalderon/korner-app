import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Registration } from './registration.model';

@Injectable()
export class RegistrationService {

	readonly CREATE_REGISTRATION_URL: string = '/korner-api/registration';
	constructor(private http: HttpClient) {}

	signUp(registration: Registration): Observable<any> {
		return this.http.post<any>(this.CREATE_REGISTRATION_URL, registration);
	}
}
