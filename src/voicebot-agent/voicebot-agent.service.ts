import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VoicebotAgent, VoicebotAgentDocument } from './schemas/voicebot-agent.schema';

@Injectable()
export class VoicebotAgentService {
  constructor(
    @InjectModel(VoicebotAgent.name)
    private agentModel: Model<VoicebotAgentDocument>,
  ) {}

  async create(data: any): Promise<VoicebotAgent> {
    const agent = new this.agentModel(data);
    return agent.save();
  }

  async getAll(): Promise<VoicebotAgent[]> {
    return this.agentModel.find().exec();
  }

  async getById(id: string): Promise<VoicebotAgent | null> {
    return this.agentModel.findById(id).exec();
  }
}

