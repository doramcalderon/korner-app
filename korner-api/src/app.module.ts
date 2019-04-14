import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BetModule } from 'bets/bet.module';
import { MatchDayModule } from 'matchday/matchday.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/nest'),
    TypeOrmModule.forRoot(),
    BetModule,
    MatchDayModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
