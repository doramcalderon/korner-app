import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
	controllers: [ UsersController ],
	imports: [
		TypeOrmModule.forFeature([ User ]),
		PassportModule.register({ defaultStrategy: 'jwt' }),
	],
	providers: [ UsersService ],
	exports: [ UsersService ],
})
export class UsersModule {

}
