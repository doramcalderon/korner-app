import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';

describe('ProfileService', () => {
	const USERS_ENDPOINT = '/korner-api/users/self';
	let httpMock: HttpTestingController;
	let service: ProfileService;

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
				ProfileService,
			]
		})
	});


	beforeEach(
        inject(
            [
                HttpTestingController,
				ProfileService,
            ],
            (
                httpMockInjected: HttpTestingController,
				serviceInjected: ProfileService,
            ) => {
                httpMock = httpMockInjected;
				service = serviceInjected;
            }
        )
	);

	afterEach(() => {
        httpMock.verify();
	});


    it('should create the service', () => {
        expect(service).toBeTruthy();
    });

	it('should call to the users endpoint', () => {
		service.fetchProfile().subscribe();
		const req = httpMock.expectOne(USERS_ENDPOINT);

		expect(req.request.method).toEqual('GET');
		req.flush({});
	});
});
