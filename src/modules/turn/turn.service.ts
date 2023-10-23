import { Injectable } from '@nestjs/common';
import { Turn } from './entities/turn.entity';
import { ITurn } from './interfaces/turn.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TurnService {
  constructor(
    @InjectRepository(Turn)
    private turnRepository: Repository<Turn>,
  ) {}

  findAll(): Promise<ITurn[]> {
    return this.turnRepository.find();
  }

  findOne(id: number): Promise<ITurn> {
    return this.turnRepository.findOneBy({ id });
  }
}
