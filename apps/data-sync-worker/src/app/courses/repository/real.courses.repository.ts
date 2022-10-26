import {CoursesRepository} from './courses.repository.port'
import {Course} from '../course.entity'
import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'

@Injectable()
export class RealCoursesRepository extends CoursesRepository  {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,) {
    super()
  }
  getCourses(): Promise<Course[]> {
    return this.coursesRepository.find()
  }

  saveCourses(courses: Course[]): Promise<Course[]> {
    return this.coursesRepository.save(courses)
  }

  removeAllCourses(): Promise<void> {
    return this.coursesRepository.clear()
  }
}
