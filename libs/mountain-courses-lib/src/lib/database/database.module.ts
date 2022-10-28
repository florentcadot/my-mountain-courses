import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Course} from '../courses/course.entity'
import {User} from '../users/user.entity'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const {
          POSTGRES_HOST,
          POSTGRES_PORT,
          POSTGRES_USERNAME,
          POSTGRES_PASSWORD,
          POSTGRES_DATABASE
        } = process.env
        return {
          type: 'postgres',
          host: POSTGRES_HOST,
          port: parseInt(POSTGRES_PORT),
          username: POSTGRES_USERNAME,
          password: POSTGRES_PASSWORD,
          database: POSTGRES_DATABASE,
          synchronize: true,
          entities: [Course, User],
        }},
    })
  ],
})
export class DatabaseModule {}
