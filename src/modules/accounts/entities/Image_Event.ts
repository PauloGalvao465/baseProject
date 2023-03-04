import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tb_images_event')
export class Image_Event {
  @PrimaryGeneratedColumn()
  id_image_event: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  im_image_event: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  ds_image_event: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  ds_type_image_event: string;

  @Column({ type: 'int', nullable: false })
  id_event: number;
}
