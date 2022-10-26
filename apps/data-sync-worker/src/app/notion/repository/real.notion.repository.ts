import {NotionRepository} from './notion.repository.port'
import { Injectable } from '@nestjs/common';
import {
  GetPagePropertyResponse,
  QueryDatabaseResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { Client } from '@notionhq/client';

@Injectable()
export class RealNotionRepository extends NotionRepository {

  notionClient = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  // https://developers.notion.com/reference/post-database-query
  async getNotionDatabasePages(): Promise<QueryDatabaseResponse> {
    return await this.notionClient.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      sorts: [],
    });
  }

  // https://developers.notion.com/reference/retrieve-a-page-property
  async getNotionPropertyData(pageId: string, propertyId: string): Promise<GetPagePropertyResponse> {
    return await this.notionClient.pages.properties.retrieve({
      page_id: pageId,
      property_id: propertyId,
    })
  }
}
