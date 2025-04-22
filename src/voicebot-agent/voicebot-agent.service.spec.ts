import { Test, TestingModule } from '@nestjs/testing';
import { VoicebotAgentService } from './voicebot-agent.service';

describe('VoicebotAgentService', () => {
  let service: VoicebotAgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VoicebotAgentService],
    }).compile();

    service = module.get<VoicebotAgentService>(VoicebotAgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
