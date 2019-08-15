import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/self')
  @UseGuards(AuthGuard())
  async user(@Req() request): Promise<UserDto> {
    const { name, surname, credit } = request.user as User;
    return { name, surname, credit } as UserDto;
  }
}
