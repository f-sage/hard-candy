import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { DataSource } from 'typeorm';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'mediumclone',
  password: '123',
  database: 'hardcandy',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  name: 'default',
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  subscribers: [__dirname + '/subscriber/**/*{.ts,.js}'],
};

export default config;

export const connectionSource = new DataSource(config);
