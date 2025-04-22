import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CallsService } from './calls.service';

@Controller('calls')
export class CallsController {
  constructor(private readonly callsService: CallsService) {}

  @Post()
  create(@Body() createCallDto: any) {
    return this.callsService.create(createCallDto);
  }

  @Get()
  findAll() {
    return this.callsService.findAll();
  }

  @Get(':callId')
  findOne(@Param('callId') callId: string) {
    return this.callsService.findOne(callId);
  }

  @Put(':callId')
  update(@Param('callId') callId: string, @Body() updateCallDto: any) {
    return this.callsService.update(callId, updateCallDto);
  }

  @Delete(':callId')
  remove(@Param('callId') callId: string) {
    return this.callsService.remove(callId);
  }
}
