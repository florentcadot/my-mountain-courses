import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Course} from './course.entity'
import {CoursesRepository} from './repository/courses.repository.port'
import {RealCoursesRepository} from './repository/real.courses.repository'

@Module({
  imports: [
    TypeOrmModule.forFeature([Course]),
  ],
  providers: [
    {
      provide: CoursesRepository,
      useClass: RealCoursesRepository,
    },
  ],
  exports: [
    {
      provide: CoursesRepository,
      useClass: RealCoursesRepository,
    },
  ],
})
export class CoursesModule {}
