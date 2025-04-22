import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Call, CallDocument } from './schemas/call.schema';

@Injectable()
export class CallsService {
  constructor(@InjectModel(Call.name) private callModel: Model<CallDocument>) {}

  async create(createCallDto: any): Promise<Call> {
    const newCall = new this.callModel(createCallDto);
    return newCall.save();
  }

  async findAll(): Promise<Call[]> {
    return this.callModel.find().exec();
  }

  async findOne(callId: string): Promise<Call | null> {
    return this.callModel.findOne({ callId }).exec();
  }

  async update(callId: string, updateCallDto: any): Promise<Call | null> {
    return this.callModel.findOneAndUpdate({ callId }, updateCallDto, { new: true }).exec();
  }

  async remove(callId: string): Promise<any> {
    return this.callModel.deleteOne({ callId }).exec();
  }
}
