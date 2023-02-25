/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCities1677338707706 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_cities',
                columns: [
                    {
                        name: 'id_city',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true
                    },
                    {
                        name: 'nm_city',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'id_state',
                        type: 'int'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_cities_states',
                        columnNames: ['id_state'],
                        referencedTableName: 'tb_states',
                        referencedColumnNames: ['id_state']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_cities')
    }

}
