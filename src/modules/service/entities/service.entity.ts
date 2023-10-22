import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
  Id_Serv: number;

  @Column()
  Date: Date;

  @Column()
  Ofice: string;

  @Column()
  Unit: string;

  @Column()
  Process: string;

  @Column()
  Sub_process: string;

  @Column()
  Time_service: string;

  @Column()
  State: string;

}
