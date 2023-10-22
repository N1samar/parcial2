import { Module } from '@nestjs/common';
import { TurnService } from './turn.service';
import { TurnController } from './turn.controller';
import { Turn } from './entities/turn.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Turn])],
  controllers: [TurnController],
  providers: [TurnService],
})
export class TurnModule {}
