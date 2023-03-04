import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_participants')
export class Participant {
  @PrimaryGeneratedColumn()
  id_participant: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nm_participant: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  ds_participant: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  im_participant: string;
}
