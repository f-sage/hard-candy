import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb implements MigrationInterface {
  name = 'SeedDb1703527231199';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO categories (name) VALUES ('Різдво'), ('Їжа'), ('Новий рік'), ('День захисників і захисниць')`,
    );
  }

  public async down(): Promise<void> {}
}
