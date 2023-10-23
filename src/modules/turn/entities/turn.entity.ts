import { Service } from 'src/modules/service/entities/service.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Turn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 8 })
  numTurn: string;

  @ManyToOne(() => Service, (service) => service.turn)
  service: Service;
}
