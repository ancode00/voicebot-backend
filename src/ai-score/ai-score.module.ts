import { Module } from '@nestjs/common';
import { AiScoreService } from './ai-score.service';
import { AiScoreController } from './ai-score.controller';

@Module({
  providers: [AiScoreService],
  controllers: [AiScoreController]
})
export class AiScoreModule {}
