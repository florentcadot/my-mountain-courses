import { Component } from '@angular/core';
import {GetCourses} from '../../../core/use-cases/get-courses.use-case'
import {DataStore} from '../../../store/data-store'

@Component({
  selector: 'mountain-routes-history-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {

  constructor(private getCourses: GetCourses, private store: DataStore) {}
  title = 'front';
  message= 'Heyyyy';

  courses= this.store.courses

  getAllCourses() {
    this.getCourses.execute()
  }
}
