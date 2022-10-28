import { Module } from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices'
import {AppService} from './app.service'
import {AppController} from './app.controller'
import {AuthModule} from './auth/auth.module'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "COURSES_SERVICE",
        transport: Transport.TCP,
        options: {
          host: process.env.COURSES_HOST,
          port: parseInt(process.env.COURSES_PORT)
        }
      },
      {
        name: "NOTION_COURSES_SYNC_SERVICE",
        transport: Transport.TCP,
        options: {
          host: process.env.NOTION_COURSES_SYNC_HOST,
          port: parseInt(process.env.NOTION_COURSES_SYNC_PORT)
        }
      }
    ]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
