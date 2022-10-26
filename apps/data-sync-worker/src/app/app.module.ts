import { Module } from '@nestjs/common';
import {CoursesModule} from './courses/courses.module'
import {DatabaseModule} from './database/database.module'
import {GraphqlModule} from './graphql/graphql.module'

@Module({
  imports: [
    CoursesModule,
    GraphqlModule,
    DatabaseModule
  ],
})
export class AppModule {}
