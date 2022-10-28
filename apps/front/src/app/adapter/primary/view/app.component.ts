import {Component, OnInit } from '@angular/core'
import {GetCourses} from '../../../core/use-cases/get-courses.use-case'
import {DataStore} from '../../../store/data-store'
import {Subscription} from 'rxjs'
import {Course} from '../../../core/entity/course'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mountain-routes-history-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit{

  coursesSubscription: Subscription
  courses: Course[] = []

  constructor(
    private getCourses: GetCourses,
    private store: DataStore,
    private route: ActivatedRoute
  ) {
    this.coursesSubscription = this.store.courses.subscribe( (result) => {
      this.courses = result.data
    })
  }

  title = 'front';
  message= 'Heyyyy';


  getAllCourses() {
    this.getCourses.execute()
  }


  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log('LES PARAMS', params)
          if(params['jwt']){
            localStorage.setItem('appToken', params['jwt'])
            location.search = ''
          }
        }
      );
  }
}
