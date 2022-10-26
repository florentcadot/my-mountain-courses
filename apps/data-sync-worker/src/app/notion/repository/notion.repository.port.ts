import {
  GetPagePropertyResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints'

export abstract class NotionRepository {
  abstract getNotionDatabasePages(): Promise<QueryDatabaseResponse>;
  abstract getNotionPropertyData(pageId: string, propertyId: string): Promise<GetPagePropertyResponse>;
}
