import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateTurnDto {
  @IsNumber()
  @IsNotEmpty()
  Id_turn: number;

  @IsString()
  @IsNotEmpty()
  Num_turn: string;
}

