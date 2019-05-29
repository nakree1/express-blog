import pgp from 'pg-promise';
import { PG_USERNAME, PG_PORT, PG_HOSTNAME, PG_PASSWORD } from './config'

// const credentials = `postgres://${PG_USERNAME}:${PG_PASSWORD}@${PG_HOSTNAME}/express_blog`
const dbConfig = {
  host: PG_HOSTNAME,
  port: PG_PORT,
  database: 'express_blog',
  user: PG_USERNAME || 'admin',
  password: PG_PASSWORD ||'123456'
}

console.log(dbConfig)

export const db = pgp()(dbConfig);



