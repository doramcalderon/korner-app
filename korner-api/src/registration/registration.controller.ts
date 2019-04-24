import { Controller, Post, Body, Res, HttpCode, Get, Param, Put, HttpStatus } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { RegistrationDto } from './dto/registration.dto';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {
	constructor(private registrationService: RegistrationService) {

	}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	@ApiCreatedResponse({ description: 'The record has been successfully created.'})
	signUp(@Body() registrationDto: RegistrationDto) {
		this.registrationService.createRegistration(registrationDto);
	}

	@Put(':id/confirm')
	@HttpCode(HttpStatus.NO_CONTENT)
	@ApiCreatedResponse({})
	confirm(@Param('id') registrationCode) {
		return this.registrationService.confirmAndCreateUser(registrationCode);
	}
}
