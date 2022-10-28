import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AppService {
  constructor(
    @Inject("COURSES_SERVICE") private readonly coursesServiceClient: ClientProxy,
    @Inject("NOTION_COURSES_SYNC_SERVICE") private readonly notionCoursesSyncClient: ClientProxy
  ) {}

  getCourses() {
    return this.coursesServiceClient
      .send<string>({ cmd: "getCourses" }, {})
  }

  synchronizeNotionDBWithRealDB() {
    return this.notionCoursesSyncClient
      .send<string>({ cmd: "synchronizeNotionDBWithRealDB" }, {})
  }
}
