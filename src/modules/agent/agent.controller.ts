import { Controller, Get, Param } from '@nestjs/common';
import { AgentService } from './agent.service';
import { IAgent } from './interfaces/agent.interface';

@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Get()
  findAll(): Promise<IAgent[]> {
    return this.agentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.agentService.findOne(+id);
  }
}
