import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Service } from 'src/modules/service/entities/service.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ type: 'varchar' })
  typeIdentification: string;

  @Column()
  identification: string;

  @Column()
  client: string;

  @Column()
  typeClient: string;

  @ManyToOne(() => Service, (service) => service.client)
  service: Service;
}
