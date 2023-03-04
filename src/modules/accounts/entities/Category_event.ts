import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_categories_event')
export class Category_Event {
  @PrimaryGeneratedColumn()
  id_category_event: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nm_category_event: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  im_category_event: string;
}
