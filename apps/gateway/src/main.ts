import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import {ConfigService} from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)

  const SCHEME = configService.get<string>('GATEWAY_SCHEME')
  const HOST = configService.get<string>('GATEWAY_HOST')
  const PORT = configService.get<string>('GATEWAY_PORT')

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  await app.listen(PORT);
  Logger.log(
    `🚀 Application is running on: ${SCHEME}://${HOST}:${PORT}/${globalPrefix}`
  );
}

bootstrap();
