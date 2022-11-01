import { Module } from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices'
import {AppService} from './app.service'
import {AppController} from './app.controller'
import {AuthModule} from './auth/auth.module'
import {ConfigModule, ConfigService} from '@nestjs/config'

@Module({
  imports: [
    ClientsModule.registerAsync([{
      name: "COURSES_SERVICE",
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
            transport: Transport.TCP,
            options: {
              host: configService.get<string>('COURSES_HOST'),
              port: parseInt(configService.get<string>('COURSES_PORT'))
            }
          }
    },
      inject: [ConfigService]
    },
      {
        name: "NOTION_COURSES_SYNC_SERVICE",
        useFactory: async (configService: ConfigService) => {
          return {
          transport: Transport.TCP,
          options: {
            host: configService.get<string>('NOTION_COURSES_SYNC_HOST'),
            port: parseInt(configService.get<string>('NOTION_COURSES_SYNC_PORT')),
          },
        }},
        inject: [ConfigService]
      }
    ]),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
