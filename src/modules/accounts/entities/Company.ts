import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_companies')
export class Company {
  @PrimaryGeneratedColumn()
  id_company: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nm_company: string;

  @Column({ type: 'char', length: 14, nullable: false })
  cd_cnpj: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  ds_company: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  im_company: string;
}
