import {Controller, Get, UseGuards} from '@nestjs/common'
import { AppService } from "./app.service";
import {JwtAuthGuard} from './auth/jwt/jwt-auth.guard'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/courses")
  getCourses() {
    return this.appService.getCourses();
  }


  @Get("/notion/sync")
  // @UseGuards(JwtAuthGuard)
  syncWithNotions() {
    return this.appService.synchronizeNotionDBWithRealDB();
  }
}
