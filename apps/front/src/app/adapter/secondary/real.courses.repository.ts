import {Injectable, InjectionToken} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map, of} from 'rxjs'
import {BASE_URL} from '../../../../env'
import {CoursesRepository} from '../../core/ports/courses.repository.port'
import {GetCoursesDto} from './dto/get-courses.dto'
import {toDomain} from './mapper/get-courses.mapper'

@Injectable({
  providedIn: 'root'
})
export class RealCoursesRepository implements CoursesRepository{
  constructor(private http: HttpClient) {}
  getCourses() {
    // return this.http.get(`${BASE_URL}/api/courses`)
    //   .pipe(
    //   map((courses) => (courses as GetCoursesDto[]).map(toDomain))
    // )
    return of([])
  }
}
