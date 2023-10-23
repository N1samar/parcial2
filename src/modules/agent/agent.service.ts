import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Agent } from './entities/agent.entity';
import { Repository } from 'typeorm';
import { IAgent } from './interfaces/agent.interface';

@Injectable()
export class AgentService {
  constructor(
    @InjectRepository(Agent)
    private agentRepository: Repository<Agent>,
  ) {}

  async findAll(): Promise<IAgent[]> {
    return await this.agentRepository
      .createQueryBuilder('agent')
      .select('agent.nameAgent')
      .groupBy('agent.nameAgent')
      .getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} agent`;
  }
}
