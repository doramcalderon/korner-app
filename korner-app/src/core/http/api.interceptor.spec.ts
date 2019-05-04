import { HttpClient, HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { ENV } from '@app/env';
import { AuthenticationService } from '../auth/authentication.service';
import { ApiInterceptor } from './api.interceptor';

describe('ApiInterceptor', () => {

	let httpMock: HttpTestingController;
    let http: HttpClient;

    const authServiceStub = {
        getToken: () => Observable.of({
            accessToken: 'token'
        })
    };

	beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [
                NO_ERRORS_SCHEMA
            ],
            imports: [
                HttpClientTestingModule,
                HttpClientModule,
            ],
            providers: [
				{
                    provide: HTTP_INTERCEPTORS,
                    useClass: ApiInterceptor,
                    multi: true,
                },
                { provide: AuthenticationService, useValue: authServiceStub },
            ],
        });
	});

	beforeEach(
        inject(
            [
                HttpTestingController,
                HttpClient,
            ],
            (
                httpMockInjected: HttpTestingController,
                httpInjected: HttpClient,
            ) => {
                httpMock = httpMockInjected;
                http = httpInjected;
            }
        )
	);

	afterEach(() => {
        httpMock.verify();
    });


	it('The korner-api server is added when a request with url started by `/korner-api` is performed', () => {
		http['get']('/korner-api/foo').subscribe();
		httpMock.expectOne(`${ENV.apiServer}/korner-api/foo`);
	});

	it('The korner-api server is added when a request with url started by `korner-api/` is performed', () => {
		http['get']('korner-api/foo').subscribe();
		httpMock.expectOne(`${ENV.apiServer}/korner-api/foo`);
    });

    it('The authorization header is added if the endpoint is not public', () => {
        http['get']('/korner-api/foo').subscribe();

        const req = httpMock.expectOne(`${ENV.apiServer}/korner-api/foo`);
        expect(req.request.headers.get('Authorization')).toEqual('Bearer token');
    })
});
