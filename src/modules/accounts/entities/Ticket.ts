import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_tickets')
export class Ticket {
  @PrimaryGeneratedColumn()
  id_ticket: number;

  @Column({ type: 'float', length: '7', nullable: false })
  vl_price_ticket: number;

  @Column({ type: 'int', nullable: false })
  qt_ticket: number;

  @Column({ type: 'char', length: 1, nullable: false })
  ic_accept_coupon: string;

  @Column({ type: 'int', nullable: false })
  id_category_ticket: number;

  @Column({ type: 'int', nullable: false })
  id_event: number;
}
