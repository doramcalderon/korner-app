import { Controller, Post, Body } from '@nestjs/common';

import { SignInDto } from './dto/signin.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post('token')
	signIn(@Body() signinDto: SignInDto): Promise<string> {
		return this.authService.signIn(signinDto);
	}
}
