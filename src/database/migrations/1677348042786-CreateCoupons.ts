/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCoupons1677348042786 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_coupons',
                columns: [
                    {
                        name: 'id_coupon',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true
                    },
                    {
                        name: 'vl_discont',
                        type: 'float(5,2)',
                        isNullable: false
                    },
                    {
                        name: 'qt_acumulative',
                        type: 'char',
                        length: '1',
                        isNullable: false
                    },
                    {
                        name: 'id_promoter',
                        type: 'int',
                    },
                    {
                        name: 'id_event',
                        type: 'int',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'fk_coupons_promoter',
                        columnNames: ['id_promoter'],
                        referencedTableName: 'tb_users',
                        referencedColumnNames: ['id_user']
                    },
                    {
                        name: 'fk_coupons_events',
                        columnNames: ['id_event'],
                        referencedTableName: 'tb_events',
                        referencedColumnNames: ['id_event']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_coupons')
    }

}
