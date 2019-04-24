import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { Registration } from './registration.entity';
import { User } from 'users/entities/user.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([Registration]),
		TypeOrmModule.forFeature([User]),
	],
	controllers: [
		RegistrationController,
	],
	providers: [
		RegistrationService,
	],
})
export class RegistrationModule {

}
