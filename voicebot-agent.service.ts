import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VoicebotAgent, VoicebotAgentDocument } from './schemas/voicebot-agent.schema';

@Injectable()
export class VoicebotAgentService {
  constructor(
    @InjectModel(VoicebotAgent.name)
    private readonly agentModel: Model<VoicebotAgentDocument>
  ) {}

  async create(data: Partial<VoicebotAgent>) {
    const agent = new this.agentModel(data);
    return agent.save();
  }

  async getAll() {
    return this.agentModel.find().exec();
  }

  async getById(id: string) {
    return this.agentModel.findById(id).exec();
  }

  async update(id: string, updateData: Partial<VoicebotAgent>) {
    return this.agentModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async delete(id: string) {
    return this.agentModel.findByIdAndDelete(id).exec();
  }
}

