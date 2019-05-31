module.exports = {
  PG_HOSTNAME: process.env.PG_HOSTNAME || 'localhost',
  PG_PORT: Number(process.env.PG_PORT) || 5432,
  PG_USERNAME: process.env.PG_USERNAME,
  PG_PASSWORD: process.env.PG_PASSWORD
}
