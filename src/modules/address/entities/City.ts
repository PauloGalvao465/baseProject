import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_cities')
export class City {
  @PrimaryGeneratedColumn()
  id_city: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nm_city: string;

  @Column({ type: 'int', nullable: false })
  id_state: number;
}
