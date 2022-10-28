import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { NotionModule } from '../notion/notion.module';
import { CoursesModule as MountainCoursesModule } from '@my-mountain-courses/mountain-courses-lib';
import {CoursesController} from './courses.controller'

@Module({
  imports: [MountainCoursesModule, NotionModule],
  providers: [
    {
      provide: CoursesService,
      useClass: CoursesService,
    },
  ],
  controllers: [CoursesController]
})
export class CoursesModule {}
