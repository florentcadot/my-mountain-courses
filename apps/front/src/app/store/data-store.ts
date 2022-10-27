import {Injectable} from '@angular/core'
import {Course} from '../core/entity/course'
import {BehaviorSubject} from 'rxjs'

interface AppData<T> {
  loading: boolean
  error: string | null,
  data: T
}

type AppDataSubject<T> = BehaviorSubject<AppData<T>>

const init = <T>(value: T) => {
  return new BehaviorSubject<AppData<T>>({
  loading: false,
  error: null,
  data: value
})
}


export enum DataStoreEntities {
  courses= '_courses'
}

@Injectable({providedIn: 'root'})
export class DataStore {

  private _courses = init([]) as any as BehaviorSubject<AppData<Course[]>>

  get courses() {
    return this._courses
  }

  public setLoading(entity: DataStoreEntities){
  this[entity].next({
      ...this[entity].getValue(),
      error: null,
      loading: true
    })
  }

  public setError(entity: DataStoreEntities, error: string){
  this[entity].next({
      ...this[entity].getValue(),
      loading: false,
      error,
    })
  }

  public setSuccess<T>(entity: DataStoreEntities, data: T){
  this[entity].next({
      loading: false,
      error: null,
      data: data as Course[],
    })
  }

}
