/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsers1677298615572 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_users',
                columns: [
                    {
                        name: 'id_user',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true,
                    },
                    {
                        name: 'im_user',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'nm_user',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'cd_cpf',
                        type: 'char',
                        length: '11',
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: 'dt_birth',
                        type: 'date',
                        isNullable: false,
                    },
                    {
                        name: 'cd_phone',
                        type: 'char',
                        length: '11',
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: 'ds_category_user',
                        type: 'char',
                        length: '1',
                        isNullable: false,
                    },
                    {
                        name: 'cd_coupon',
                        type: 'char',
                        length: '11',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            })
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_users')
    }

}
