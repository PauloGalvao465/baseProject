/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePlaces1677341546601 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_places',
                columns: [
                    {
                        name: 'id_place',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true
                    },
                    {
                        name: 'nm_place',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'ds_address',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'nm_district',
                        type: 'varchar',
                        length: '50',
                        isNullable: false
                    },
                    {
                        name: 'cd_cep',
                        type: 'int',
                        length: '8',
                        isNullable: false
                    },
                    {
                        name: 'id_city',
                        type: 'int'
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_places_cities',
                        columnNames: ['id_city'],
                        referencedTableName: 'tb_cities',
                        referencedColumnNames: ['id_city']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_places')
    }

}
