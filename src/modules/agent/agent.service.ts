import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';

@Injectable()
export class AgentService {
  create(createAgentDto: CreateAgentDto) {
    return 'This action adds a new agent';
  }

  findAll() {
    return `This action returns all agent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} agent`;
  }

  remove(id: number) {
    return `This action removes a #${id} agent`;
  }
}
