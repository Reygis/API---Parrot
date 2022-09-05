import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662400420831 implements MigrationInterface {
    name = 'default1662400420831'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`userphoto\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`userphoto\``);
    }

}
