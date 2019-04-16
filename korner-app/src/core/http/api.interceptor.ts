import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ENV } from '@app/env';

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

	readonly apis = {
		'korner-api': ENV.apiServer
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let reqToSend: HttpRequest<any> = request;

		const url = (request.url.startsWith('/')) ? request.url.replace('/', '') : request.url;
		const apiContext = url.split('/')[0];
		const apiUrl = this.apis[apiContext];

		reqToSend = request.clone({
			url: (apiUrl || '') + '/' + url
		});

		return next.handle(reqToSend);
	}
}
