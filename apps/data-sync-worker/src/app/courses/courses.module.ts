import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesResolver } from './courses.resolver';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Course} from './course.entity'
import {CoursesRepository} from './repository/courses.repository.port'
import {RealCoursesRepository} from './repository/real.courses.repository'
import {NotionModule} from '../notion/notion.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([Course]),
    NotionModule
  ],
  providers: [
    {
      provide: CoursesService,
      useClass: CoursesService,
    },
    {
      provide: CoursesRepository,
      useClass: RealCoursesRepository,
    },
    CoursesResolver,
  ],
})
export class CoursesModule {}
