import { Query, Resolver } from '@nestjs/graphql';
import { Course } from './course.entity';
import { CoursesService } from './courses.service';

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
