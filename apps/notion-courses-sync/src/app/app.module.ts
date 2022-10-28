import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { GraphqlModule } from './graphql/graphql.module';
import { DatabaseModule } from '@my-mountain-courses/mountain-courses-lib';

@Module({
  imports: [CoursesModule, GraphqlModule, DatabaseModule],
})
export class AppModule {}
