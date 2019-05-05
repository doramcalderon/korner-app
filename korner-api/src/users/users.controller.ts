import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
	@Get('/self')
	@UseGuards(AuthGuard())
	user(@Req() request): UserDto {
		const { name, surname} = request.user;
		return { name, surname};
	}
}
