import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { VoicebotAgentService } from './voicebot-agent.service';

@Controller('voicebot-agent')
export class VoicebotAgentController {
  constructor(private readonly agentService: VoicebotAgentService) {}

  @Post()
  create(@Body() body: any) {
    return this.agentService.create(body);
  }

  @Get()
  getAll() {
    return this.agentService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.agentService.getById(id);
  }
}

