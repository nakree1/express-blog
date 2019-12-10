const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  DB_NAME: 'postgres',
  DB_TABLE: 'express_blog',
  DB_HOSTNAME: process.env.DB_HOSTNAME || 'localhost',
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,

  TOKEN_SECRET: process.env.TOKEN_SECRET,
  TOKEN_EXPIRES_IN: process.env.TOKEN_EXPIRES_IN,
  PASSWORD_SALT: process.env.PASSWORD_SALT
};
