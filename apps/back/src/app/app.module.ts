import { Module } from '@nestjs/common';
import {
  CoursesModule,
  DatabaseModule,
} from '@mountain-routes-history/mountain-courses-lib'
import {CoursesController} from './courses.controller'
import {CoursesService} from './courses.service'

@Module({
  imports: [CoursesModule, DatabaseModule],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class AppModule {}
