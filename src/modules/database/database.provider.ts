import * as pgPromise from 'pg-promise';

const pgp = pgPromise();

const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'mailer',
  user: 'postgres',
  password: 'postgres',
};

const db = pgp(dbConfig);

export { db };
