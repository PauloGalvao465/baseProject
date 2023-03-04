import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_states')
export class State {
  @PrimaryGeneratedColumn()
  id_state: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nm_state: string;
}
