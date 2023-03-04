import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_events')
export class Event {
  @PrimaryGeneratedColumn()
  id_event: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nm_event: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  ds_event: string;

  @Column({ type: 'date', nullable: false })
  dt_start_event: Date;

  @Column({ type: 'date', nullable: false })
  dt_finish_event: Date;

  @Column({ type: 'time', nullable: false })
  hr_start_event: Date;

  @Column({ type: 'time', nullable: false })
  hr_finish_event: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  ic_end: string;

  @Column({ type: 'int', nullable: false })
  id_place: number;

  @Column({ type: 'int', nullable: false })
  id_company: number;
}
