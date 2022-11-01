import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from '@my-mountain-courses/mountain-courses-lib';

@Module({
  imports: [
    CoursesModule,
    DatabaseModule
  ],
})
export class AppModule {}
