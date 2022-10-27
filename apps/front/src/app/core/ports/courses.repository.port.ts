import {Course} from '../entity/course'
import {Observable} from 'rxjs'

export abstract class CoursesRepository {
  abstract getCourses(): Observable<Course[]>
}
