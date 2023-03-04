import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('item_participant_events')
export class Item_participant_event {
  @PrimaryGeneratedColumn()
  id_participant: number;

  @Column({ type: 'int', nullable: false })
  id_event: number;
}
