import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';
import { Registration } from './registration.model';


describe('RegistrationService', () => {
	const REGISTRATION_ENDPOINT = '/korner-api/registration';

	let httpMock: HttpTestingController;
	let service: RegistrationService;

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
				RegistrationService,
			]
		})
	});


	beforeEach(
        inject(
            [
                HttpTestingController,
				RegistrationService,
            ],
            (
                httpMockInjected: HttpTestingController,
				serviceInjected: RegistrationService,
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

	it('should call to the registration endpoint', () => {
		const registration: Registration = {
			mail: 'mymail@etc.com',
			password: '123',
			name: 'The King',
		};
		service.signUp(registration).subscribe();
		const req = httpMock.expectOne(REGISTRATION_ENDPOINT);

		expect(req.request.method).toEqual('POST');
		req.flush({});
	});
});
