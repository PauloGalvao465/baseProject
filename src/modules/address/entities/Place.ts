import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_places')
export class Place {
  @PrimaryGeneratedColumn()
  id_place: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nm_place: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  ds_address: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nm_district: string;

  @Column({ type: 'int', length: 8, nullable: false })
  cd_cep: number;

  @Column({ type: 'int', nullable: false })
  id_city: number;
}
