import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import {HttpClientModule} from '@angular/common/http'
import {CoursesRepository} from '../../../core/ports/courses.repository.port'
import {RealCoursesRepository} from '../../secondary/real.courses.repository'

@NgModule({
  declarations: [AppComponent, LoginComponent, ButtonComponent, InputComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [{
    provide: CoursesRepository,
    useClass: RealCoursesRepository,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
