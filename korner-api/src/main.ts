import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('korner-api');
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Korner bets API')
    .setDescription('The Korner bets API description')
    .setVersion('1.0')
    .addTag('bet')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
