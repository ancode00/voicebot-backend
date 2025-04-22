import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VoicebotAgentDocument = VoicebotAgent & Document;

@Schema({ timestamps: true })
export class VoicebotAgent {
  @Prop({ required: true, unique: true })
  agentId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ default: 'draft' }) // will change to "deployed" on deploy
  status: string;

  // Tab 1 — Basic Setup
  @Prop()
  primaryLanguage: string;

  @Prop()
  voiceStyle: string;

  @Prop()
  description: string;

  // Tab 2 — Knowledge Base
  @Prop()
  knowledgeSource: string; // none, upload, or url

  @Prop([String])
  knowledgeURLs: string[]; // array of URLs (optional)

  // Tab 3 — Voice Flow
  @Prop()
  greetingMessage: string;

  @Prop()
  fallbackResponse: string;

  @Prop()
  pauseHandling: string; // default, proactive, silent

  @Prop()
  pauseTimeout: number;

  @Prop([String])
  endCallPhrases: string[];
}

export const VoicebotAgentSchema = SchemaFactory.createForClass(VoicebotAgent);

