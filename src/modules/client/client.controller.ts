import { Controller, Get, Param } from '@nestjs/common';
import { ClientService } from './client.service';
import { IClient } from './interfaces/client.interface';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  findAll(): Promise<IClient[]> {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }
}
