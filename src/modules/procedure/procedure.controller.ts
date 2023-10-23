import { Controller, Get, Param } from '@nestjs/common';
import { ProcedureService } from './procedure.service';

@Controller('procedure')
export class ProcedureController {
  constructor(private readonly procedureService: ProcedureService) {}

  @Get()
  findAll() {
    return this.procedureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.procedureService.findOne(+id);
  }
}
