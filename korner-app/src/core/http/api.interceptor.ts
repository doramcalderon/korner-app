import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { get, set } from 'lodash';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

import { ENV } from '@app/env';
import { AuthenticationService } from '../auth/authentication.service';
import { ApiModel } from './api.model';

/**
 * Intercept all HTTP calls and appends the API location to the beginning.
 * F.i. if the request URL is /korner-api/matchs, the interceptor will add the
 * location of the korner-api to the beginning: http://localhost:3000/korner-api/matchs.
 *
 * The API locations should be configured in the environment files.
 */
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
	readonly apiServer = ENV.apiServer;

	private readonly publicApis: string [] = [
		'/korner-api/auth/token',
		'/assets/i18n/en.json',
		'/assets/i18n/es.json'
	];

	private apis: {[name: string]: ApiModel}= {
		'korner-api': {
			server: ENV.apiServer,
		}
	}

	constructor(private auth: AuthenticationService) {
	}


	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let reqToSend: HttpRequest<any> = request;

		const url = (request.url.startsWith('/')) ? request.url.replace('/', '') : request.url;
		const apiContext = url.split('/')[0];
		const api = this.apis[apiContext];

		reqToSend = request.clone({
			url: `${get(api, 'server', '')}/${url}`
		});

		if (!this.isPublicApi(request.url)) {
			return this.getToken(apiContext).pipe(
				switchMap(token => {
					const requestWithHeaders = this.addToken(token['accessToken'], reqToSend);
					return next.handle(requestWithHeaders);
				})
			)
		}

		return next.handle(reqToSend);
	}

	private isPublicApi(url: string): boolean {
		return !!this.publicApis.find(api => api === url);
	}

	private getToken(apiName: string): Observable<string> {
		const apiToken = get(this.apis[apiName], 'token');
		return (!!apiToken) ? Observable.of(apiToken) : this.auth.getToken();
	}

	private addToken(token: string, request: HttpRequest<any>): HttpRequest<any> {

		if (!!token) {
			set(this.apis[token], 'token', token);
			return request.clone({
				headers: new HttpHeaders({
					'Authorization': `Bearer ${token}`
				})
			});
		}

		return request;
	}

}
