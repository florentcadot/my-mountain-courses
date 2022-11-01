import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Course} from '../courses/course.entity'
import {User} from '../users/user.entity'
import {ConfigModule, ConfigService} from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USER'),
          password: configService.get<string>('DB_PASSWORD'),
          database: configService.get<string>('DB_NAME'),
          synchronize: true,
          entities: [Course, User],
        }},
      inject: [ConfigService]
    })
  ],
})
export class DatabaseModule {}
