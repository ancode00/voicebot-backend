import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CallDocument = Call & Document;

@Schema({ timestamps: true })
export class Call {
  @Prop({ required: true })
  callId: string;

  @Prop({ required: true })
  agentId: string;

  @Prop({ required: true })
  status: string; // active, queued, ended

  @Prop()
  duration: number;

  @Prop()
  customerName: string;

  @Prop()
  customerNumber: string;

  @Prop()
  crmTag: string;
}

export const CallSchema = SchemaFactory.createForClass(Call);
