import { Controller, Get, Param, Query } from '@nestjs/common';
import { ServiceService } from './service.service';
import { Service } from './entities/service.entity';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  findAll(
    @Query() filter: any,
  ): Promise<{ services: Service[]; count: number }> {
    return this.serviceService.findAll(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(+id);
  }
}
