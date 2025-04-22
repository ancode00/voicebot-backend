import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CallsModule } from './calls/calls.module';
import { AiScoreModule } from './ai-score/ai-score.module';
import { VoicebotAgentModule } from './voicebot-agent/voicebot-agent.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/voicebot'),
    CallsModule,
    AiScoreModule,
    VoicebotAgentModule,
  ],
})
export class AppModule {}
