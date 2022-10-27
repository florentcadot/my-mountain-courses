import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs'
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
    return this.http.get<GetCoursesDto[]>(`${BASE_URL}/api`)
      .pipe(
      map((courses) => courses.map(toDomain))
    )
  }
}
