import {Controller, Get, UseGuards} from '@nestjs/common'
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/courses")
  getCourses() {
    return this.appService.getCourses();
  }


  @UseGuards(JwtAuthGuard)
  @Get("/notion/sync")
  syncWithNotions() {
    return this.appService.synchronizeNotionDBWithRealDB();
  }
}
