import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VoicebotAgentController } from './voicebot-agent.controller';
import { VoicebotAgentService } from './voicebot-agent.service';
import { VoicebotAgent, VoicebotAgentSchema } from './schemas/voicebot-agent.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: VoicebotAgent.name, schema: VoicebotAgentSchema }])
  ],
  controllers: [VoicebotAgentController],
  providers: [VoicebotAgentService],
})
export class VoicebotAgentModule {}

