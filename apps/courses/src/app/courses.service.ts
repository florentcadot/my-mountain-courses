import { Injectable } from '@nestjs/common';
import {
  Course,
  CoursesRepository,
} from '@my-mountain-courses/mountain-courses-lib';

@Injectable()
export class CoursesService {
  constructor(private coursesRepository: CoursesRepository) {}

  async findAll(): Promise<Course[]> {
    try {
      return await this.coursesRepository.getCourses();
    } catch (e) {
      throw new Error('DB error');
    }
  }
}
