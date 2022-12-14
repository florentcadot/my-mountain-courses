import { Controller } from '@nestjs/common';
import { Course } from '@my-mountain-courses/mountain-courses-lib';
import { CoursesService } from './courses.service';
import {MessagePattern} from '@nestjs/microservices'

@Controller()
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @MessagePattern({ cmd: "getCourses" })
  async getCourses(): Promise<Course[]> {
    return this.coursesService.findAll();
  }
}
