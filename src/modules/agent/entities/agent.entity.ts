import { Service } from 'src/modules/service/entities/service.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Agent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nameAgent: string;

  @ManyToOne(() => Service, (service) => service.agent)
  service: Service;
}
