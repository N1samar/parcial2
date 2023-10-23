import { Optional } from '@nestjs/common';

export class FilterServiceDto {
  @Optional()
  state: string;

  @Optional()
  identification: string;
}
