import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Profile } from './profile.model';

@Injectable()
export class ProfileService {
	readonly USERS_ENDPOINT = '/korner-api/users/self';

	constructor(private http: HttpClient) {}

	public fetchProfile(): Observable<Profile> {
		return this.http.get<Profile>(this.USERS_ENDPOINT);
	}
}
