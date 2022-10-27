import {DataStore, DataStoreEntities} from '../../store/data-store'
import {CoursesRepository} from '../ports/courses.repository.port'
import {catchError} from 'rxjs'
import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})
export class GetCourses {
  constructor(
    private coursesRepository: CoursesRepository,
    private dataStore: DataStore
  ) {}
  public async execute(){
    this.dataStore.setLoading(DataStoreEntities.courses)
    this.coursesRepository.getCourses()
    .pipe(
    catchError((err, caught) => {
      this.dataStore.setError(DataStoreEntities.courses, err.message)
      return caught
    })
    )
      .subscribe((courses) =>
      this.dataStore.setSuccess(DataStoreEntities.courses, courses)
    )
  }
}
