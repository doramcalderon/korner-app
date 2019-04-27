import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	public async validate(username: string, password: string): Promise<User> {
		return await this.userRepository.findOne({ username, password });
	}

	public async findOneByEmail(mail: string): Promise<User> {
		return await this.userRepository.findOne({ mail });
	}
}
