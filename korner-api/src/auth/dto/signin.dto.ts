import { ApiModelProperty } from '@nestjs/swagger';

export class SignInDto {
	@ApiModelProperty()
	username: string;
	@ApiModelProperty()
	password: string;
}
