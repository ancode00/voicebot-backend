import { Test, TestingModule } from '@nestjs/testing';
import { AiScoreController } from './ai-score.controller';

describe('AiScoreController', () => {
  let controller: AiScoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiScoreController],
    }).compile();

    controller = module.get<AiScoreController>(AiScoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
