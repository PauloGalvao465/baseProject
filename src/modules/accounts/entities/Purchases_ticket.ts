import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_purchases_ticket')
export class Purchases_ticket {
  @PrimaryGeneratedColumn()
  id_purchased: number;

  @Column({ type: 'char', length: 20, nullable: false })
  cd_ticket: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nm_holders_ticket: string;

  @Column({ type: 'datetime', nullable: false })
  dt_pourchased: Date;

  @Column({ type: 'char', length: 1, nullable: false })
  ic_status_ticket: string;

  @Column({ type: 'int', nullable: false })
  id_coupon: number;

  @Column({ type: 'int', nullable: false })
  id_buyer: number;

  @Column({ type: 'int', nullable: false })
  id_ticket: number;

  @CreateDateColumn()
  created_at: Date;
}
