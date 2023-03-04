import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_categories_ticket')
export class Category_ticket {
  @PrimaryGeneratedColumn()
  id_category_ticket: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nm_category_ticket: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  ds_category_ticket: string;
}
