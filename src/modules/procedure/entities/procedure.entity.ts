import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Procedure {
    @PrimaryGeneratedColumn()
    Id_prod: number;
  
    @Column()
    Procedure: string;
  
    @Column()
    Type_Procedure: string;
}
