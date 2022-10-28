import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const port = process.env.GATEWAY_PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://${process.env.GATEWAY_HOST}:${port}/${globalPrefix}`
  );
}

bootstrap();
