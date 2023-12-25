import { DataSource } from 'typeorm';
import ormconfig from './ormconfig';

const ormseedconfig = {
  ...ormconfig,
  migrations: ['src/seeds/*.ts'],
};

export default ormseedconfig;

export const connectionSource = new DataSource(ormseedconfig);
