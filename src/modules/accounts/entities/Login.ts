import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_logins')
export class Login {
  @PrimaryGeneratedColumn()
  cd_email: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  cd_password: string;

  @Column({ type: 'char', length: 1, nullable: false })
  ic_status: string;

  @Column({ type: 'int', nullable: true })
  id_user: number;

  @Column({ type: 'int', nullable: true })
  id_company: number;
}
