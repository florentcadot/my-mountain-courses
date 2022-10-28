import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {Transport} from '@nestjs/microservices'

async function bootstrap() {
  const {
    NOTION_COURSES_SYNC_HOST,
    NOTION_COURSES_SYNC_PORT

  } = process.env

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: NOTION_COURSES_SYNC_HOST,
      port: NOTION_COURSES_SYNC_PORT

    }
  });

  await app.listen();
  Logger.log(
    `🚀 Microservice courses is running on: http://${NOTION_COURSES_SYNC_HOST}:${NOTION_COURSES_SYNC_PORT
    }`
  );
}

bootstrap();
