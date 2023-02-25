/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateItemCategoryEvent1677349746516 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'item_categories_events',
                columns: [
                    {
                        name: 'id_category_event',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'id_event',
                        type: 'int',
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_categories_events',
                        columnNames: ['id_category_event'],
                        referencedTableName: 'tb_categories_event',
                        referencedColumnNames: ['id_category_event']
                    },
                    {
                        name: 'fk_events_categories',
                        columnNames: ['id_event'],
                        referencedTableName: 'tb_events',
                        referencedColumnNames: ['id_event']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('item_categories_events')
    }

}
