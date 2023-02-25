/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCategoriesTicket1677337775361 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_categories_ticket',
                columns: [
                    {
                        name: 'id_category_ticket',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true
                    },
                    {
                        name: 'nm_category_ticket',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'ds_category_ticket',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_categories_ticket')
    }

}
