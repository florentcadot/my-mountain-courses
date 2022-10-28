import { Injectable } from '@nestjs/common';
import { NotionService } from '../notion/notion.service';
import {
  Course,
  CoursesRepository,
} from '@my-mountain-courses/mountain-courses-lib';

@Injectable()
export class CoursesService {
  constructor(
    private coursesRepository: CoursesRepository,
    private notionService: NotionService
  ) {}
  async findAll(): Promise<Course[]> {
    try {
      return this.coursesRepository.getCourses();
    } catch (e) {
      throw new Error('DB error');
    }
  }

  async synchronizeNotionDBWithRealDB(): Promise<boolean> {
    try {
      const notionsCourses = await this.notionService.getCourses();
      await this.coursesRepository.removeAllCourses();
      await this.coursesRepository.saveCourses(notionsCourses);
      return true;
    } catch (e) {
      throw new Error('Cannot upload notion courses to DB');
    }
  }
}
