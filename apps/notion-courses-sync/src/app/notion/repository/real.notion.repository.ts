import { NotionRepository } from './notion.repository.port';
import { Injectable } from '@nestjs/common';
import {
  GetPagePropertyResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { Client } from '@notionhq/client';
import {ConfigService} from '@nestjs/config'

@Injectable()
export class RealNotionRepository extends NotionRepository {

  private readonly notionClient: Client

  private readonly databaseId: string

  constructor(private configService: ConfigService) {
    super()
    this.notionClient = new Client({
      auth: configService.get<string>('NOTION_TOKEN'),
    });

    this.databaseId = configService.get<string>('NOTION_DATABASE_ID')
  }

  // https://developers.notion.com/reference/post-database-query
  async getNotionDatabasePages(): Promise<QueryDatabaseResponse> {
    return await this.notionClient.databases.query({
      database_id: this.databaseId,
      sorts: [],
    });
  }

  // https://developers.notion.com/reference/retrieve-a-page-property
  async getNotionPropertyData(
    pageId: string,
    propertyId: string
  ): Promise<GetPagePropertyResponse> {
    return await this.notionClient.pages.properties.retrieve({
      page_id: pageId,
      property_id: propertyId,
    });
  }
}
