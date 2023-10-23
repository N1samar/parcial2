import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTurnDto {
  @IsString()
  @IsNotEmpty()
  numTurn: string;
}
