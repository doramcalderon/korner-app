import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthenticationService } from '../../core';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class LoginService {
	private readonly createTokenUrl = '/korner-api/auth/token';

	constructor(
		private http: HttpClient,
		private auth: AuthenticationService,
	) {}

	public login(username, password): Observable<string> {
		const body = {
			username,
			password,
		};
		return this.http.post<string>(this.createTokenUrl, body).pipe(
			switchMap(token => this.auth.persist(token))
		);
	}

}
