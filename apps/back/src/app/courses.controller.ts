import {Controller, Get} from '@nestjs/common'
import { Course } from '@mountain-routes-history/mountain-courses-lib'
import {CoursesService} from './courses.service'

@Controller()
export class CoursesController {

  constructor(private coursesService: CoursesService) {}

  @Get()
  async getCourses(): Promise<Course[]> {
    return this.coursesService.findAll()
  }

}
