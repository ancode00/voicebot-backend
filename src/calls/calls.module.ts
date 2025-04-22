import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CallsService } from './calls.service';
import { CallsController } from './calls.controller';
import { Call, CallSchema } from './schemas/call.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Call.name, schema: CallSchema }])],
  controllers: [CallsController],
  providers: [CallsService],
})
export class CallsModule {}
