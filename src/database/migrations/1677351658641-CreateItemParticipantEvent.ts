/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars*/
/* @typescript-eslint/no-empty-function*/

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateItemParticipantEvent1677351658641 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'item_participant_events',
                columns: [
                    {
                        name: 'id_participant',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'id_event',
                        type: 'int',
                        isNullable: false
                    }
                ],
                foreignKeys: [
                    {
                        name: 'fk_participant_events',
                        columnNames: ['id_participant'],
                        referencedTableName: 'tb_participants',
                        referencedColumnNames: ['id_participant']
                    },
                    {
                        name: 'fk_events_participant',
                        columnNames: ['id_event'],
                        referencedTableName: 'tb_events',
                        referencedColumnNames: ['id_event']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('item_participant_events')
    }

}
