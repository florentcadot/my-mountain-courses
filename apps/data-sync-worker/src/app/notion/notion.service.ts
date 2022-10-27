import {Injectable} from '@nestjs/common'
import {NotionRepository} from './repository/notion.repository.port'
import {PageObjectResponse} from '@notionhq/client/build/src/api-endpoints'
import {extractValueFromPageProperty} from './notion.util'
import {Course, GetCourseDto, toDomain} from '@mountain-routes-history/mountain-courses-lib'

@Injectable()
export class NotionService {

  constructor(private notionRepository: NotionRepository) {}

  async getCourses(): Promise<Course[]> {
    try{
      const pages = await this.notionRepository.getNotionDatabasePages()
      const courses = (await Promise.all(
        pages.results.map(async (page: PageObjectResponse) => {
          const properties = {};
          for (const propertyName of Object.keys(page.properties)) {
            const propertyData = await this.notionRepository.getNotionPropertyData(
              page.id,
              page.properties[propertyName].id
            )
            properties[propertyName] = extractValueFromPageProperty(propertyData);
          }
          return properties;
        }),
      )) as unknown as GetCourseDto[];
      return courses.map(toDomain);
    } catch (e){
      throw new Error('Notion API call error')
    }
  }

}
