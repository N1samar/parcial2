import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Agent {
    @PrimaryGeneratedColumn()
    Id_age: number;
  
    @Column({length: 50})
    Name_agent: string;
  
    @Column()
    Type_agent: string;
}
