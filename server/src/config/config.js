import { config } from 'dotenv';
import path from "path";

config();

const DB_NAME = 'postgres';
const DB_TABLE = 'express_blog';
const DB_HOSTNAME = process.env.DB_HOSTNAME || 'localhost';
const DB_PORT = Number(process.env.DB_PORT) || 5432;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const TOKEN_SECRET = process.env.TOKEN_SECRET;
const TOKEN_EXPIRES_IN = process.env.TOKEN_EXPIRES_IN;
const PASSWORD_SALT = process.env.PASSWORD_SALT;


const UPLOAD_DIR = 'uploads';
const UPLOAD_PATH = path.join(__dirname, '..', '..', UPLOAD_DIR);

export {
  DB_NAME,
  DB_TABLE,
  DB_HOSTNAME,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,

  TOKEN_SECRET,
  TOKEN_EXPIRES_IN,
  PASSWORD_SALT,

  UPLOAD_PATH,
  UPLOAD_DIR
};
