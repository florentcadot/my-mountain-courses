import { Query, Resolver } from '@nestjs/graphql';
import { CoursesService } from './courses.service';
import {Course} from '@mountain-routes-history/mountain-courses-lib'

@Resolver((of) => Course)
export class CoursesResolver {
  constructor(private coursesService: CoursesService) {}

  @Query(() => [Course])
  async findAllCourses() {
    return this.coursesService.findAll();
  }

  @Query(() => Boolean)
  async synchronizeNotionDBWithRealDB() {
    return this.coursesService.synchronizeNotionDBWithRealDB();
  }
}
