import { Test, TestingModule } from '@nestjs/testing';
import { AiScoreService } from './ai-score.service';

describe('AiScoreService', () => {
  let service: AiScoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiScoreService],
    }).compile();

    service = module.get<AiScoreService>(AiScoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
