/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTickets1677347495925 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_tickets',
                columns: [
                    {
                        name: 'id_ticket',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true
                    },
                    {
                        name: 'vl_price_ticket',
                        type: 'float(5,2)',
                        isNullable: false
                    },
                    {
                        name: 'qt_ticket',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'ic_accept_coupon',
                        type: 'char',
                        length: '1',
                        isNullable: false
                    },
                    {
                        name: 'id_category_ticket',
                        type: 'int',
                    },
                    {
                        name: 'id_event',
                        type: 'int',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'fk_tickets_categories',
                        columnNames: ['id_category_ticket'],
                        referencedTableName: 'tb_categories_ticket',
                        referencedColumnNames: ['id_category_ticket']
                    },
                    {
                        name: 'fk_tickets_events',
                        columnNames: ['id_event'],
                        referencedTableName: 'tb_events',
                        referencedColumnNames: ['id_event']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_tickets')
    }

}
