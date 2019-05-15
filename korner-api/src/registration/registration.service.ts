import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import * as moment from 'moment';
import { from, of, fromEventPattern, Observable } from 'rxjs';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { Repository } from 'typeorm';

import { User } from '../users/entities/user.entity';
import { RegistrationDto } from './dto/registration.dto';
import { Registration } from './registration.entity';


@Injectable()
export class RegistrationService {
	constructor(
		@InjectRepository(Registration)
		private readonly registrationRepository: Repository<Registration>,
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	public async createRegistration(registrationDto: RegistrationDto): Promise<Registration> {
		return await this.registrationRepository.findOne({mail: registrationDto.mail}).then(
			registration => this.createOrUpdate(registration, registrationDto),
		);
	}

	public async confirmAndCreateUser(code: string): Promise<any> {
		let registrationFound: Registration;

		return await from(this.registrationRepository.findOneOrFail(code)).pipe(
			tap(registration => registrationFound = registration),
			switchMap(registration => this.createUser(registration)),
			switchMap(() => this.deleteRegistration(registrationFound)),
			catchError(error => of(new NotFoundException('Registration not found'))),
		);
	}

	private createOrUpdate(registrationFound: Registration, registrationDto: RegistrationDto): Promise<Registration> {
		const username: string = registrationDto.mail.split('@')[0];
		const expiration: Date = moment().add(5, 'days').toDate();
		const registration = {
			...registrationDto,
			username,
			expiration,
		} as Registration;

		return (!!registrationFound)
			?  this.registrationRepository.update(
					{id: registrationFound.id},
					registration).then(
						result => registration,
					)
			: this.registrationRepository.save(registration);
	}

	private hasExpired(registration: Registration): boolean {
		return moment().isAfter(registration.expiration);
	}

	private async createUser(registration: Registration): Promise<User | BadRequestException> {
		if (this.hasExpired(registration)) {
			return of(new BadRequestException('Registration expired')).toPromise();
		}
		const { username, mail, password } = registration;
		return await this.userRepository.save({
			username,
			mail,
			password,
		});
	}

	private async deleteRegistration(registration: Registration): Promise<Registration> {
		// console.log(`registrationId: ${registrationId}`);
		return await this.registrationRepository.remove(registration);
	}

}
