import { Controller, Get, Param } from '@nestjs/common';
import { TurnService } from './turn.service';

import { ITurn } from './interfaces/turn.interface';

@Controller('turn')
export class TurnController {
  constructor(private readonly turnService: TurnService) {}

  @Get()
  findAll(): Promise<ITurn[]> {
    return this.turnService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turnService.findOne(+id);
  }
}
