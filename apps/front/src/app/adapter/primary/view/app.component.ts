import {Component, OnInit } from '@angular/core'
import {GetCourses} from '../../../core/use-cases/get-courses.use-case'
import {DataStore} from '../../../store/data-store'
import {Subscription} from 'rxjs'
import {Course} from '../../../core/entity/course'

@Component({
  selector: 'mountain-routes-history-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  coursesSubscription: Subscription
  courses: Course[] = []

  constructor(private getCourses: GetCourses, private store: DataStore) {
    this.coursesSubscription = this.store.courses.subscribe( (result) => {
      this.courses = result.data
    })
  }

  title = 'front';
  message= 'Heyyyy';


  getAllCourses() {
    this.getCourses.execute()
  }
}
