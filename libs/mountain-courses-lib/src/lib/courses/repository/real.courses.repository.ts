import {CoursesRepository} from './courses.repository.port'
import {Course} from '../course.entity'
import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'

@Injectable()
export class RealCoursesRepository extends CoursesRepository  {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>
  ) {
    super()
  }
  async getCourses(): Promise<Course[]> {
    return await this.coursesRepository.find()
  }

  async saveCourses(courses: Course[]): Promise<Course[]> {
    return await this.coursesRepository.save(courses)
  }

  async removeAllCourses(): Promise<void> {
    return await this.coursesRepository.clear()
  }
}
