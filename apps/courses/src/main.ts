import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {Transport} from '@nestjs/microservices'

async function bootstrap() {
  const {
    COURSES_HOST,
    COURSES_PORT
  } = process.env

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: COURSES_HOST,
      port: COURSES_PORT
    }
  });
  await app.listen();
  Logger.log(
    `🚀 Microservice courses is running on: http://${COURSES_HOST}:${COURSES_PORT}`
  );
}

bootstrap();
