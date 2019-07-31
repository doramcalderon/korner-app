import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MailerService } from '@nest-modules/mailer';
import * as moment from 'moment';
import { from, of } from 'rxjs';
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
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly mailerService: MailerService,
  ) {}

  public async createNewRegistration(
    registrationDto: RegistrationDto,
  ): Promise<Registration> {
    return await from(
      this.registrationRepository.findOne({ mail: registrationDto.mail }),
    )
      .pipe(
        switchMap(registration => this.deleteRegistration(registration)),
        switchMap(registration => this.createRegistration(registrationDto)),
        switchMap(registration => this.sendMail(registration)),
        catchError(error => Promise.reject(error)),
      )
      .toPromise();
  }

  public async confirmAndCreateUser(code: string): Promise<any> {
    let registrationFound: Registration;

    return await from(this.registrationRepository.findOneOrFail(code)).pipe(
      tap(registration => (registrationFound = registration)),
      switchMap(registration => this.createUser(registration)),
      switchMap(() => this.deleteRegistration(registrationFound)),
      catchError(error => of(new NotFoundException('Registration not found'))),
    );
  }

  private async createRegistration(
    registrationDto: RegistrationDto,
  ): Promise<Registration> {
    const username: string = registrationDto.mail.split('@')[0];
    const expiration: Date = moment()
      .add(5, 'days')
      .toDate();
    const registration = {
      ...registrationDto,
      username,
      expiration,
    } as Registration;
    return await this.registrationRepository.save(registration);
  }

  private async sendMail(registration: Registration): Promise<any> {
    const url = `${process.env.KORNER_APP_REGISTRATION_URL}/${registration.id}`;
    return this.mailerService.sendMail({
      from: process.env.MAILER_FROM,
      to: registration.mail,
      subject: 'Korner App signing up',
      text: `Hi ${
        registration.name
      }!!.Thank you for signing up for Korner App. Click in the in the link to start to use it.`,
      html: `<h1>Hi ${registration.name}!!</h1>
	    <p> thank you for signing up for Korner App.</p>
		<p>Click <a href=${url}>here</a> to start to use it.</p>`,
    });
  }

  private hasExpired(registration: Registration): boolean {
    return moment().isAfter(registration.expiration);
  }

  private async createUser(
    registration: Registration,
  ): Promise<User | BadRequestException> {
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

  private async deleteRegistration(
    registration: Registration,
  ): Promise<Registration> {
    return !!registration
      ? await this.registrationRepository.remove(registration)
      : Promise.resolve(undefined);
  }
}
