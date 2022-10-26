import { Module } from '@nestjs/common';
import {NotionService} from './notion.service'
import {NotionRepository} from './repository/notion.repository.port'
import {RealNotionRepository} from './repository/real.notion.repository'

@Module({
 providers: [
   {
     provide: NotionService,
     useClass: NotionService,
   },
   {
     provide: NotionRepository,
     useClass: RealNotionRepository,
   },
 ],
  exports: [NotionService]
})
export class NotionModule {}
