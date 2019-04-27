import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Matchday } from './entities/matchday.entity';
import { MatchDayService } from './matchday,service';
import { MatchDayController } from './matchday.controller';

@Module({
    imports: [
        // MongooseModule.forFeature([{
        //     name: 'MatchDay',
        //     schema: MatchDaySchema,
        // }]),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        TypeOrmModule.forFeature([Matchday]),
    ],
    controllers: [
        MatchDayController,
    ],
    providers: [
        MatchDayService,
    ],
})
export class MatchDayModule {

}
