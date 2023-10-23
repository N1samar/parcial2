import { Agent } from 'src/modules/agent/entities/agent.entity';
import { Client } from 'src/modules/client/entities/client.entity';
import { Procedure } from 'src/modules/procedure/entities/procedure.entity';
import { Turn } from 'src/modules/turn/entities/turn.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ofice: string;

  @Column()
  unit: string;

  @Column()
  process: string;

  @Column()
  subProcess: string;

  @Column({ type: 'varchar' })
  timeService: string;

  @Column({ type: 'varchar' })
  state: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dateCreate: Date;

  @OneToMany(() => Client, (client) => client.service)
  client: Client[];

  @OneToMany(() => Turn, (turn) => turn.service)
  turn: Turn[];

  @OneToMany(() => Agent, (agent) => agent.service)
  agent: Agent[];

  @ManyToOne(() => Procedure, (procedure) => procedure.service)
  procedure: Procedure;
}
