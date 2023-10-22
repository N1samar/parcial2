import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
  Id_cli: number;

  @Column({length: 50})
  Name_cli: string;

  @Column()
  Type_id: string;

  @Column()
  Client: string;

  @Column()
  Type_client: string;
}
