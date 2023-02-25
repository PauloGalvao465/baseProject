/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCategoriesEvent1677336090234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_categories_event',
                columns: [
                    {
                        name: 'id_category_event',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true,
                    },
                    {
                        name: 'nm_category_event',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'im_category_event',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_categories_event')
    }

}
