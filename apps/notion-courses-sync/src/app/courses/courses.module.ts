import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesResolver } from './courses.resolver';
import { NotionModule } from '../notion/notion.module';
import { CoursesModule as MountainCoursesModule } from '@my-mountain-courses/mountain-courses-lib';

@Module({
  imports: [MountainCoursesModule, NotionModule],
  providers: [
    {
      provide: CoursesService,
      useClass: CoursesService,
    },
    CoursesResolver,
  ],
})
export class CoursesModule {}
