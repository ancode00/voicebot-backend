import { Test, TestingModule } from '@nestjs/testing';
import { VoicebotAgentController } from './voicebot-agent.controller';

describe('VoicebotAgentController', () => {
  let controller: VoicebotAgentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VoicebotAgentController],
    }).compile();

    controller = module.get<VoicebotAgentController>(VoicebotAgentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
