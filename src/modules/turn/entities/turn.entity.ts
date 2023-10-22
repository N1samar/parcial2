import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Turn {
    @PrimaryGeneratedColumn()
    Id_turn: number;
  
    @Column({length: 8})
    Num_turn: string;
}
