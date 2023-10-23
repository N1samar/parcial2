import { Injectable } from '@nestjs/common';
import { Procedure } from './entities/procedure.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IProcedure } from './interfaces/procedure.interface';

@Injectable()
export class ProcedureService {
  constructor(
    @InjectRepository(Procedure)
    private procedureRepository: Repository<Procedure>,
  ) {}

  findAll(): Promise<IProcedure[]> {
    return this.procedureRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} procedure`;
  }
}
