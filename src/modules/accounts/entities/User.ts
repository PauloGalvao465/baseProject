import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  im_user: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nm_user: string;

  @Column({ type: 'char', length: 11, nullable: false })
  cd_cpf: string;

  @Column({ type: 'date', nullable: false })
  dt_birth: Date;

  @Column({ type: 'char', length: 11, nullable: false })
  cd_phone: string;

  @Column({ type: 'char', length: 1, nullable: false })
  ds_category_user: string;

  @Column({ type: 'char', length: 11, nullable: false })
  cd_coupon: string;

  @CreateDateColumn()
  created_at: Date;
}
