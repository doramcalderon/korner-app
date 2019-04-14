import { Module } from '@nestjs/common';
import { MatchDayController } from './matchday.controller';
import { MatchDayService } from './matchday,service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Matchday } from './entities/matchday.entity';

@Module({
    imports: [
        // MongooseModule.forFeature([{
        //     name: 'MatchDay',
        //     schema: MatchDaySchema,
        // }]),
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