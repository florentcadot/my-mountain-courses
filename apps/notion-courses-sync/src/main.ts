import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {Transport} from '@nestjs/microservices'
import {ConfigService} from '@nestjs/config'

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)

  const SCHEME = configService.get<string>('NOTION_COURSES_SYNC_SCHEME')
  const HOST = configService.get<string>('NOTION_COURSES_SYNC_HOST')
  const PORT = configService.get<string>('NOTION_COURSES_SYNC_PORT')

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: HOST,
    }
  })

  await app.listen(PORT);

  Logger.log(
    `🚀 Microservice courses is running on: ${SCHEME}://${HOST}:${PORT}`
  );
}

bootstrap();
