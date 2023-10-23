import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { IFilter } from './interfaces/service.interfaces';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private serviceRepository: Repository<Service>,
  ) {}

  async findAll(
    filter: Partial<IFilter>,
  ): Promise<{ services: Service[]; count: number }> {
    const [services, count] = await this.serviceRepository.findAndCount({
      relations: {
        agent: true,
        client: true,
        turn: true,
        procedure: true,
      },
      where: {
        state: filter.state,
        client: {
          identification: filter.identification,
          typeIdentification: filter.typeIdentification,
          client: filter.client,
          typeClient: filter.typeClient,
        },
        agent: { nameAgent: filter.nameAgent },
        turn: { numTurn: filter.numTurn },
        procedure: { typeProcedure: filter.typeProcedure },
      },
    });

    return { count, services };
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }
}
