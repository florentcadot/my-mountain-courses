import {Injectable} from '@angular/core'
import {Course} from '../core/entity/course'

interface AppData<T> {
  loading: boolean
  error: string | null,
  data?: T
}

const init = <T>(value: T): AppData<T> => ({
  loading: false,
  error: null,
  data: value
})


export enum DataStoreEntities {
  courses= '_courses'
}

@Injectable({providedIn: 'root'})
export class DataStore {

  private _courses: AppData<Course[]> = init([])

  get courses() {
    return this._courses.data
  }

  public setLoading(entity: DataStoreEntities){
  this[entity] = {
      ...this[entity],
      error: null,
      loading: true
    }
  }

  public setError(entity: DataStoreEntities, error: string){
  this[entity] = {
      ...this[entity],
      loading: false,
      error,
    }
  }

  public setSuccess<T>(entity: DataStoreEntities, data: T){
  this[entity] = {
      loading: false,
      error: null,
      data: data as Course[],
    }
  }

}
