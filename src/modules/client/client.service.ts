import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { IClient } from './interfaces/client.interface';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  findAll(): Promise<IClient[]> {
    return this.clientRepository.find({ relations: { service: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }
}
