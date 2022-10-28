import { Controller } from '@nestjs/common';
import { CoursesService } from './courses.service';
import {MessagePattern} from '@nestjs/microservices'

@Controller()
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @MessagePattern({ cmd: "synchronizeNotionDBWithRealDB" })
  async synchronizeNotionDBWithRealDB() {
    return this.coursesService.synchronizeNotionDBWithRealDB();
  }
}
