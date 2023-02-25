/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateEvents1677345284505 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_events',
                columns: [
                    {
                        name: 'id_event',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true
                    },
                    {
                        name: 'nm_event',
                        type: 'varchar',
                        length: '50',
                        isNullable: false
                    },
                    {
                        name: 'ds_event',
                        type: 'varchar',
                        length: '200',
                        isNullable: false
                    },
                    {
                        name: 'dt_start_event',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'dt_finish_event',
                        type: 'date',
                        isNullable: false
                    },
                    {
                        name: 'hr_start_event',
                        type: 'time',
                        isNullable: false
                    },
                    {
                        name: 'hr_finish_event',
                        type: 'time',
                        isNullable: false
                    },
                    {
                        name: 'ic_end',
                        type: 'char',
                        length: '1',
                        isNullable: false
                    },
                    {
                        name: 'id_place',
                        type: 'int',
                    },
                    {
                        name: 'id_company',
                        type: 'int',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'fk_events_users',
                        columnNames: ['id_place'],
                        referencedTableName: 'tb_places',
                        referencedColumnNames: ['id_place']
                    },
                    {
                        name: 'fk_events_companies',
                        columnNames: ['id_company'],
                        referencedTableName: 'tb_companies',
                        referencedColumnNames: ['id_company']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_events')
    }

}
