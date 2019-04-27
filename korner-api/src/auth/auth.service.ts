import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users';
import { User } from '../users/entities/user.entity';
import { SignInDto } from './dto/signin.dto';
import { JwtPayload } from './jwt/jwt-payload.interface';

@Injectable()
export class AuthService {
	constructor(
		private readonly usersService: UsersService,
		private readonly jwtService: JwtService,
	) {}

	async signIn(signInDto: SignInDto): Promise<string> {
		return this.usersService.validate(signInDto.username, signInDto.password)
			.then(user => this.createToken(user.mail))
			.catch(error => { throw new UnauthorizedException(); });
	}

	private createToken(email: string): any {
		const accessToken = this.jwtService.sign({ email });
		return {
			expiresIn: 3600,
			accessToken,
		  };
	}

	async validateUser(payload: JwtPayload): Promise<User> {
		console.log(`payload: ${JSON.stringify(payload)}`);
		return await this.usersService.findOneByEmail(payload.email);
	}
}
