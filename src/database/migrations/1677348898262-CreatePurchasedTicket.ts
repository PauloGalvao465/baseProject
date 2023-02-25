/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePurchasedTicket1677348898262 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_purchases_ticket',
                columns: [
                    {
                        name: 'id_purchased',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true
                    },
                    {
                        name: 'cd_ticket',
                        type: 'char',
                        length: '20',
                        isNullable: false
                    },
                    {
                        name: 'nm_holders_ticket',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'dt_pourchased',
                        type: 'datetime',
                        isNullable: false
                    },
                    {
                        name: 'ic_status_ticket',
                        type: 'char',
                        length: '1',
                        isNullable: false
                    },
                    {
                        name: 'id_coupon',
                        type: 'int',
                    },
                    {
                        name: 'id_buyer',
                        type: 'int',
                    },
                    {
                        name: 'id_ticket',
                        type: 'int',
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_purchases_buyer',
                        columnNames: ['id_buyer'],
                        referencedTableName: 'tb_users',
                        referencedColumnNames: ['id_user']
                    },
                    {
                        name: 'fk_purchases_tickets',
                        columnNames: ['id_ticket'],
                        referencedTableName: 'tb_tickets',
                        referencedColumnNames: ['id_ticket']
                    },
                    {
                        name: 'fk_purchases_coupon',
                        columnNames: ['id_coupon'],
                        referencedTableName: 'tb_coupons',
                        referencedColumnNames: ['id_coupon']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_purchases_ticket')
    }

}
