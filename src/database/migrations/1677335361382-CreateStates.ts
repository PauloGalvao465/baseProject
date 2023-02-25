/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateStates1677335361382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_states',
                columns: [
                    {
                        name: 'id_state',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true,
                    },
                    {
                        name: 'nm_state',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_states')
    }

}
