import {Course} from '../course.entity'

export abstract class CoursesRepository {
  abstract getCourses(): Promise<Course[]>
  abstract removeAllCourses(): Promise<void>
  abstract saveCourses(courses: Course[]): Promise<Course[]>
}
