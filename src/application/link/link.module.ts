import { Module } from '@nestjs/common';

import { LinkController } from './link.controller';
import { LinkService } from './link.service';

@Module({
  controllers: [LinkController],
  providers: [LinkService],
  exports: [LinkService],
})
export class LinkModule {}
