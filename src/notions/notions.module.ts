import { Module } from '@nestjs/common';
import { NotionsService } from './notions.service';
import { NotionsController } from './notions.controller';
import { NotionRepository } from 'src/notions/notions.repository';

@Module({
  controllers: [NotionsController],
  providers: [NotionsService, NotionRepository],
})
export class NotionsModule {}
