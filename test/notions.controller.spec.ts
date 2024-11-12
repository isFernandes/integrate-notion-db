import { Test, TestingModule } from '@nestjs/testing';
import { NotionsController } from '../src/notions/notions.controller';
import { NotionsService } from '../src/notions/notions.service';
import { NotionRepository } from '../src/notions/notions.repository';
import { ConfigModule } from '@nestjs/config';

describe('NotionsController', () => {
  let controller: NotionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
      ],
      controllers: [NotionsController],
      providers: [NotionsService, NotionRepository],
    }).compile();

    controller = module.get<NotionsController>(NotionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
