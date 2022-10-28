import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs'
import {CoursesRepository} from '../../core/ports/courses.repository.port'
import {GetCoursesDto} from './dto/get-courses.dto'
import {toDomain} from './mapper/get-courses.mapper'
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RealCoursesRepository implements CoursesRepository{
  constructor(private http: HttpClient) {}
  getCourses() {
    return this.http.get<GetCoursesDto[]>(`${environment.baseUrl}/api/courses`)
      .pipe(
      map((courses) => courses.map(toDomain))
    )
  }
}
