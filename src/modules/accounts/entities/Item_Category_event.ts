import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('item_categories_events')
export class Item_Category_event {
  @PrimaryGeneratedColumn()
  id_category_event: number;

  @Column({ type: 'int', nullable: false })
  id_event: number;
}
