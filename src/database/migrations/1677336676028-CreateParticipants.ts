/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateParticipants1677336676028 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tb_participants',
                columns: [
                    {
                        name: 'id_participant',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isPrimary: true
                    },
                    {
                        name: 'nm_participant',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'ds_participant',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    },
                    {
                        name: 'im_participant',
                        type: 'varchar',
                        length: '100',
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tb_participants')
    }

}
