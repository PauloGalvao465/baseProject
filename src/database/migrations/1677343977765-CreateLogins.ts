/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateLogins1677343977765 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_logins',
                columns: [
                    {
                        name: 'cd_email',
                        type: 'int',
                        length: '100',
                        isPrimary: true
                    },
                    {
                        name: 'cd_password',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'ic_status',
                        type: 'char',
                        length: '1',
                        isNullable: false
                    },
                    {
                        name: 'id_user',
                        type: 'int',
                    },
                    {
                        name: 'id_company',
                        type: 'int',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'fk_logins_users',
                        columnNames: ['id_user'],
                        referencedTableName: 'tb_users',
                        referencedColumnNames: ['id_user']
                    },
                    {
                        name: 'fk_logins_companies',
                        columnNames: ['id_company'],
                        referencedTableName: 'tb_companies',
                        referencedColumnNames: ['id_company']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_logins')
    }

}
