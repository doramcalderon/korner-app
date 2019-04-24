import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BetModule } from 'bets/bet.module';
import { MatchDayModule } from 'matchday/matchday.module';
import { RegistrationModule } from 'registration/registration.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/nest'),
    TypeOrmModule.forRoot(),
    BetModule,
    MatchDayModule,
    RegistrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
