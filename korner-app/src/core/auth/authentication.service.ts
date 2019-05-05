import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
	readonly TOKEN_KEY: string = 'token_api';

	constructor(private storage: Storage) {}

	persist(token: string): Promise<any> {
		return this.storage.set(this.TOKEN_KEY, token);
	}

	getToken(): Observable<string> {
		return Observable.from(this.storage.get(this.TOKEN_KEY));
	}

	removeToken(): Observable<string> {
		return Observable.from(this.storage.remove(this.TOKEN_KEY));
	}
}
