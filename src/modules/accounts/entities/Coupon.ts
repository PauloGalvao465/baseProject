import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_coupons')
export class Coupon {
  @PrimaryGeneratedColumn()
  id_coupon: number;

  @Column({ type: 'float', length: '7', nullable: false })
  vl_discont: number;

  @Column({ type: 'char', length: 1, nullable: false })
  qt_acumulative: string;

  @Column({ type: 'int', nullable: false })
  id_promoter: number;

  @Column({ type: 'int', nullable: false })
  id_event: number;
}
