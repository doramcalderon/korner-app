import { ApiModelProperty } from '@nestjs/swagger';

export class RegistrationDto {
	@ApiModelProperty()
	name: string;

	@ApiModelProperty()
	lastname: string;

	@ApiModelProperty()
	mail: string;

	@ApiModelProperty()
	password: string;
}
