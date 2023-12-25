import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCategories1703526680980 implements MigrationInterface {
    name = 'AddCategories1703526680980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("name" character varying NOT NULL, CONSTRAINT "PK_8b0be371d28245da6e4f4b61878" PRIMARY KEY ("name"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
