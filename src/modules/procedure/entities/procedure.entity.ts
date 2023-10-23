import { Service } from 'src/modules/service/entities/service.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Procedure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  procedure: string;

  @Column()
  typeProcedure: string;

  @OneToMany(() => Service, (service) => service.procedure)
  service: Service[];
}
