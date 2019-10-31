module.exports = {
  DB_NAME: 'postgres',
  DB_TABLE: 'express_blog',
  DB_HOSTNAME: process.env.DB_HOSTNAME || 'localhost',
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD
}
