import { ApiModelProperty } from '@nestjs/swagger';

import { IsEmail, IsNotEmpty } from 'class-validator';


export class RegistrationDto {
	@ApiModelProperty()
	@IsNotEmpty()
	name: string;

	@ApiModelProperty()
	lastname: string;

	@ApiModelProperty()
	@IsEmail()
	mail: string;

	@ApiModelProperty()
	@IsNotEmpty()
	password: string;
}
