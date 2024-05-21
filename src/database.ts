import { Sequelize } from 'sequelize';
import 'dotenv/config'

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  ssl: true,
  dialectOptions: {
    ssl: {
      readonly: true,
    }
  }
});
