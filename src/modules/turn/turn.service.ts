import { Injectable } from '@nestjs/common';
import { CreateTurnDto } from './dto/create-turn.dto';
import { UpdateTurnDto } from './dto/update-turn.dto';
import { Turn } from './entities/turn.entity';
import { ITurn, ITurnCreate, ITurnUpdate } from './interfaces/turn.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class TurnService {
  constructor(
    @InjectRepository(Turn)
    private turnRepository: Repository<Turn>,
  ) {}
  async create(createUser: ITurnCreate): Promise<ITurnCreate> {
    const saltOrRounds = 10;
    const passwordHash =
  }

  findAll(): Promise<ITurn[]> {
    return this.turnRepository.find();
  }

  findOne(id: number): Promise<ITurn> {
    return this.turnRepository.findOneBy({ id });
  }

  async update(id: number, updateUser: ITurnUpdate) {
    const result = this.turnRepository.findOneBy({ id });
    await this.turnRepository.update(id, updateUser);
    return result;
  }

  async remove(id: number): Promise<ITurn> {
    const result = this.turnRepository.findOneBy({ id});
    await this.turnRepository.delete(id);
    return result;
  }
}
