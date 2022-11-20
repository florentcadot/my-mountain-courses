import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {Transport} from '@nestjs/microservices'
import {ConfigService} from '@nestjs/config'

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)

  const SCHEME = configService.get<string>('COURSES_SCHEME')
  const HOST = configService.get<string>('COURSES_HOST')
  const PORT = configService.get<string>('COURSES_PORT')

  await app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: HOST,
      port: PORT
    }
  });

  await app.startAllMicroservices();

  Logger.log(
    `🚀 Microservice courses is running on: ${SCHEME}://${HOST}:${PORT}`
  );
}

bootstrap();
