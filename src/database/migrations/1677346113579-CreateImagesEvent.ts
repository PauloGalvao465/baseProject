/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateImagesEvent1677346113579 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_images_event',
                columns: [
                    {
                        name: 'id_image_event',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true
                    },
                    {
                        name: 'im_image_event',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'ds_image_event',
                        type: 'varchar',
                        length: '50',
                        isNullable: false
                    },
                    {
                        name: 'ds_type_image_event',
                        type: 'varchar',
                        length: '50',
                        isNullable: false
                    },
                    {
                        name: 'id_event',
                        type: 'int',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'fk_images_events',
                        columnNames: ['id_event'],
                        referencedTableName: 'tb_events',
                        referencedColumnNames: ['id_event']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_images_event')
    }

}
