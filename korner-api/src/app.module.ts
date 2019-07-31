import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nest-modules/mailer';

import { AuthModule } from 'auth/auth.module';
import { BetModule } from 'bets/bet.module';
import { MatchDayModule } from 'matchday/matchday.module';
import { RegistrationModule } from 'registration/registration.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost/nest'),
    TypeOrmModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAILER_HOST,
        port: parseInt(process.env.MAILER_PORT, 10),
        secure: process.env.MAILER_SECURE === 'true',
        auth: {
          user: process.env.MAILER_USER,
          pass: process.env.MAILER_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      defaults: {
        from: process.env.MAILER_FROM,
      },
      template: {
        dir: './src/common/email-templates',
        options: {
          engine: 'handlebars',
        },
      },
    }),
    AuthModule,
    BetModule,
    MatchDayModule,
    RegistrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
