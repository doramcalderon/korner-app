import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ENV } from '@app/env';
import { ApiInterceptor } from './api.interceptor';

describe('ApiInterceptor', () => {

	let httpMock: HttpTestingController;
	let http: HttpClient;

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
});
